# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node as build-stage

WORKDIR /var/app

COPY package*.json /var/app/

RUN npm install

COPY ./ /var/app

RUN npm run build 

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15

COPY --from=build-stage /var/app/build/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./server.crt /etc/nginx/server.crt

COPY ./server.key /etc/nginx/server.key

EXPOSE 3000

# Copy the default nginx.conf