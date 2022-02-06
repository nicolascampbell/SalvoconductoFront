# salvoconducto

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


## Docker setup Production
You will need a volume where you save the films. Therefore you will need a plugin:
```
curl -fsSL https://raw.githubusercontent.com/MatchbookLab/local-persist/master/scripts/install.sh | sudo bash
```
Then create the volume:
```
docker volume create -d local-persist -o mountpoint=<path to films> --name=films
```
Restart the Deamon:
```
systemctl restart docker-volume-local-persist.service
```
Now start the container with compose:
```
docker-compose up -d salvo-front
```