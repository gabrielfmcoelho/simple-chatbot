# Base image for building the application
FROM node:20-alpine AS base

# 1. Installer Stage: Install dependencies
FROM base AS installer
WORKDIR /app

# Copy package.json and lock file
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm ci

# 2. Builder Stage: Build the Next.js application
FROM base AS builder
WORKDIR /app

# Copy dependencies from the installer stage
COPY --from=installer /app/node_modules ./node_modules
# Copy the rest of the application code
COPY . .

# Set build-time environment variables if needed
# ARG NEXT_PUBLIC_API_URL
# ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

# Build the Next.js application
RUN npm run build

# 3. Runner Stage: Create the final, production-ready image
FROM base AS runner
WORKDIR /app

# Set the environment to production
ENV NODE_ENV=production

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the built application from the builder stage
# This assumes you have `output: 'standalone'` in your next.config.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Switch to the non-root user
USER nextjs

# Expose the port the app will run on
EXPOSE 3000

# Set the port environment variable
ENV PORT 3000

# Command to start the server
CMD ["node", "server.js"]