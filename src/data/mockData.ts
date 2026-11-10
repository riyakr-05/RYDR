import type { Vehicle, ClientProfile, ServiceRecord, PersonalizationFilters } from '../types';

export const CLIENT_PROFILE: ClientProfile = {
  name: "Julian Vance",
  memberId: "RYDR-OBS-8842",
  tier: "Obsidian",
  assignedConcierge: {
    name: "Clara Beauchamp",
    title: "Senior Bespoke Advisor",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=260&q=80",
    status: "Available"
  },
  primaryVehicle: {
    model: "RYDR Spectre GT (Bespoke Edition)",
    vin: "WP0AA2Y14PSA88291",
    licensePlate: "7RYDR9",
    batteryLevel: 84,
    rangeRemaining: 318,
    status: "Telemetry Nominal",
    lastPolished: "3 days ago by White-Glove Valet",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
  }
};

export const LUXURY_VEHICLES: Vehicle[] = [
  {
    id: "spectre-gt",
    name: "RYDR Spectre GT",
    subtitle: "The Pure Electric Grand Tourer",
    category: "Grand Tourer",
    propulsion: "Pure Electric",
    startingPrice: 138500,
    rangeOrMpg: "340 Miles EPA",
    acceleration: "2.9s (0-60 mph)",
    power: "720 HP Dual-Motor",
    topSpeed: "185 mph",
    seating: "4-Seat Executive Lounge",
    exteriorImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    interiorImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    description: "Designed for transcontinental touring in total acoustic isolation. Crafted with full-grain Scandinavian aniline leather, open-pore ash wood, and whisper-quiet dual permanent-magnet motors.",
    highlightSpecs: [
      { label: "Architecture", value: "800V Ultra-Fast Charge" },
      { label: "0-80% Charge", value: "18 minutes" },
      { label: "Cargo Volume", value: "18.4 cu.ft + Frunk" },
      { label: "Aerodynamics", value: "0.21 Cd" }
    ],
    curatedFeatures: [
      "Active Noise-Cancelling Acoustic Glass",
      "Executive Rear Reclining Seats with Hot-Stone Massage",
      "Bang & Olufsen 3D Spatial Audio (23 speakers)",
      "Atelier Hand-Stitched Cashmere Headliner"
    ],
    matchScore: 98,
    statusBadge: "Client Favorite"
  },
  {
    id: "lumina-suv",
    name: "RYDR Lumina Executive",
    subtitle: "Sanctuary On Any Terrain",
    category: "Luxury SUV",
    propulsion: "Hybrid V8",
    startingPrice: 154000,
    rangeOrMpg: "580 Miles Total (52 EV)",
    acceleration: "3.4s (0-60 mph)",
    power: "680 HP Twin-Turbo E-Hybrid",
    topSpeed: "178 mph",
    seating: "5 or 7 Luxury Reconfigurable",
    exteriorImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    interiorImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    description: "A commanding presence engineered with active four-corner air suspension, hydraulic roll stabilization, and zero-emission city EV driving with twin-turbo V8 touring breadth.",
    highlightSpecs: [
      { label: "Suspension", value: "Predictive Air Matrix" },
      { label: "Towing", value: "7,700 lbs" },
      { label: "All-Terrain", value: "Dynamic Terrain Response II" },
      { label: "Drivetrain", value: "Intelligent AWD with E-Diff" }
    ],
    curatedFeatures: [
      "Panoramic Sky Lounge with Ambient Constellation Lighting",
      "Dual Integrated Wine Chiller & Flute Compartment",
      "RYDR Level 3 Semi-Autonomous Highway Pilot",
      "Acoustic Double-Pane Heated Windshield"
    ],
    matchScore: 95,
    statusBadge: "Family & Touring"
  },
  {
    id: "aether-roadster",
    name: "RYDR Aether Speedster",
    subtitle: "Spirited Open-Air Precision",
    category: "Track Roadster",
    propulsion: "Pure Electric",
    startingPrice: 182000,
    rangeOrMpg: "310 Miles EPA",
    acceleration: "2.3s (0-60 mph)",
    power: "890 HP Tri-Motor Vectoring",
    topSpeed: "205 mph",
    seating: "2-Seat Carbon Monocoque",
    exteriorImage: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    interiorImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    description: "Built upon an ultra-rigid bespoke carbon-fiber chassis. Delivers instantaneous torque vectoring, lightweight magnesium forged wheels, and track-day telemetry recording.",
    highlightSpecs: [
      { label: "Chassis", value: "Full Carbon Monocoque" },
      { label: "Brakes", value: "Carbon-Ceramic Matrix 420mm" },
      { label: "Weight", value: "3,740 lbs" },
      { label: "Aero", value: "Active Hydraulic Airbrake" }
    ],
    curatedFeatures: [
      "Bespoke Nomex & Alcantara Racing Seats",
      "Digital Telemetry HUD with Track Lap Comparison",
      "Titanium Exhaust Tone Synthesizer",
      "Quick-Release Targa Carbon Roof Panel"
    ],
    matchScore: 92,
    statusBadge: "Bespoke Limited"
  },
  {
    id: "elysian-sedan",
    name: "RYDR Elysian Saloon",
    subtitle: "The Benchmark in Executive Solitude",
    category: "Executive Sedan",
    propulsion: "Pure Electric",
    startingPrice: 122000,
    rangeOrMpg: "410 Miles EPA",
    acceleration: "3.6s (0-60 mph)",
    power: "560 HP Dual-Motor",
    topSpeed: "160 mph",
    seating: "4-Seat First Class Suite",
    exteriorImage: "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1200&q=80",
    interiorImage: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
    description: "The sanctuary saloon with rear executive footrests, motorized privacy curtains, biometric climate zones, and a 410-mile range that eliminates travel friction.",
    highlightSpecs: [
      { label: "Battery", value: "112 kWh Solid-State Hybrid" },
      { label: "Turning Circle", value: "10.2m Rear-Wheel Steer" },
      { label: "Air Filtration", value: "Medical Grade HEPA + Ionizer" },
      { label: "Sound Level", value: "54 dB at 70 mph" }
    ],
    curatedFeatures: [
      "Private Sound Bubbles for Each Seat",
      "Fold-out Aircraft-Grade Aluminum Work Tables",
      "Self-Closing Soft-Latch Doors with Ultrasonic Sensors",
      "Nappa Leather Heated Steering Wheel & Armrests"
    ],
    matchScore: 94,
    statusBadge: "Executive Choice"
  }
];

export const INITIAL_FILTERS: PersonalizationFilters = {
  propulsion: 'All',
  category: 'All',
  budgetMax: 200000,
  primaryPriority: 'Serenity & Luxury',
  seating: 'All'
};

export const PROMPT_SUGGESTIONS = [
  {
    title: "Quiet Long-Range GT",
    prompt: "I want an ultra-quiet electric grand tourer with over 300 miles of range and executive rear seating.",
    tag: "High Demand"
  },
  {
    title: "Compare Spectre vs Lumina",
    prompt: "Compare the RYDR Spectre GT with the Lumina SUV for weekend getaways and daily refinement.",
    tag: "Comparison"
  },
  {
    title: "Financing & Bespoke Lease",
    prompt: "What are the estimated monthly lease figures for the RYDR Spectre GT with $15,000 down?",
    tag: "Calculator"
  },
  {
    title: "Private Test Drive",
    prompt: "I'd like to arrange a private test drive of the RYDR Spectre GT at my home or office.",
    tag: "Concierge"
  }
];

export const MOCK_SERVICE_RECORDS: ServiceRecord[] = [
  {
    id: "SR-901",
    service: "Annual Atelier Certification & High-Voltage Health Audit",
    date: "March 18, 2026",
    mileage: "7,840 mi",
    atelier: "RYDR Atelier Beverly Hills",
    status: "Completed"
  },
  {
    id: "SR-902",
    service: "White-Glove Ceramic Coating Rejuvenation",
    date: "January 14, 2026",
    mileage: "6,200 mi",
    atelier: "RYDR Studio Pacific",
    status: "Completed"
  },
  {
    id: "SR-903",
    service: "Seasonal Performance Wheel & Tire Balancing",
    date: "April 28, 2026",
    mileage: "8,900 mi",
    atelier: "RYDR Mobile Valet Service",
    status: "Upcoming"
  }
];

export const STORIES_DATA = [
  {
    id: "story-1",
    title: "The Art of Scandinavian Aniline Leather",
    category: "Bespoke Atelier",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    description: "Inside the heritage tanneries of northern Europe where every RYDR hide is naturally treated with organic chestnut extracts."
  },
  {
    id: "story-2",
    title: "Obsidian Private Track Day: Laguna Seca",
    category: "Member Privilege",
    readTime: "Invitation Only",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=600&q=80",
    description: "Exclusive access to WeatherTech Raceway with dedicated telemetry engineers and Michelin tire support."
  },
  {
    id: "story-3",
    title: "The 800V Architecture: Zero Wait Philosophy",
    category: "Engineering Note",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558441719-aa34ab54e7f3?auto=format&fit=crop&w=600&q=80",
    description: "How our dual liquid-cooled inverters sustain maximum torque without thermal derating across Alpine ascents."
  }
];
