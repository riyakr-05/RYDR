export type NavModule = 'overview' | 'copilot' | 'service' | 'showroom' | 'loyalty';

export type PropulsionType = 'All' | 'Pure Electric' | 'Hybrid V8' | 'Twin-Turbo V6';

export type VehicleCategory = 'All' | 'Grand Tourer' | 'Executive Sedan' | 'Luxury SUV' | 'Track Roadster';

export interface Vehicle {
  id: string;
  name: string;
  subtitle: string;
  category: 'Grand Tourer' | 'Executive Sedan' | 'Luxury SUV' | 'Track Roadster';
  propulsion: 'Pure Electric' | 'Hybrid V8' | 'Twin-Turbo V6';
  startingPrice: number;
  rangeOrMpg: string;
  acceleration: string;
  power: string;
  topSpeed: string;
  seating: string;
  exteriorImage: string;
  interiorImage: string;
  description: string;
  highlightSpecs: { label: string; value: string }[];
  curatedFeatures: string[];
  matchScore?: number;
  statusBadge?: string;
}

export interface PersonalizationFilters {
  propulsion: string;
  category: string;
  budgetMax: number;
  primaryPriority: string;
  seating: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  timestamp: string;
  content: string;
  isSimulated?: boolean;
  suggestedVehicles?: Vehicle[];
  comparisonVehicles?: Vehicle[];
  financingDetails?: {
    vehicleName: string;
    vehiclePrice: number;
    monthlyPayment: number;
    termMonths: number;
    downPayment: number;
    apr: number;
  };
  testDriveVehicle?: Vehicle;
  suggestedFollowUps?: string[];
}

export interface ServiceRecord {
  id: string;
  service: string;
  date: string;
  mileage: string;
  atelier: string;
  status: 'Completed' | 'Upcoming' | 'In Progress';
}

export interface ClientProfile {
  name: string;
  memberId: string;
  tier: 'Obsidian' | 'Platinum' | 'Aura';
  assignedConcierge: {
    name: string;
    title: string;
    avatar: string;
    status: 'Available' | 'On Call';
  };
  primaryVehicle: {
    model: string;
    vin: string;
    licensePlate: string;
    batteryLevel: number;
    rangeRemaining: number;
    status: string;
    lastPolished: string;
    image: string;
  };
}
