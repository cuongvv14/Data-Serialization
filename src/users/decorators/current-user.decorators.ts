import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Console } from 'console';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    console.log(request.session?.userId);
    return request.currentUser;
  },
);
