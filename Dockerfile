FROM node:latest

RUN mkdir -p /opt
RUN mkdir -p /opt/app

COPY package.json /opt/
WORKDIR /opt
RUN npm install

ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . /opt/app

EXPOSE 3001

CMD ["npm", "start"]
