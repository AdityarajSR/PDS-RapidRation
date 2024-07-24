export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Ration Card",
  "Aadhaar Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/icons/shop1-1.png",
    name: "Uchit Mulya Ki Dukaan-Vijay Nagar Center",
  },{
    image: "/assets/icons/shop1-1.png",
    name: "Uchit Mulya Ki Dukaan-Jawahar Nagar Center",
  },{
    image: "/assets/icons/shop1-1.png",
    name: "Uchit Mulya Ki Dukaan-MY Square Center",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
