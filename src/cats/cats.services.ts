import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsServices {CatsServices

    private readonly cats: Cat[] = [{
        name: "cat 1",
        age: 21,
        breed: "a"
    }];

    findAll() {
        return this.cats;
    }

    findByName(name : string): Cat {
        const cat = this.cats.find(i => i.name === name);
        return cat;
    } 

    create(createCatDto: CreateCatDto) {
        this.cats.push(createCatDto);
        return createCatDto;
    }
}
