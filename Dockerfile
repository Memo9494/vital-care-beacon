FROM node:20-alpine3.19 AS build

WORKDIR /app

COPY package*.json ./

# Install npm dependencies.
RUN npm install

# Copy source code over, except files in .dockerignore
COPY . .

# Build the application. Output will be in ./build directory.
RUN npm run build

FROM nginx:stable-alpine

# Copy the build output from previous step to NGINX directory.
COPY --from=build /app/dist /usr/share/nginx/html

# Start NGINX as the final step.
CMD ["nginx", "-g", "daemon off;"]