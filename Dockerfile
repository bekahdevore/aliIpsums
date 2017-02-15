FROM centos:7
MAINTAINER Bekah DeVore <devore.rc@gmail.com>

COPY . . 

RUN yum install -y epel-release
RUN yum install -y nodejs
RUN npm install 
WORKDIR server

CMD node server.js

