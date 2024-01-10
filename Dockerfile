FROM node:16 AS builder
ENV NODE_ENV=development

# Create app directory
WORKDIR /app

# Copy source files
COPY . .

# Install all packages
RUN npm ci

# Build API
RUN npm run build

FROM node:16-alpine
ENV NODE_ENV=production

# Create app directory
WORKDIR /app

# Copy necessary files to run the app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist .

# Install only production dependencies
RUN npm ci --omit=dev

EXPOSE 80

CMD ["npm", "run", "start"]
