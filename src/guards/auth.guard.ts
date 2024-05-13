import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    // const user = request.session.user;
    // if (!user) {
    //   throw new UnauthorizedException();
    // }
    return request.session.userId;
  }
}
