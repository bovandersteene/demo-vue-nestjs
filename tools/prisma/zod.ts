import * as model from '../../generated/types/modelSchema';
import * as fs from 'fs';
import * as path from 'path';

const dir = path.join(__dirname, '../../generated/types/forms');

fs.mkdirSync(dir, { recursive: true });

const imports = [
  `import { zodToJsonSchema } from 'zod-to-json-schema'; `,
  `import { JsonSchema } from '@jsonforms/core';`,
];

const forms: string[] = [];

Object.keys(model).forEach((key) => {
  console.log(key);
  const name = key.replace('Schema', 'Form');

  imports.push(`import {${key}} from "../modelSchema"`);
  forms.push(
    `export const ${name}Detail = zodToJsonSchema(${key}.definitions!['Schema'] as JsonSchema, 'Schema');`,
    `export const ${key} = ${name}Detail.definitions!['Schema'] as JsonSchema;`,
    ''
  );
});

const lines = [imports, '', forms].flat().join('\n');

fs.writeFileSync(path.join(dir, 'index.ts'), lines);
