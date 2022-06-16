
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 8000
WORKDIR /app/dist

CMD [ "npm", "start" ]