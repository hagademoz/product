import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';
import { NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Resolver(() => Product)
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) { }

    @Mutation(() => Product)
    async addProduct(@Args('product') createProductDto: CreateProductDto): Promise<Product> {
        const product = await this.productsService.create(createProductDto);
        return product;
    }

    @Query(() => [Product], { name: 'products' })
    findAll() {
        return this.productsService.findAll();
    }

    @Query(returns => Product, { name: 'product' })
    async product(@Args('id') id: string): Promise<Product> {
        const product = await this.productsService.findOne(id);
        if (!product) {
            throw new NotFoundException(id);
        }
        return product;
    }
}
