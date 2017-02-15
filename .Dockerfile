FROM ubuntu:trusty
MAINTAINER: Bekah DeVore <devore.rc@gmail.com>

COPY . . 

CMD node server.js