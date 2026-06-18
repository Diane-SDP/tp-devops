# TP 1
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

## Lancer le projet
```bash
npm run start
```
ou en mode développement
```bash
npm run start:dev
```
## Endpoint

GET /ping  
Retourne les headers HTTP de la requête.

GET /stats
Retourne les statistiques du serveur (nombre de requêtes depuis le démarrage, uptime, ...)

## Bonus : Comportement en multi-instance

Si on lance deux instances du serveur sur deux ports différents (ex : 3000 et 4000), chaque instance possède ses propres données en mémoire.

Ainsi, le compteur totalRequests est différent entre les instances et l’uptime est différent car chaque serveur démarre à un moment différent.

Le compteur est stocké en mémoire dans le processus Node.js.
Chaque instance du serveur a donc son propre espace mémoire isolé.

**Solution envisagée**  
Pour avoir des valeurs identiques entre toutes les instances, il faut utiliser un stockage partagé externe, par exemple :

- Redis
- une base de données (PostgreSQL, MongoDB)
- un service de cache distribué

Dans ce cas, toutes les instances lisent et mettent à jour la même source de vérité.
