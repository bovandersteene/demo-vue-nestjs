
## Setup project
```bash
 npx create-nx-workspace
```

Select vue as project type

## Add nest backoffice project
```bash
 npx nx add @nx/nest
```

```bash
npx nx g @nx/nest:app apps/backend
```

## Setup tailwind
```bash
npx nx g @nx/vue:setup-tailwind
``` 


## Add dependencies

```bash
npm i zod zod-to-json-schema --save-dev 
```

```bash
npm install @nestjs/swagger nestjs-zod --save-dev 
```



## Run projects
```bash
npx nx run frontend:serve
npx nx run backend:serve
```


## generate project structure
```bash
npx nx g @nx/js:library  shared/model 
```
