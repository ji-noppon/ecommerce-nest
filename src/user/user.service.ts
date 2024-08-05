import {
  Injectable,
  Inject,
  HttpException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { Database, Tables } from '../types/database.types';

import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class UserService {
  constructor(
    @Inject('SUPABASE_CLIENT') private readonly supabase: SupabaseClient,
  ) {}

  async create(createUserDto: CreateUserDto) {
    /*  const obj: Database['public']['Tables']['users']['Insert'] = {
      id
    } */

    const obj: Database['public']['Tables']['users']['Insert'] = {
      username: 'microlab3',
      password: 'ditgrikwdj',
      email: 'microlab3@gmail.com',
      first_name: 'micro3',
      last_name: 'bazilia3',
      rank: 3,
    };
    const { data, error } = await this.supabase
      .from('users')
      .insert(obj)
      .select();

    if (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
    return {
      status: HttpStatus.CREATED,
      message: 'success',
    };
  }

  async findAll() {
    const { data, error } = await this.supabase.from('users').select('*');
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
