#!/usr/bin/env bash

PROJ_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd $PROJ_DIR

# abort on errors
set -e

if [ $# -ne 0 ]; then
    echo "Extra arguments provided"
    exit 1
fi

if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i "" "s/GOOGLE_ANALYTICS_ID/$GOOGLE_ANALYTICS_ID/g" .vuepress/config.js
else
    sed -i "s/GOOGLE_ANALYTICS_ID/$GOOGLE_ANALYTICS_ID/g" .vuepress/config.js
fi

# build
rm -fr ./.vuepress/dist && npm run build

# navigate into the build output directory
cd ./.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
git push -f git@github.com:yoophi/yoophi.github.io.git master:gh-pages

cd $PROJ_DIR
git checkout -- .vuepress/config.js

