ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-slim AS node-base

WORKDIR /app

COPY package*.json ./

RUN corepack enable
RUN corepack prepare pnpm --activate
RUN pnpm install

# Add GitHub.com to known hosts for SSH

RUN corepack enable

FROM node-base  as node-dev

COPY . .

RUN  npx nx run frontend:serve
