---
title: confd 를 이용하여 설정 파일 만들기
---

# `confd` 를 이용하여 설정 파일 만들기

<https://github.com/teamhephy/confd>

[shell script 를 이용하여 template 에서 설정 파일 만들기](../create-file-from-template.md) 를 진행해봤는데, 
`confd` 라는 강력한 도구를 이용하여 다시 실행해봅시다.

## `confd` 설치

[download and install confd](https://github.com/teamhephy/confd/blob/master/docs/installation.md) 을 참고합니다.
용량은 5mb 정도.

## `confd` 디렉토리 및 templates 생성 

설정 디렉토리 생성 

``` bash
mkdir -p ./confd/{conf.d,templates}
```

./confd/conf.d/myconfig.toml

``` toml
[template]
src = "myconfig.conf.tmpl"
dest = "myconfig.conf"
keys = [
    "/myapp/database/url",
    "/myapp/database/user",
]

```

./confd/templates/myconfig.conf.tmpl

```
# This is a comment
[myconfig]
database_url = {{getv "/myapp/database/url"}}
database_user = {{getv "/myapp/database/user"}}
```

environment variable

``` bash
$ export MYAPP_DATABASE_URL=db.example.com
$ export MYAPP_DATABASE_USER=rob
```

## 설정 파일 만들기


``` bash
$ confd -confdir confd -onetime -backend env
$ cat ./myconfig.conf
# This is a comment
[myconfig]
database_url = db.example.com
database_user = rob
```