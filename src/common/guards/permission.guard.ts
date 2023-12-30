import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { Request } from 'express';

import { RequirePermissionKey } from 'src/constants';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    if (!request.user) {
      return true;
    }

    const permissions = request.user.permissions;

    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
      RequirePermissionKey,
      [context.getClass(), context.getHandler()],
    );

    if (!requiredPermissions) {
      return true;
    }

    for (const curPermission of requiredPermissions) {
      const found = permissions.find((item) => item.code === curPermission);
      if (!found) {
        throw new ForbiddenException(
          'you have no permission to visit this api',
        );
      }
    }

    return true;
  }
}
