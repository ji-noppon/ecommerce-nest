import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';

import { SupabaseClient } from '@supabase/supabase-js';

import { IProduct } from './product/interfaces/product.interface';

@Injectable()
export class AppService {
  constructor(
    @Inject('SUPABASE_CLIENT') private readonly supabase: SupabaseClient,
  ) {}

  async testGetUser(): Promise<any> {
    const { data, error } = await this.supabase
      .from('users')
      .select()
      .returns<IProduct[]>();

    if (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }

    return data[0];
  }
}
