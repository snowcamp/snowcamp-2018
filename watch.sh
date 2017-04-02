#!/bin/bash

echo "Switching to prod..."
gulp config-prod
echo "Rendering...."
gulp build
echo "Uploading..."
cd public
scp -r . wisdom-framework.org:~wisdom/snowcamp
echo "Done !"
