FROM node:14
WORKDIR /app
COPY package.json .
COPY .env . 
RUN npm install

#all dependencies are installed
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
