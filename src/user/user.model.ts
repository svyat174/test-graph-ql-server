import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '@prisma/client';

@ObjectType()
export class UserResponse implements User {
  @Field(() => Int)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
