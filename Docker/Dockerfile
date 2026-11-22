# Using Node.js Alpine image as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /home/app

# Copy the package files into the container
COPY package*.json ./

# Copy the source code into the container
COPY index.js ./

# Make port 8000 available to the container
EXPOSE 8000-8007

# Start the Node.js application
CMD ["npm", "start"]
