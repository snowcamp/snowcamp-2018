#!/bin/bash
echo "Rendering...."
gulp build --prod=true
echo "Uploading..."
cd public
scp -r . wisdom-framework.org:~wisdom/snowcamp
echo "Done !"
