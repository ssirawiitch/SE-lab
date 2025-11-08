# user_account_service/Dockerfile

# base image node 17-alpine
FROM node:17-alpine

# set working directory
WORKDIR /app

# copy package files first to leverage Docker cache and install only production deps
COPY package*.json ./

# install only production dependencies to avoid building dev native modules (e.g. v8-debug)
RUN npm install --only=production

# copy app source
COPY . .

# service listens on port 80 (as configured in docker-compose)
EXPOSE 80

# run the app
CMD ["node", "index.js"]
