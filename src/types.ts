export interface Service {
  id: string;
  name: string;
  tagline: string;
  tags: string[];
  duration: string;
  priceGuide: string;
  description: string;
  image: string;
  steps: {
    title: string;
    description: string;
  }[];
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  goal?: string;
  notes: string;
}

export interface BookingRecord extends BookingFormData {
  id: string;
  timestamp: string;
  status: string;
}

export interface TreatmentFinderState {
  goal: string;
  time: string;
  budget: string;
}
