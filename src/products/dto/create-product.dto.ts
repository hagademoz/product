import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductDto {
    @Field()
    @IsString() // ตรวจสอบว่าเป็น string ไหม
    readonly name: string;
  
    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    readonly description?: string;
  
    @Field()
    @IsNumber() // ตรวจสอบว่าเป็น integer ไหม
    readonly price: number;
}
