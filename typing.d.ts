interface NavCategory {
  name: string;
  path: string;
  isMobile: boolean;
  isDesktop: boolean;
}

interface SymptomDataType {
  id: string;
  title: string;
  imageUrl: string;
  description: string[];
  symptoms: string[];
  treatments: string[];
  medicationsDescription: string;
  medications: string[];
}

interface TreatmentOptionType {
  id: string;
  heading: string;
  detail: string;
}

interface MedicationType {
  id: string;
  heading: string;
  detail: string;
}
