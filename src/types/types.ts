import jwt from 'jsonwebtoken';

export interface IResData {
  status: 'error' | 'success';
  message: string;
  data?: any;
}

export interface IUser {
  userId: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface IPost {
  postId: string;
  author: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface IUserInfo {
  email: string;
}

export interface IJwtPayloadUserInfo extends jwt.JwtPayload {
  email: string;
}
