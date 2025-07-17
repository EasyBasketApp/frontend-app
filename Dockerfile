FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Don't run build here — do it in CMD so env vars are available
EXPOSE 80

CMD ["sh", "-c", "npm run build && npx serve -s build -l $PORT"]