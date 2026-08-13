import { BusinessEntity, ProjectEntity, ContactInfo } from '../types';

// Image imports matching the user's labeled pictures
import heroFarmlandImg from '../assets/images/hero_farmland_1786536377970.jpg';
import livestockPastureImg from '../assets/images/livestock_pasture_1786536392905.jpg';
import logisticsTransportImg from '../assets/images/logistics_transport_1786536406650.jpg';

import agriConsultingFlyerImg from '../assets/images/agri_consulting_flyer_1786635141218.jpg';
import delicacyDishPhotoImg from '../assets/images/delicacy_dish_photo_1786635219317.jpg';
import delicacyEatsLogoImg from '../assets/images/delicacy_eats_logo_1786635160310.jpg';
import delicacyMenuFlyerImg from '../assets/images/delicacy_menu_flyer_1786635261016.jpg';
import fridgeMastersArtImg from '../assets/images/fridge_masters_art_1786635247231.jpg';
import livestockFeedPhotoImg from '../assets/images/livestock_feed_photo_1786635234957.jpg';
import livestockSaleFlyerImg from '../assets/images/livestock_sale_flyer_1786635152251.jpg';
import piggeryHomeLogoImg from '../assets/images/piggery_home_logo_1786635197881.jpg';
import rtCleaningFlyerImg from '../assets/images/rt_cleaning_flyer_1786635172465.jpg';
import rtTransportFlyerImg from '../assets/images/rt_transport_flyer_1786635188178.jpg';
import storageTransportLogoImg from '../assets/images/storage_transport_logo_1786635208815.jpg';
import studentStorageFlyerImg from '../assets/images/student_storage_flyer_1786635271012.jpg';

import farmersLoversPhotoImg from '../assets/images/farmers_lovers_photo_1786639271067.jpg';
import fridgeMastersPhotoImg from '../assets/images/fridge_masters_photo_1786639284027.jpg';
import storageUnitPhotoImg from '../assets/images/storage_unit_photo_1786639300784.jpg';
import eggDishPhotoImg from '../assets/images/egg_dish_photo_1786639312108.jpg';
import spitsDishPhotoImg from '../assets/images/spits_dish_photo_1786639322732.jpg';
import storageFacilityStaffImg from '../assets/images/storage_facility_staff_1786648581103.jpg';

export {
  heroFarmlandImg,
  livestockPastureImg,
  logisticsTransportImg,
  agriConsultingFlyerImg,
  delicacyDishPhotoImg,
  delicacyEatsLogoImg,
  delicacyMenuFlyerImg,
  fridgeMastersArtImg,
  livestockFeedPhotoImg,
  livestockSaleFlyerImg,
  piggeryHomeLogoImg,
  rtCleaningFlyerImg,
  rtTransportFlyerImg,
  storageTransportLogoImg,
  studentStorageFlyerImg,
  farmersLoversPhotoImg,
  fridgeMastersPhotoImg,
  storageUnitPhotoImg,
  eggDishPhotoImg,
  spitsDishPhotoImg,
  storageFacilityStaffImg,
};

export const companyContact: ContactInfo = {
  directorGeneral: 'Mr Refilwe Xhali',
  title: 'Director General',
  phone: '072 077 8876',
  email: 'refilwethapelo1@gmail.com',
  regNumber: '2022/337/316/07',
  pretoriaOffice: '25 Kgalagngwe Street, Saulsville, Pretoria, 0125',
  bloemfonteinBranch: 'Universitas, Bloemfontein, 9301',
  establishedYear: '2022',
  tagline: '"We never miss it."',
};

export const companyAboutText =
  'Refilwe Thapelo Trading & Projects is a diversified business group established in 2022, operating across food services, logistics, refrigeration, agriculture, cleaning services, trading and development initiatives.';

export const establishedBusinesses: BusinessEntity[] = [
  {
    id: 'de-delicacy-eats',
    name: 'De Delicacy Eats',
    subtitle: 'Food Truck & Catering',
    category: 'Food Services',
    shortDescription: 'Gourmet mobile culinary services and food truck menu located near UFS Universitas.',
    fullDescription: 'Located at Arndt Street Universitas near Unilofts (opposite UFS small gate), De Delicacy Eats serves delicious toasted breakfasts, Dagwoods, Kotas, chicken strips, and fries prepared with top culinary standards.',
    established: '2022',
    highlights: ['Food Truck at UFS Small Gate', 'Breakfasts, Dagwoods & Kotas', 'Catering & Event Menus', 'Call/WhatsApp: 076 677 9928'],
    pricingNote: 'Kotas from R28 | Dagwoods from R40',
    image: delicacyDishPhotoImg,
    flyerImage: delicacyMenuFlyerImg,
    galleryImages: [delicacyDishPhotoImg, delicacyMenuFlyerImg, delicacyEatsLogoImg],
    customLogo: delicacyEatsLogoImg,
    logoType: 'de-delicacy',
  },
  {
    id: 'rt-transport-logistics',
    name: 'RT Transport & Logistics',
    subtitle: 'Transport & Distribution',
    category: 'Logistics',
    shortDescription: 'Reliable freight transport and student logistics across Bloemfontein and nationwide.',
    fullDescription: 'RT Transport & Logistics provides efficient transportation services across South Africa. Specializing in affordable transport solutions starting from R150 per trip, as well as freight distribution for businesses and students.',
    established: '2022',
    highlights: ['Trips from as little as R150', 'Student Move-In & Relocation', 'Nationwide Cargo & Goods Transport', 'We Never Miss Guarantee'],
    pricingNote: 'Local trips starting at R150',
    image: rtTransportFlyerImg,
    flyerImage: rtTransportFlyerImg,
    galleryImages: [rtTransportFlyerImg, logisticsTransportImg, storageTransportLogoImg],
    customLogo: storageTransportLogoImg,
    logoType: 'rt-transport',
  },
  {
    id: 'rt-storage',
    name: 'RT Storage',
    subtitle: 'Student & General Storage Solutions',
    category: 'Services',
    shortDescription: 'Secure student storage services with special rates for 1, 2, and 3-month durations.',
    fullDescription: 'Safe and flexible storage facilities tailored for student move-outs, term breaks, and equipment safeguarding. Offers 1 month (R300), 2 months (R500), and 3 months (R800) packages for up to 5 items.',
    established: '2022',
    highlights: ['1 Month Storage: R300', '2 Months Storage: R500', '3 Months Storage: R800', 'Extra Items R90 Each'],
    pricingNote: 'Student special packages available',
    image: storageFacilityStaffImg,
    flyerImage: studentStorageFlyerImg,
    galleryImages: [storageFacilityStaffImg, storageUnitPhotoImg, studentStorageFlyerImg, storageTransportLogoImg],
    customLogo: storageTransportLogoImg,
    logoType: 'rt-storage',
  },
  {
    id: 'bfn-fridge-masters',
    name: 'BFN Fridge Masters',
    subtitle: 'Cooling & Refrigeration',
    category: 'Refrigeration',
    shortDescription: 'Refrigeration repairs, commercial cold rooms, and affordable student fridge rentals.',
    fullDescription: 'Under the promise "Where Every Chill Counts", BFN Fridge Masters offers fridge maintenance, commercial cooling units, display fridges, and student fridge rentals with convenient contact at 067 794 8973.',
    established: '2022',
    highlights: ['Student Rental Packages from R250/pm', 'Display & Commercial Refrigerators', 'Fast Repairs & Servicing', 'Call: 067 794 8973'],
    pricingNote: 'Rentals from R250 per month',
    image: fridgeMastersPhotoImg,
    flyerImage: fridgeMastersArtImg,
    galleryImages: [fridgeMastersPhotoImg, fridgeMastersArtImg],
    logoType: 'bfn-fridge',
  },
  {
    id: 'rt-cleaning-projects',
    name: 'RT Cleaning Projects',
    subtitle: 'Home, Yard & Event Cleaning',
    category: 'Cleaning',
    shortDescription: 'Professional cleaning services for home, yard, venues, ceremonies, braais, and graves.',
    fullDescription: 'Simplify your cleaning with RT Cleaning Projects! Specializing in post-event yard and home cleanup, large capacity venue cleaning, grave maintenance, and corporate office cleaning based in Atteridgeville, Pretoria.',
    established: '2022',
    highlights: ['Yard & Home Cleaning', 'Post-Event & Braai Cleanup', 'Venue & Corporate Cleaning', 'Grave Cleaning & Care'],
    pricingNote: 'Affordable custom quotes',
    image: rtCleaningFlyerImg,
    flyerImage: rtCleaningFlyerImg,
    galleryImages: [rtCleaningFlyerImg],
    logoType: 'rt-cleaning',
  },
  {
    id: 'rt-vegetables',
    name: 'RT Vegetables',
    subtitle: 'Fresh Produce',
    category: 'Agriculture',
    shortDescription: 'Farm-fresh vegetables sourced directly and distributed to kitchens and retailers.',
    fullDescription: 'Connecting agricultural producers directly with consumer markets, RT Vegetables delivers fresh spinach, cabbages, onions, potatoes, and tomatoes with farm-gate freshness.',
    established: '2022',
    highlights: ['Farm-Direct Sourcing', 'Wholesale & Retail Supply', 'Strict Freshness Quality Control', 'Consistent Market Delivery'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    logoType: 'rt-vegetables',
  },
  {
    id: 'rt-cash-assist',
    name: 'RT Cash Assist',
    subtitle: 'Financial Assistance Services',
    category: 'Financial Services',
    shortDescription: 'Transparent micro-financial assistance services for urgent cash flow needs.',
    fullDescription: 'Providing responsible, convenient micro-financial support to help individuals and small entrepreneurs bridge short-term cash flow gaps with clear terms and fast turnaround times.',
    established: '2022',
    highlights: ['Fast Approval Process', 'Transparent Terms & Fees', 'Flexible Repayment Schedules', 'Friendly Customer Support'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800',
    logoType: 'rt-cash',
  },
  {
    id: 'rt-spits',
    name: 'RT Spits',
    subtitle: 'Spit Braai & Catering',
    category: 'Food Services',
    shortDescription: 'Traditional South African spit braai catering for ceremonies, parties, and corporate events.',
    fullDescription: 'Delivering succulent lamb, pork, and beef spit braais cooked on site by experienced braai masters, accompanied by traditional sides, salads, and post-event cleanup support.',
    established: '2022',
    highlights: ['On-Site Spit Braai Cooking', 'Premium Seasoned Quality Meats', 'Full Event Buffet Options', 'Clean Yard & Ceremony Support'],
    image: spitsDishPhotoImg,
    galleryImages: [spitsDishPhotoImg],
    logoType: 'rt-spits',
  },
];

export const developmentProjects: ProjectEntity[] = [
  {
    id: 'rt-piggery-home',
    name: 'RT Piggery Home',
    subtitle: 'Sustainable Swine Farming & Breeding',
    category: 'Livestock & Meat',
    shortDescription: 'Modern piggery facility committed to biosecure breeding and high-quality pork production.',
    fullDescription: 'RT Piggery Home is a dedicated division of Farmers Lovers PTY (LTD). Focused on ethical animal husbandry, modern housing, and supplying healthy pork livestock to processing plants and local meat markets.',
    divisionNote: 'A division of FARMERS LOVERS PTY (LTD)',
    visionGoals: ['Biosecure Breeding Facilities', 'Sustainable Feed Management', 'Expansion to 500+ Breeding Sows', 'Local Youth Employment in Agriculture'],
    image: piggeryHomeLogoImg,
    flyerImage: piggeryHomeLogoImg,
    galleryImages: [piggeryHomeLogoImg, farmersLoversPhotoImg],
    customLogo: piggeryHomeLogoImg,
    logoType: 'rt-piggery',
  },
  {
    id: 'rt-livestock-sales',
    name: 'RT Livestock Sales',
    subtitle: 'Commercial & Traditional Animal Trading',
    category: 'Livestock & Meat',
    shortDescription: 'Premium livestock sale for Sheep/Lamb (R78), Goat/Chevon (R80), and Cattle/Beef (R67).',
    fullDescription: 'Facilitating fair-value livestock sales for cattle (300-350kg from R67), sheep/lamb (30-35kg from R78), and goat/chevon (30-35kg from R80). Providing guaranteed quality animals handled with care.',
    visionGoals: ['Sheep/Lamb (30-35 kg) from R78', 'Goat/Chevon (30-35 kg) from R80', 'Cattle/Beef (300-350 kg) from R67', 'Guaranteed Quality & Health Documentation'],
    image: livestockSaleFlyerImg,
    flyerImage: livestockSaleFlyerImg,
    galleryImages: [livestockSaleFlyerImg, livestockPastureImg, livestockFeedPhotoImg],
    logoType: 'rt-livestock',
  },
  {
    id: 'rt-meat-ranch',
    name: 'RT Meat Ranch',
    subtitle: 'Meat @ Your Doorstep',
    category: 'Livestock & Meat',
    shortDescription: 'Quality & affordable meat direct to your door, sourced ethically from local ranches.',
    fullDescription: 'Operating under the promise "Quality & Affordable Meat is Our Priority", RT Meat Ranch connects piggery and livestock farms directly to households and restaurants through cold-chain home delivery.',
    divisionNote: 'A division of RT TRADING AND RT Piggery Home',
    visionGoals: ['Cold-Chain Doorstep Delivery', 'Affordable Bulk Meat Packs', 'Standardized Butchery Cuts', 'Support for Local Small Ranches'],
    image: livestockFeedPhotoImg,
    galleryImages: [livestockFeedPhotoImg, livestockPastureImg, piggeryHomeLogoImg],
    logoType: 'rt-meat-ranch',
  },
  {
    id: 'rt-agricultural-consultations',
    name: 'RT Agricultural Consultations',
    subtitle: 'Farming Advisory & Soil Management',
    category: 'Consulting',
    shortDescription: 'Agriculture consulting services covering crop, livestock, soil health, and farm advisory.',
    fullDescription: 'Empowering new and developing farmers with consultations on crop management, livestock management, soil health & conservation, farm support & advisory, and animal/crop health. First session consultation free, starting from R500/session.',
    visionGoals: ['First Session Free Consultation', 'Sessions from R500.00', 'Crop & Livestock Management', 'Soil Health & Conservation'],
    image: agriConsultingFlyerImg,
    flyerImage: agriConsultingFlyerImg,
    galleryImages: [agriConsultingFlyerImg, heroFarmlandImg, livestockFeedPhotoImg],
    logoType: 'rt-consult',
  },
  {
    id: 'rt-egg-supply',
    name: 'RT Egg Supply',
    subtitle: 'Poultry & Fresh Egg Production',
    category: 'Poultry',
    shortDescription: 'Fresh, graded egg production and distribution for bakeries, retail, and local communities.',
    fullDescription: 'Building a sustainable layer hen facility to produce fresh, high-grade eggs daily. Designed to combat local food insecurity and supply wholesale buyers with reliable fresh eggs.',
    visionGoals: ['Automated Egg Grading & Packing', 'Local Bakery Supply Agreements', 'Zero-Waste Organic Feed Integration', 'Affordable Protein Access'],
    image: eggDishPhotoImg,
    galleryImages: [eggDishPhotoImg, heroFarmlandImg],
    logoType: 'rt-egg',
  },
  {
    id: 'farmers-lovers-npo',
    name: 'Farmers Lovers NPO',
    subtitle: 'Community Farming & Youth Empowerment',
    category: 'Community & NPO',
    shortDescription: 'Non-profit initiative focused on agricultural skills training, food security, and rural upliftment.',
    fullDescription: 'Farmers Lovers NPO works on the ground to train young South Africans in modern agricultural techniques, establish community vegetable gardens, and support emergent black-owned farming ventures.',
    visionGoals: ['Community Garden Workshops', 'Youth Agricultural Bursaries', 'Equipment Sharing Co-ops', 'Rural Food Security Projects'],
    image: farmersLoversPhotoImg,
    galleryImages: [farmersLoversPhotoImg],
    logoType: 'farmers-lovers',
  },
];

