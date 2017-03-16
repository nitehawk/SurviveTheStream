// Download requested Minecraft server version and accept EULA
const http = require('https');
const fs = require('fs');

const ver = "1.11.2";

// https://s3.amazonaws.com/Minecraft.Download/versions/${VERSION}/minecraft_server.${VERSION}.jar
// echo "eula=true" > eula.txt


export default class stsinit {
  constructor(sts) {
    this.sts = sts;
  }

  getServerJar(version="1.11.2") {
    const url = `https://s3.amazonaws.com/Minecraft.Download/versions/${version}/minecraft_server.${version}.jar`;
    const jar = `minecraft_server.${version}.jar`;
    console.log(`Download server jar: ${jar}`);
    //let svrjar = fs.createWriteStream("minecraft_server.jar");
    //let req = http.get(url, function(response) { response.pipe(svrjar); });
  }
};
