# user_account_service/Dockerfile

# base image node 17-alpine
FROM node:17-alpine

# โฟลเดอร์ทำงานใน container
WORKDIR /app

# copy ไฟล์ทั้งหมดเข้า /app
COPY . /app

# ลง dependency
RUN npm install

# service นี้ฟังที่ port 80 (ดูจาก docker-compose)
EXPOSE 80

# รัน app
CMD ["node", "index.js"]
