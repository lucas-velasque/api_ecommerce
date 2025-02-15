import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
  Put
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createAddressDto: CreateProductDto) {
    return this.productService.create(createAddressDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Lista de produtos retornada com sucesso' })
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar produto por ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Produto encontrado' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Produto não encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar produto' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Produto atualizado com sucesso' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Produto não encontrado' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto
  ) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover produto' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Produto removido com sucesso' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Produto não encontrado' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}