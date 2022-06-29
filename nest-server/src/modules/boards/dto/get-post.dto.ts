import { IsNotEmpty, IsNumberString } from 'class-validator';
import { Exclude, Expose, Transform } from 'class-transformer';

export class GetPostParamDto {
  @IsNotEmpty()
  @IsNumberString()
  postId: string;
}

class Data {
  id: string;
  author: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: null | string;
}

export class PostInfo {
  id: string;

  @Exclude()
  password: string;

  constructor(id, password) {
    this.id = id;
    this.password = password;
  }
}
export class GetPostResDto {
  _id: string;

  @Transform(({ value }) => 500)
  status: any;

  @Exclude()
  message: any;

  @Expose({ name: 'postInfo' })
  data: PostInfo;

  constructor(_id, status, message, data) {
    this._id = _id;
    this.status = status;
    this.message = message;
    this.data = data;
  }

  @Expose({ name: 'desc' })
  get description(): string {
    return `${this.status} ${this.message}`;
  }
}
