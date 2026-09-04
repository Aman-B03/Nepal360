export type Page = 'home' | 'about' | 'fellowship' | 'apply';

export type ApplicationForm = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  educationStatus: string;
  rolePreference: string;
  interest: string;
  portfolioUrl: string;
  pitch: string;
  resumeUrl: string;
  weeklyHoursConfirmed: boolean;
};