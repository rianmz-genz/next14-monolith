FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npx prisma db push

EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "run", "dev"]