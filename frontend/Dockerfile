FROM node:14 AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run export

FROM nginx:latest

COPY --from=build /app/out /var/www/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80