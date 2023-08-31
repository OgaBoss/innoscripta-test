# Use the official Node.js image as the base image
FROM node:16-alpine

WORKDIR /ui

# Copy the React app files to the container
COPY . .

# Install dependencies
RUN yarn install

# Expose port 80
EXPOSE 3000

# Build the React app
cmd ["yarn", "dev"]
