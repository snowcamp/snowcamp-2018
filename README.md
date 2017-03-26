



## Prerequisites

### Node-NPM

You'll need node.js and npm installed first and of course git.

Global dependencies that you'll need for command line. You'll need to preface with sudo on Linux.

```
npm install
```

### Hugo

Hugo is not a nodejs (javascript) package it needs to be installed (to the commandline). It is written in GO, but Hugo developers maintain binaries for all platforms so it's easy to install. https://gohugo.io/

## Run dev mode

```
gulp config-dev
gulp serve
```

## Prod mode

```
gulp config-prod
gulp build
# Copy public to your site...
```


