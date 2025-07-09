export interface IJobCategory {
  id: number;
  title: string;
}

export interface IJob {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salaryFrom: number;
  salaryTo: number;
  employmentType:
    | 'Full-time'
    | 'Part-time'
    | 'Contract'
    | 'Internship'
    | 'Freelance';
  postedDate: Date;
  skillsRequired: string[];
  remote: boolean;
  experienceLevel: 'Entry' | 'Mid' | 'Senior';
  industry: string;
}
