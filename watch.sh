#!/bin/bash

echo "Switching to dev..."
gulp config-dev
rm -Rf public
echo "Rendering...."
gulp serve
