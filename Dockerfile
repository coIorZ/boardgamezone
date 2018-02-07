FROM node:7  
MAINTAINER jsj(coiorz1989@gmail.com)

ENV HTTP_PORT 8001
ENV NODE_ENV 'production'

COPY . /app  
WORKDIR /app

RUN npm install; npm run build

EXPOSE 8001
EXPOSE 80

CMD ["npm", "start"]
