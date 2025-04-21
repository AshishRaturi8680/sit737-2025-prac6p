# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the app files
COPY . .

# Expose the port
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
