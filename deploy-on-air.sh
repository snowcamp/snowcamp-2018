#!/bin/bash
export CONTENT_DIR=public
export REPO=git@github.com:snowcamp/snowcamp.github.io.git
export CHECKOUT_DIR=scmpublish-checkout
export OUTPUT_BRANCH=2018

echo "Rendering...."
gulp build --prod=true
echo "Web site rendered in the 'public' directory"
rm -Rf ${CHECKOUT_DIR}
git clone --branch ${OUTPUT_BRANCH} ${REPO} ${CHECKOUT_DIR}
echo "Updating checkout directory with actual content"
cp -R ${CONTENT_DIR}/* ${CHECKOUT_DIR}/
cd ${CHECKOUT_DIR}
git add -A
git commit -m "update web site"
git push origin ${OUTPUT_BRANCH}
echo "Done !"