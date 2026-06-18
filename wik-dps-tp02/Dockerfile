FROM node:20-alpine

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 3000

CMD ["npm", "run", "start"]