import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Client } from 'minio';

@Injectable()
export class MinioService {
  private readonly minioClient: Client;
  constructor(private configService: ConfigService) {
    this.minioClient = new Client({
      endPoint: this.configService.get<string>('MINIO_HOST'),
      port: +this.configService.get<number>('MINIO_PORT'),
      useSSL: false,
      accessKey: this.configService.get<string>('MINIO_ACCESS_KEY'),
      secretKey: this.configService.get<string>('MINIO_SECRET_KEY'),
    });
  }

  async uploadFile(bucketName: string, objectName: string, data: Buffer) {
    await this.minioClient.putObject(bucketName, objectName, data);
  }
}
