# Totology 

[![Circle CI](https://circleci.com/gh/dstendardi/totology.svg?style=shield)](https://circleci.com/gh/dstendardi/totology)
![David](https://david-dm.org/dstendardi/totology.svg)

Manage your folksonomy like a boss !

## Setup

Only vagrant is required.

```bash

# provision vagrant
vagrant up && vagrant ssh

# go into the share directory
cd /vagrant

# provision docker
docker-compose up
```

## Testing

launch all tests

```
docker-compose run web npm test
```





