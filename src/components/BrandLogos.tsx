import React from 'react';
import rtOfficialLogoImg from '../assets/images/rt_official_logo_1786606602881.jpg';

interface LogoProps {
  className?: string;
  size?: number;
}

// 1. Main Refilwe Thapelo Trading & Projects Logo (Official Circular Emblem Image)
export const MainRTLogo: React.FC<LogoProps> = ({ className = "h-16 w-16", size = 120 }) => (
  <img
    src={rtOfficialLogoImg}
    alt="Refilwe Thapelo Trading & Projects Official Logo"
    referrerPolicy="no-referrer"
    className={`rounded-full object-contain bg-white ${className}`}
    style={{ width: size, height: size }}
  />
);

// 2. De Delicacy Eats Logo
export const DeDelicacyLogo: React.FC<LogoProps> = ({ className = "h-12 w-12", size = 100 }) => (
  <MainRTLogo className={className} size={size} />
);

// 3. RT Transport & Logistics Logo
export const RTTransportLogo: React.FC<LogoProps> = ({ className = "h-12 w-12", size = 100 }) => (
  <MainRTLogo className={className} size={size} />
);

// 4. BFN Fridge Masters Logo
export const BFNFridgeLogo: React.FC<LogoProps> = ({ className = "h-12 w-12", size = 100 }) => (
  <MainRTLogo className={className} size={size} />
);

// 5. RT Piggery Home Logo
export const RTPiggeryLogo: React.FC<LogoProps> = ({ className = "h-12 w-12", size = 100 }) => (
  <MainRTLogo className={className} size={size} />
);

// 6. RT Meat Ranch Logo
export const RTMeatRanchLogo: React.FC<LogoProps> = ({ className = "h-12 w-12", size = 100 }) => (
  <MainRTLogo className={className} size={size} />
);

// 7. Generic RT Sub-brand Logo Generator (Renders Official Logo in all placeholders)
export const GenericBrandLogo: React.FC<{ type?: string; className?: string; size?: number }> = ({
  className = "h-12 w-12",
  size = 100,
}) => {
  return <MainRTLogo className={className} size={size} />;
};

