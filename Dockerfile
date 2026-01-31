FROM node:22-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Set build-time environment variables
ARG RESEND_API_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY

# Copy all files and build the project
COPY . .
RUN npm run build

# Set environment
EXPOSE 4000
ENV PORT 4000
ENV NODE_ENV production

# Run using your custom server.js
CMD ["node", "server.js"]
