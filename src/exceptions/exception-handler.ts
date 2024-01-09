import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { BaseError } from './entity-not-found.exception';
import { HttpAdapterHost } from '@nestjs/core';
import { ValidationError } from 'class-validator';

@Catch()
export class BusinessExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}
  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const response = ctx.getResponse<Response>();

    if (exception instanceof BaseError) {
      return response.status(exception.httpStatus).json({
        message: exception.message,
        path: httpAdapter.getRequestUrl(ctx.getRequest()),
      });
    } else {
      console.log(exception instanceof ValidationError);
      console.log(exception);
      return response.status(500).json({
        message: (exception as Error).message,
        errors: (exception as any)?.response?.message,
        path: httpAdapter.getRequestUrl(ctx.getRequest()),
      });
    }
  }
}
