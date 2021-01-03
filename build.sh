#!/usr/bin/env sh

CONFIG=./.vuepress/config.js
CONFIG_TEMPLATE=./.vuepress/config.js.tpl

CONFD_CLI=confd

# abort on errors
set -e

command -v ${CONFD_CLI} >/dev/null 2>&1 || { echo >&2 "I require confd but it's not installed. Please download 'https://github.com/kelseyhightower/confd'."; exit 1; }

# generate config file from template
eval $(egrep -v '^#' .env | xargs) $CONFD_CLI -confdir confd -onetime -backend env

if [ $# -ne 0 ]; then
    echo "Extra arguments provided"
    exit 1
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
git push -f git@github.com:yoophi/yoophi.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
