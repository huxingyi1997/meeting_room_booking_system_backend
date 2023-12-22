import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { createTransport, Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  public transporter: Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = createTransport({
      host: 'smtp.sina.com',
      port: 587,
      secure: false,
      auth: {
        user: this.configService.get('email_user'),
        pass: this.configService.get('email_password'),
      },
    });
  }

  async sendMail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: {
        name: 'meeting room booking system',
        address: this.configService.get('email_user'),
      },
      to,
      subject,
      html,
    });
  }
}
