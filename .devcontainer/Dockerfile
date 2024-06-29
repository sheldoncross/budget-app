
# Use the official Node.js 18 image as the base image
FROM node:18

# Install dependencies
RUN --mount=type=cache,target=/var/cache/apk \
    apt update && apt install -y wget unzip default-jre

# Android SDK variables
ENV ANDROID_SDK_ROOT=/opt/android-sdk
ENV PATH="${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin:${PATH}"
ENV PATH="${ANDROID_SDK_ROOT}:${PATH}"

# Download and install Android SDK Command-line tools
RUN wget -q https://dl.google.com/android/repository/commandlinetools-linux-8512546_latest.zip -O sdk-tools.zip \
    && mkdir -p ${ANDROID_SDK_ROOT}/cmdline-tools \
    && unzip sdk-tools.zip -d ${ANDROID_SDK_ROOT}/cmdline-tools \
    && mv ${ANDROID_SDK_ROOT}/cmdline-tools/cmdline-tools ${ANDROID_SDK_ROOT}/cmdline-tools/latest \
    && rm sdk-tools.zip

# Accept licenses
RUN yes | sdkmanager --licenses \
    && sdkmanager --install "platform-tools" "platforms;android-35" "build-tools;33.0.2"

ENV PATH="${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin:${ANDROID_SDK_ROOT}/platform-tools:${ANDROID_SDK_ROOT}/build-tools/33.0.2:${PATH}"

# Set permissions
RUN chown -R node:node ${ANDROID_SDK_ROOT}

# Set the working directory inside the container
WORKDIR /app

# Install more dependencies
RUN --mount=type=cache,target=/app/budget-app/node_modules \
    --mount=type=cache,target=/app/budget-app/.expo \
    npm install -g expo

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your app listens on (e.g., 3000)
EXPOSE 3000