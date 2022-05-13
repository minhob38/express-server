import jwt from 'jsonwebtoken';

export interface IRes {
  status: 200 | 400 | 401 | 403 | 500;
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

export interface ISgg {
  sggId: string;
  sggName: string;
}

export interface ISggArea extends ISgg {
  sggArea: string;
}

export interface IBound extends Express.Request {
  south: string;
  west: string;
  north: string;
  east: string;
}

export interface IUserInfo {
  email: string;
}

export interface IJwtPayloadUserInfo extends jwt.JwtPayload {
  email: string;
}
