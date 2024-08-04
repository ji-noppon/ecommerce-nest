import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';

import { SupabaseClient } from '@supabase/supabase-js';

import { IProduct } from './product/interfaces/product.interface';

@Injectable()
export class AppService {
  constructor(
    @Inject('SUPABASE_CLIENT') private readonly supabase: SupabaseClient,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  async testDB(): Promise<any> {
    // const supabaseUrl = 'https://imdgkcidtucfhfhvbuix.supabase.co';
    // const supabaseKey = process.env.SUPABASE_KEY;
    // const supabase = createClient(supabaseUrl, supabaseKey);
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
