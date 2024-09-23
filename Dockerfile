FROM node:20

# Install basic development tools
RUN apt update && apt install -y less man-db sudo

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `DEVCONTAINER` environment variable to help with orientationz
ENV DEVCONTAINER=true

WORKDIR /src

RUN npm install i npm

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD npm start