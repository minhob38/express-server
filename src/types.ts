export interface IResData {
  status: string,
  message: string,
  data?: any,
}

export interface IUser {
  userId: string,
  email: string,
  password: string,
  createdAt: string,
  updatedAt: string | null,
}

export interface IPost {
  postId: string,
  author: string,
  title: string,
  content: string,
  createdAt: string,
  updatedAt: string | null,
}
