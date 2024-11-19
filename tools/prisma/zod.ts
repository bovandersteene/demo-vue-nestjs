import * as model from '../../generated/types/modelSchema';
import * as fs from 'fs';
import * as path from 'path';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { JsonSchema } from '@jsonforms/core';

const dir = path.join(__dirname, '../../generated/types');

fs.mkdirSync(dir, { recursive: true });

const imports = [
  `import { zodToJsonSchema } from 'zod-to-json-schema'; `,
  `import { JsonSchema } from '@jsonforms/core';`,
  `import {  ${Object.keys(model).join(',')}} from './modelSchema';`,
];

const importsDto = [
  `import { createZodDto } from 'nestjs-zod';`,
  `import {  ${Object.keys(model).join(',')}} from './modelSchema';`,
];

const dtos: string[] = [];
const forms: string[] = [];

Object.keys(model).forEach((key) => {
  const name = key.replace('Schema', 'Form');
  const nameDto = key.replace('Schema', 'Dto');
  const entry = (model as any)[key];

  const jsonSchema = zodToJsonSchema(entry, 'Schema');
  const schema = jsonSchema.definitions!['Schema'] as JsonSchema;

  Object.entries(schema?.properties as any).forEach(
    ([key, prop]: [string, any]) => {
      if ('anyOf' in prop) {
        const type = prop.anyOf[0] as any;
        (schema.properties as any)[key] = {
          ...prop,
          anyOf: undefined,
          ...type,
        };
      }
    }
  );

  forms.push(
    `export const ${name}Detail = ${JSON.stringify(jsonSchema)};`,
    `export const ${name} = ${name}Detail.definitions!['Schema'] as JsonSchema;`,
    ''
  );
  dtos.push(`export class ${nameDto} extends createZodDto(${key}) {}`, ``);
});

const lines = [imports, '', forms].flat().join('\n');
const dtoLines = [importsDto, '', dtos].flat().join('\n');

fs.writeFileSync(path.join(dir, 'forms.ts'), lines);
fs.writeFileSync(path.join(dir, 'dto.ts'), dtoLines);
