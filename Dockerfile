# Compile Langauge with start Web
FROM adoptopenjdk/openjdk11:latest

# Add the Author
LABEL maintainer="alssus65@gmail.com"

# Add a volume to /tmp
VOLUME /tmp

#Make port 5080 available to the world outside this container
EXPOSE 6080

ARG JAR_FILE=target/Brave_Heart-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} springboot.jar

ENTRYPOINT ["java", "-jar", "/springboot.jar"]