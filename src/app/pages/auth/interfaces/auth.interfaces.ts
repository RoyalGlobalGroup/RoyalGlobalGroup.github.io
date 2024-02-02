import { RolesAccount } from "../constants/auth.constant";

export interface IUser {
  name: string;
  email: string;
  phone: string;
  role: typeof RolesAccount[keyof typeof RolesAccount];
  accessToken: string;
}

export interface ITokenDecoded {
  expiration: string;
  name: string;
  role: typeof RolesAccount[keyof typeof RolesAccount];
  email: string;
  phone: string;
  country: string;
}

export interface IUserState {
  authentication: {
    user: IUser;
  };
}

export interface ICheckInvalidInput {
  nameInput: boolean;
  emailInput: boolean;
  phoneInput: boolean;
  passwordInput: boolean;
}

export interface IuserSignup {
  name: string;
  phone: string;
  email: string;
  password: string;
}

export interface IuserSignin {
  email: string;
  password: string;
}
