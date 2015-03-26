# Totology 

[![Circle CI](https://circleci.com/gh/dstendardi/totology.svg?style=shield)](https://circleci.com/gh/dstendardi/totology)
![David](https://david-dm.org/dstendardi/totology.svg)

Manage your folksonomy like a boss !

## Setup

Only vagrant is required.

```bash
vagrant up && vagrant ssh
```

Go into the share directory 

```bash
cd /vagrant
```

Run docker compose 

```bash
docker-compose up
```

## Testing

launch all tests

```
docker-compose run web npm test
```





