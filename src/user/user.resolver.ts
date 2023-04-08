import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import { UserResponse } from './user.model';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserResponse)
  async createUser(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<User> {
    return this.userService.createUser(name, email, password);
  }

  @Query(() => [UserResponse])
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }
}
