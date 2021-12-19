export interface IResData {
  status: string,
  message: string,
  data?: any,
}

export interface IUser {
  email: string,
  password: string,
  createdAt: string,
  updatedAt: string | null,
}
