#!/bin/bash
#
# Initialize the game environment
#   Creates directory for server and downloads minecraft server.
#   Marks EULA accepted
#

# Select Minecraft version here.
#VERSION="1.10.2"
VERSION="1.11.2"

CWD=`pwd`


if [ ! -d game ]
then
  mkdir game
fi


cd game

# Download the server jar if we don't already have it
if [ ! -f minecraft_server.${VERSION}.jar ]
then
  wget https://s3.amazonaws.com/Minecraft.Download/versions/${VERSION}/minecraft_server.${VERSION}.jar
fi

# Mark EULA accepted
echo "eula=true" > eula.txt

# Note - All remaining configuration of MC server is handled by STS game management scripts.  

cd $CWD
