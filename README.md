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

```bash
docker-compose run web npm test
```

## Monitoring

You can collect metrics on the following end point metrics :

```bash
curl -XGET localhost:3000/metrics
```


## Stack

utility libraries :
  - [ImmutableJS](https://facebook.github.io/immutable-js/) : Immutable collections for JavaScript 

monitoring:
  - [measured](https://github.com/felixge/node-measured) : Port of Coda Hale's metrics library


