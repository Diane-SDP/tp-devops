# TP 2
## Installation

```bash
npm install
```

## Configuration

Créer un fichier .env

```
PING_LISTEN_PORT=4000 //le port de votre choix
INSTANCE_ID="toto"// le nom de votre choix
```

## Docker single-stage
### Build image

```bash
docker build -t wik-dps-tp02 .
```

### Run container

```bash
docker run -p 3000:3000 wik-dps-tp02 
```

## Docker (multi stage)
### Build image
```bash
docker build -t wik-dps-tp02-multi -f Dockerfile-2 .
```

### Run container
```bash
docker run -p 3000:3000 wik-dps-tp02-multi
```