# Install application dependencies
FROM node:current-alpine AS base
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

# Build static storybook
FROM base AS build
RUN npm run build-storybook

# Server static storybook via nginx
FROM nginx:stable-alpine AS final
COPY --from=build /app/storybook-static /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY start.sh .
RUN chmod +x start.sh
EXPOSE 80
ENTRYPOINT "./start.sh"