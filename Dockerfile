FROM node:20-alpine
EXPOSE 8000
WORKDIR "/app"
COPY "package*.json" "/app/"
COPY "tsconfig.json" "/app/"
RUN ["npm", "ci"]
ENTRYPOINT ["npx", "tsx", "src/server/index.ts"]
COPY "./src" "/app/src"
