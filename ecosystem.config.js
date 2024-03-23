// pm2一个配置文件，用于配置pm2启动的时候的参数
module.exports = {
  apps: [
    {
      name: 'coderhub',
      script: './src/main.js',
      watch: true
    }
  ]
}