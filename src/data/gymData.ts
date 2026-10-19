import { FacilityItem, GalleryImage, MembershipPlan, ProgramDetail } from '../types.ts';

// Direct ESM imports: Vite guarantees these will be processed, hashed, and bundled in both dev and production!
import heroAthleteImg from '../assets/images/hero_athlete_training_1792418671197.jpg';
import strengthTrainingImg from '../assets/images/strength_training_1792418672532.jpg';
import personalTrainingImg from '../assets/images/personal_training_1792418673126.jpg';
import cardioConditioningImg from '../assets/images/cardio_conditioning_1792418672989.jpg';
import gymInteriorImg from '../assets/images/gym_interior_floor_1792418674455.jpg';
import facilityFreeWeightsImg from '../assets/images/facility_free_weights_1792418673662.jpg';

export const ASSETS = {
  heroAthlete: heroAthleteImg,
  heroAthleteFallback: '/images/hero_athlete.jpg',
  heroAthletePublic: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',

  strengthTraining: strengthTrainingImg,
  strengthTrainingFallback: '/images/strength_training.jpg',
  strengthTrainingPublic: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',

  personalTraining: personalTrainingImg,
  personalTrainingFallback: '/images/personal_training.jpg',
  personalTrainingPublic: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',

  cardioConditioning: cardioConditioningImg,
  cardioConditioningFallback: '/images/cardio_conditioning.jpg',
  cardioConditioningPublic: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80',

  gymInterior: gymInteriorImg,
  gymInteriorFallback: '/images/gym_interior.jpg',
  gymInteriorPublic: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80',

  facilityFreeWeights: facilityFreeWeightsImg,
  facilityFreeWeightsFallback: '/images/facility_free_weights.jpg',
  facilityFreeWeightsPublic: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80',
};

export const PROGRAMS: ProgramDetail[] = [
  {
    id: 'strength',
    title: 'Strength Training',
    headline: 'Compound Resistance & Progressive Overload',
    description: 'Build strength with a focused approach to resistance training.',
    image: ASSETS.strengthTraining,
    fallbackImage: ASSETS.strengthTrainingFallback,
    alt: 'Athlete performing barbell strength training in power rack',
    focusAreas: [
      'Compound Barbell Mechanics (Squat, Deadlift, Press)',
      'Systematic Progressive Overload & Periodization',
      'Structural Joint Integrity & Grip Development',
      'Accessory Hypertrophy for Muscular Balance'
    ],
    equipment: [
      'Heavy-gauge commercial power cages',
      'Calibrated cast-iron & urethane competition plates',
      'Specialty barbells (Safety Squat, Trap Bar, Texas Power)',
      'Dedicated chalk stations and sound-dampened lifting platforms'
    ],
    structure: 'Structured 4-to-6 week cycles prioritizing movement proficiency, technical consistency, and progressive load increments.'
  },
  {
    id: 'personal',
    title: 'Personal Training',
    headline: 'Direct 1-on-1 Coaching & Movement Diagnostics',
    description: 'Get individual guidance tailored to your fitness goals.',
    image: ASSETS.personalTraining,
    fallbackImage: ASSETS.personalTrainingFallback,
    alt: 'Coach instructing athlete on lifting technique',
    focusAreas: [
      'Individual Biomechanical Movement Screening',
      'Customized Session Design for Your Schedule',
      'Real-Time Repetition & Bar-Path Correction',
      'Accountability, Recovery & Sustainable Habits'
    ],
    equipment: [
      'Full facility access with reserved platform priority',
      'Video analysis & bar velocity diagnostics',
      'Targeted mobility rigs and resistance bands',
      'Dedicated private consultation and progress review zone'
    ],
    structure: 'Tailored 60-minute individual sessions scheduled directly with your designated coach.'
  },
  {
    id: 'cardio',
    title: 'Cardio & Conditioning',
    headline: 'Work Capacity, Lactic Threshold & Stamina',
    description: 'Work on endurance, stamina, and overall fitness.',
    image: ASSETS.cardioConditioning,
    fallbackImage: ASSETS.cardioConditioningFallback,
    alt: 'Athlete training intensely with heavy battle ropes on turf',
    focusAreas: [
      'Aerobic Base & VO2 Max Capacity Building',
      'Anaerobic Glycolytic Sprint & Interval Conditioning',
      'Metabolic Resistance Conditioning via Sleds & Ropes',
      'Active Recovery Protocols to Complement Heavy Lifting'
    ],
    equipment: [
      'Commercial Concept2 Rowers, SkiErgs & BikeErgs',
      'Heavy conditioning battle ropes on turf strip',
      'Prowler push/pull sleds with rubberized surface',
      'Kettlebell runs, medicine balls, and plyo platforms'
    ],
    structure: 'High-density conditioning blocks calibrated to preserve strength gains while developing work capacity.'
  }
];

export const FACILITIES: FacilityItem[] = [
  {
    id: 'strength-equip',
    title: 'Strength Equipment',
    badge: 'Heavy Duty',
    description: 'Rigid commercial power cages, plate-loaded machines, Olympic benches, and precision barbell racks designed for heavy daily use.',
    details: ['6 Full Power Cages', 'Pin & Plate Loaded Iso-Lateral Units', 'Adjustable Competition Flat/Incline Benches'],
    image: ASSETS.strengthTraining,
    fallbackImage: ASSETS.strengthTrainingFallback
  },
  {
    id: 'free-weights',
    title: 'Free Weights Area',
    badge: 'Urethane Steel',
    description: 'Extensive run of solid steel urethane dumbbells, paired with calibrated bumper and cast iron plates.',
    details: ['Dumbbell pairs from light to heavy dumbbells', 'Multiple Olympic standard bars', 'Cast iron plates & bumper pairs'],
    image: ASSETS.facilityFreeWeights,
    fallbackImage: ASSETS.facilityFreeWeightsFallback
  },
  {
    id: 'workout-floor',
    title: 'Workout Floor',
    badge: 'Impact Dampened',
    description: 'High-density dual-layer vulcanized rubber flooring offering optimal foot traction and acoustic shock absorption.',
    details: ['Seamless shock-absorbing rubber', 'Designated dropping zones', 'Spacious open spacing between stations'],
    image: ASSETS.gymInterior,
    fallbackImage: ASSETS.gymInteriorFallback
  },
  {
    id: 'training-space',
    title: 'Training Space & Turf',
    badge: 'Functional Zone',
    description: 'Dedicated turf strip for sled pushes, carry variations, plyometrics, and mobility preparation work.',
    details: ['Heavy-gauge push sled track', 'Ergometer conditioning station', 'Warm-up and mobility perimeter'],
    image: ASSETS.cardioConditioning,
    fallbackImage: ASSETS.cardioConditioningFallback
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'standard',
    name: 'Club Standard Access',
    priceNote: '[PLACEHOLDER: confirmed membership price and duration]',
    duration: 'Month-to-Month or Annual Term',
    description: 'Essential access to the open gym floor, free weight area, and strength facilities during all operating hours.',
    features: [
      'Unlimited open gym access during operating hours',
      'Full access to power cages and free weights',
      'Locker room & high-pressure shower facilities',
      'Complimentary initial facility orientation',
      'Access to member app for hours and updates'
    ]
  },
  {
    id: 'all-access',
    name: 'All-Access Conditioning',
    priceNote: '[PLACEHOLDER: confirmed membership price and duration]',
    duration: 'Flexible Term (Editable)',
    description: 'Complete access to all strength zones, the conditioning turf strip, ergometers, and recovery areas.',
    recommended: true,
    features: [
      'Full gym floor, rack, and free weight access',
      'Unrestricted use of conditioning turf, sleds & ergs',
      'Dedicated locker privileges',
      'Priority access to lifting platforms during peak times',
      '2 Guest passes per month for training partners'
    ]
  },
  {
    id: 'guided-coaching',
    name: 'Guided Coaching & Access',
    priceNote: '[PLACEHOLDER: confirmed membership price and duration]',
    duration: 'Direct Coach Agreement',
    description: 'Full club access combined with structured 1-on-1 coaching sessions and custom movement programming.',
    features: [
      'Comprehensive 1-on-1 coaching sessions',
      'Customized periodized strength programming',
      'Bi-weekly technique audit and movement screening',
      'Unlimited club and conditioning floor access',
      'Direct contact channel with your coach'
    ]
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    src: ASSETS.gymInterior,
    fallbackSrc: ASSETS.gymInteriorFallback,
    title: 'Main Strength Floor',
    caption: 'Custom matte black power racks, spacious lifting platforms, and ambient directional overhead lighting.',
    aspect: 'landscape'
  },
  {
    id: 'g2',
    src: ASSETS.heroAthlete,
    fallbackSrc: ASSETS.heroAthleteFallback,
    title: 'Free Weight Training',
    caption: 'Athletic strength training with heavy urethane dumbbells in a focused, distraction-free environment.',
    aspect: 'portrait'
  },
  {
    id: 'g3',
    src: ASSETS.facilityFreeWeights,
    fallbackSrc: ASSETS.facilityFreeWeightsFallback,
    title: 'Free Weight Array',
    caption: 'Precision knurled dumbbells and competition grade benches lined for disciplined training.',
    aspect: 'square'
  },
  {
    id: 'g4',
    src: ASSETS.strengthTraining,
    fallbackSrc: ASSETS.strengthTrainingFallback,
    title: 'Lifting Platform & Barbell Rig',
    caption: 'Heavy-gauge power rack station equipped for squats, deadlifts, and overhead presses.',
    aspect: 'square'
  },
  {
    id: 'g5',
    src: ASSETS.cardioConditioning,
    fallbackSrc: ASSETS.cardioConditioningFallback,
    title: 'Conditioning Turf Strip',
    caption: 'High-intensity battle ropes and sled lanes for energy system conditioning.',
    aspect: 'landscape'
  },
  {
    id: 'g6',
    src: ASSETS.personalTraining,
    fallbackSrc: ASSETS.personalTrainingFallback,
    title: '1-on-1 Coaching Studio',
    caption: 'Dedicated space for movement screening, bar path diagnostics, and private coaching.',
    aspect: 'square'
  }
];

export const CONTACT_INFO = {
  address: '[PLACEHOLDER: actual gym address]',
  addressDisplay: '104 Ironworks Way, West Industrial District',
  phone: '[PLACEHOLDER: actual phone number]',
  phoneDisplay: '+1 (555) 019-2834',
  phoneTel: '+15550192834',
  whatsapp: '[PLACEHOLDER: actual WhatsApp number]',
  whatsappNumber: '+15550192834',
  whatsappUrl: 'https://wa.me/15550192834?text=Hello%20BODY%20FITNESS%20CLUB%2C%20I%20would%20like%20to%20enquire%20about%20membership%20and%20training.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BODY+FITNESS+CLUB+Gym',
  hours: [
    { days: 'Monday – Friday', times: '05:30 – 22:30' },
    { days: 'Saturday – Sunday', times: '07:00 – 20:00' },
    { days: 'Public Holidays', times: '08:00 – 18:00 (Confirmed via notices)' }
  ]
};
