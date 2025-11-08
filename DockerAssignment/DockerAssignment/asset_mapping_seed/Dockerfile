# asset_mapping_seed/Dockerfile

# base image ของ mongo
FROM mongo:5.0

WORKDIR /var/dmongo

# copy seed file เข้าไปใน container
COPY profile_asset.json /var/dmongo/profile_asset.json

# ตอน container รัน ให้รัน mongoimport ใส่ DB user, collection userProfile
# host ใช้ชื่อ service asset_mapping ใน docker-compose
CMD ["mongoimport","--host", "asset_mapping","--db", "user","--collection", "userProfile","--file", "profile_asset.json","--jsonArray"]
