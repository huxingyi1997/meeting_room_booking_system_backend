import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterCaptchaDto {
  @IsNotEmpty({
    message: 'email should not be null',
  })
  @IsEmail(
    {},
    {
      message: 'not a legal email format',
    },
  )
  address: string;
}
