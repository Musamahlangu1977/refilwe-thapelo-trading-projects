import React from 'react';
import { BusinessEntity, ProjectEntity } from '../types';
import { GenericBrandLogo } from './BrandLogos';
import { X, CheckCircle2, Phone, Mail, Building2, Calendar, Send, ShieldAlert, Sparkles } from 'lucide-react';

interface DetailModalProps {
  entity: BusinessEntity | ProjectEntity | null;
  onClose: () => void;
  onInquire: (entityName: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  entity,
  onClose,
  onInquire,
}) => {
  if (!entity) return null;

  const isBusiness = 'highlights' in entity;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative flex flex-col">
        
        {/* Modal Top Header Bar with Close Button */}
        <div className="relative h-56 bg-stone-900 overflow-hidden shrink-0">
          <img
            src={entity.image}
            alt={entity.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-all shadow-md z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Tag */}
          <div className="absolute top-4 left-4 bg-emerald-900/90 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full border border-emerald-600/40">
            {isBusiness ? 'ESTABLISHED BUSINESS' : 'PROJECTS & DEVELOPMENT'}
          </div>

          {/* Bottom Title overlay */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {entity.name}
              </h2>
              <p className="text-amber-400 font-semibold text-sm">
                {entity.subtitle}
              </p>
            </div>

            <div className="p-1 bg-white rounded-2xl shadow-xl shrink-0 hidden sm:block">
              <GenericBrandLogo type={entity.logoType} size={64} className="w-16 h-16" />
            </div>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Logo Badge for Mobile */}
          <div className="flex sm:hidden items-center space-x-3 bg-stone-50 p-3 rounded-xl border border-stone-200">
            <GenericBrandLogo type={entity.logoType} size={48} className="w-12 h-12" />
            <div>
              <div className="font-bold text-stone-900">{entity.name}</div>
              <div className="text-xs text-emerald-700">{entity.subtitle}</div>
            </div>
          </div>

          {/* Division note if exists */}
          {'divisionNote' in entity && entity.divisionNote && (
            <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-lg text-xs font-bold text-amber-900 flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{entity.divisionNote}</span>
            </div>
          )}

          {/* Pricing Note if exists */}
          {'pricingNote' in entity && entity.pricingNote && (
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-3.5 rounded-r-lg text-sm font-bold text-emerald-900 flex items-center justify-between">
              <span className="flex items-center">
                <Sparkles className="w-4 h-4 text-emerald-600 mr-2" />
                <span>Special Rate:</span>
              </span>
              <span className="bg-emerald-800 text-white px-3 py-1 rounded-full text-xs font-extrabold">
                {entity.pricingNote}
              </span>
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">
              Overview & Background
            </h3>
            <p className="text-stone-700 text-base leading-relaxed">
              {entity.fullDescription}
            </p>
          </div>

          {/* Official Flyer & Image Showcase if available */}
          {entity.galleryImages && entity.galleryImages.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">
                Official Flyer & Media Showcase
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {entity.galleryImages.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <img
                      src={imgUrl}
                      alt={`${entity.name} asset ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto max-h-80 object-contain mx-auto bg-stone-900/5 p-1"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights / Vision Goals */}
          <div>
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">
              {isBusiness ? 'Key Capabilities & Offerings' : 'Project Roadmap & Objectives'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(isBusiness ? (entity as BusinessEntity).highlights : (entity as ProjectEntity).visionGoals).map((item, idx) => (
                <div key={idx} className="flex items-start p-3 bg-stone-50 rounded-xl border border-stone-200/70 text-sm text-stone-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Inquiry Action Banner */}
          <div className="bg-[#0f382c] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div>
              <div className="font-extrabold text-base">Interested in {entity.name}?</div>
              <p className="text-xs text-emerald-200 mt-0.5">
                Contact Refilwe Thapelo Trading & Projects directly for quotes and partnerships.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onInquire(entity.name);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs shadow-md transition-all flex items-center justify-center space-x-2 shrink-0"
            >
              <Send className="w-4 h-4" />
              <span>Send Direct Inquiry</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
