---
title: .env 파일을 shell 에서 사용하기 
---

# `.env` 파일을 shell 에서 사용하기 

<https://gist.github.com/judy2k/7656bfe3b322d669ef75364a46327836>

## Pass the env-vars to COMMAND

``` bash
$ eval $(egrep -v '^#' .env | xargs) COMMAND
```

## Export the vars in .env into your shell:

``` bash
$ export $(egrep -v '^#' .env | xargs)
```