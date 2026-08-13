import React from 'react';
import { BusinessEntity } from '../types';
import { GenericBrandLogo } from './BrandLogos';
import { ArrowRight, Tag, CheckCircle2 } from 'lucide-react';

interface BusinessCardProps {
  business: BusinessEntity;
  onSelect: (business: BusinessEntity) => void;
  onInquire: (businessName: string) => void;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({
  business,
  onSelect,
  onInquire,
}) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Image Header with Logo Badge */}
      <div className="relative h-48 overflow-hidden bg-stone-100">
        <img
          src={business.image}
          alt={business.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-emerald-900/90 text-emerald-100 text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-md flex items-center space-x-1">
          <Tag className="w-3 h-3 text-amber-400" />
          <span>{business.category}</span>
        </div>

        {/* Pricing Badge if available */}
        {business.pricingNote && (
          <div className="absolute top-3 right-3 bg-amber-500 text-stone-950 text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-md">
            {business.pricingNote}
          </div>
        )}

        {/* Brand Logo Floating Overlay */}
        <div className="absolute -bottom-6 left-5 p-1 bg-white rounded-2xl shadow-lg border border-stone-100">
          <GenericBrandLogo type={business.logoType} size={54} className="w-13 h-13" />
        </div>
      </div>

      {/* Card Content Body */}
      <div className="pt-8 px-6 pb-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-stone-900 group-hover:text-[#0f382c] transition-colors">
              {business.name}
            </h3>
            <span className="text-[10px] font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
              Est. {business.established}
            </span>
          </div>

          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mt-0.5 mb-3">
            {business.subtitle}
          </p>

          <p className="text-stone-600 text-sm leading-relaxed mb-4">
            {business.shortDescription}
          </p>

          {/* Feature Highlights */}
          <ul className="space-y-1.5 mb-5">
            {business.highlights.slice(0, 3).map((highlight, idx) => (
              <li key={idx} className="flex items-center text-xs text-stone-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                <span className="truncate">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
          <button
            onClick={() => onSelect(business)}
            className="text-xs font-bold text-[#0f382c] hover:text-emerald-700 flex items-center transition-colors group/btn py-1"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onInquire(business.name)}
            className="px-3.5 py-1.5 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-sm active:scale-95"
          >
            Inquire Now
          </button>
        </div>
      </div>
    </div>
  );
};
