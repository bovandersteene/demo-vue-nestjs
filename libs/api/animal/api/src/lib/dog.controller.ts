import { Controller } from '@nestjs/common';

import { DogDto } from './dog.dto';
import { DogRepository } from '@demo-vue-nestjs/api/animal/repository';
import { DogForm, DogSchema } from '@demo-vue-nestjs/model';
import { AbstractController } from './controller';

@Controller('dog')
export class DogController extends AbstractController<any, DogDto> {
  protected readonly schema = DogSchema;
  protected readonly formSchema = DogForm;

  constructor(dogRepository: DogRepository) {
    super(dogRepository);
  }
}
