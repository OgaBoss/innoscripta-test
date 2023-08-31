# Use the official Node.js image as the base image
FROM node:16-alpine as build

WORKDIR /ui

# Copy the React app files to the container
COPY . .

# Install dependencies
RUN yarn install

# Build the React app
RUN yarn run build

# Use Nginx as the base image for serving the app
FROM nginx:alpine

# Copy the built app from the previous stage to Nginx's web directory
COPY --from=build /ui/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 3001

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

#FROM nginx:latest
#EXPOSE 3000
#COPY ../nginx/default.conf /etc/nginx/conf.d/default.conf
#COPY --from=build /app/dist /var/www/html