# Тут по приколу билд типикал фронта на 
# фрейме

#FROM node:20-alpine AS builder
#
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#
#COPY . .
#RUN npm run build

#COPY --from=builder /app/dist /usr/share/nginx/html

# Базовый минимум, мы фанаты musl
FROM nginx:alpine 

COPY ./html/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/

# Установка curl
RUN apk add --no-cache curl



EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
