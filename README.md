



## Prerequisites

### Node-NPM

You'll need node.js and npm installed first and of course git.

Global dependencies that you'll need for command line. You'll need to preface with sudo on Linux.

```
npm install gulp-cli -g
npm install
```

### Hugo (v.0.74 or higher)

Hugo is not a nodejs (javascript) package it needs to be installed (to the commandline). It is written in GO, but Hugo developers maintain binaries for all platforms so it's easy to install. https://gohugo.io/

## Run dev mode

```
gulp dependencies:build
gulp watch
```

## Prod mode

```
gulp build --prod=true
# Copy public to your site...
```

## Deploy 

```
./deploy-on-air.sh
```

