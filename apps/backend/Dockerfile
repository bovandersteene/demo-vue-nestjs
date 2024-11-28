ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-slim as development

WORKDIR /app

COPY package*.json ./

RUN corepack enable
RUN corepack prepare pnpm --activate
RUN pnpm install

COPY . .
#RUN npx nx run backend:serve

FROM node:${NODE_VERSION}-slim as production
ENV NODE_ENV=production

USER node
WORKDIR /app

COPY --from=development /app/dist/apps/frontend-app ./
RUN pnpm install --only=production
