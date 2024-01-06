import { UserDetailVo } from './user-info.vo';

export class UserListVo {
  users: Array<UserDetailVo>;

  totalCount: number;
}
