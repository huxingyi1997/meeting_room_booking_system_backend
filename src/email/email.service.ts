import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { createTransport, Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  public transporter: Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = createTransport({
      host: this.configService.get<string>('NODEMAILER_HOST'),
      port: this.configService.get<number>('NODEMAILER_PORT'),
      secure: false,
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASSWORD'),
      },
    });
  }

  async sendMail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: {
        name: 'meeting room booking system',
        address: this.configService.get('EMAIL_USER'),
      },
      to,
      subject,
      html,
    });
  }
}
