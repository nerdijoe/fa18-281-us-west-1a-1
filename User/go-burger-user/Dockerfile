FROM golang:latest 
EXPOSE 8000
RUN mkdir /app 
ADD . /app/ 
WORKDIR /app 
ENV GOPATH /app
RUN cd /app ; go install users
CMD ["/app/bin/users"]