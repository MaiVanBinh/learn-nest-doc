import {
  Body,
  Controller,
  Get,
  Header,
  HttpStatus,
  Param,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { CatsServices } from './cats.services';
import { CreateCatDto } from './dto/create-cat.dto';
import {ParseIntPipe} from './../common/pipes/parse-int.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsServices: CatsServices) {}

  @Get()
  findAll() {
    return this.catsServices.findAll();
  }
  @Get('/colors')
  @Header('Cache-Control', 'none')
  findAllColors(@Res() res: Response) {
    return res.status(200).send(`All colors s of cat`);
  }

  @Get('/colors/:id')
  @Header('Cache-Control', 'none')
  findAllColorById(@Param('id', ParseIntPipe) id: string) {
    return `Cat color #${id}`;
  }

  @Get(':id')
  FindCatById(@Param() params) {
    return `Cat #${params.id}`;
  }
  @UsePipes(ValidationPipe)
  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    const result = this.catsServices.create(createCatDto);
    return {
      message: 'Create success',
      data: result,
    };
  }
}
