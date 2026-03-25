# Подтягивем node slim
FROM node:slim

# Энвы настроим в compose
COPY . .

RUN npm i
EXPOSE 3000
CMD ["npm", "start"]


