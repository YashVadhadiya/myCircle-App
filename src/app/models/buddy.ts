export class Buddy {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
  dateOfBirth?: string;
  phone?: string;
  location?: {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
  };
  registerDate?: string;
  updatedAt?: string;
}
