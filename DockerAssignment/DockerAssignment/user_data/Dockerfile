# user_data/Dockerfile

# base image mysql 8.0
FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=123
ENV MYSQL_DATABASE=ABCompany
ENV MYSQL_USER=users_service
ENV MYSQL_PASSWORD=123

# seed DB ด้วย ABCompany.sql
# MySQL official image จะรันไฟล์ใน /docker-entrypoint-initdb.d อัตโนมัติ
COPY ABCompany.sql /docker-entrypoint-initdb.d/ABCompany.sql
