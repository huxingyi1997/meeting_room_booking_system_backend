import { SetMetadata } from '@nestjs/common';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { Request } from 'express';

import { RequireLoginKey, RequirePermissionKey } from 'src/constants';

export const RequireLogin = () => SetMetadata(RequireLoginKey, true);

export const RequirePermission = (...permissions: string[]) =>
  SetMetadata(RequirePermissionKey, permissions);

export const UserInfo = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();

    if (!request.user) {
      return null;
    }
    return data ? request.user[data] : request.user;
  },
);
