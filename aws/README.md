# AWS tools

This directory contains tools for launching an AWS instance to run an STS stream.

We assume some basic AWS knowledge, but try to keep things as simple as possible.

## Cloud Formation

Launching a cloud formation stack with the included template will launch an AWS instance with 
scripting included to install the required packages for these scripts to work.   A sample parameters
file is also included to make it easier to launch from command line.

* Launch CFT from AWS console or via command line
* After CloudFormation completes, wait for instance to boot
* Login to instance and clone this repo
* Follow first run instructions

