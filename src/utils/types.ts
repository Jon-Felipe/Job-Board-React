export interface IAddress {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  phone?: string;
  age?: string | number;
  address?: IAddress;
}

export type UserRegisterDetails = Pick<
  IUser,
  'firstName' | 'lastName' | 'email' | 'password'
>;

export type UserLoginDetails = Pick<IUser, 'email' | 'password'>;

export type UserRegisterPayload = Pick<
  IUser,
  'firstName' | 'lastName' | 'email'
>;

export interface IJobCategory {
  id: number;
  title: string;
}

export interface IJob {
  _id: string;
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
  createdAt: string;
  skillsRequired: string[];
  remote: boolean;
  experienceLevel: 'Entry' | 'Mid' | 'Senior';
  industry: string;
}

export interface IDropdownOption {
  id: number;
  text: string;
}
