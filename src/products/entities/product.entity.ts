import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Product {
    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    price: number;
}
