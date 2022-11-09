export interface SignupModel {
  firstname: string;
  middlename: string;
  lastname: string;
  gender: string;
  birthdate: Date;
  homeAddress: string;
  mobileNumber: string;

  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  isScanner: boolean;
  establishmentDescription: string;
}