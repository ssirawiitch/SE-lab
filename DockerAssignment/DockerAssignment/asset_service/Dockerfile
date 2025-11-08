# asset_service/Dockerfile

# ใช้ base image node 17-alpine
FROM node:17-alpine

# โฟลเดอร์ทำงานใน container
WORKDIR /app

# เอาทุกไฟล์ในโฟลเดอร์นี้เข้าไปใน /app
COPY . /app

# ลง dependency จาก package.json
RUN npm install

# port ของ service (ดูจาก docker-compose -> 8008)
EXPOSE 8008

# รัน server
CMD ["node", "server.js"]
