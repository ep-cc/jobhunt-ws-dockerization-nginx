FROM node:20 AS frontend-build

WORKDIR /app
COPY frontend/package*.json .
RUN npm i
COPY frontend/ .
RUN npm run build

FROM node:20
WORKDIR /express-server
COPY backend2/package*.json .
RUN npm i
COPY backend2/ .
COPY --from=frontend-build /app/dist ./frontend_build/dist

EXPOSE 4000
CMD [ "node", "index.js"]
