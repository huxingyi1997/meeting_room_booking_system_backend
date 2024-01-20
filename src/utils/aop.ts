import { BadRequestException, ParseIntPipe } from '@nestjs/common';

export const generateParseIntPipe = (name: string): ParseIntPipe => {
  return new ParseIntPipe({
    exceptionFactory() {
      throw new BadRequestException(name + ' should pass numbers');
    },
  });
};
