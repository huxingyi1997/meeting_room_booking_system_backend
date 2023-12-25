import { IsNotEmpty, IsString } from 'class-validator';

export class RefreshTokenDto {
  @IsNotEmpty({
    message: 'refresh token should not be null',
  })
  @IsString({
    message: 'not a legal refresh token format',
  })
  refreshToken: string;
}
