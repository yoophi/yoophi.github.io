# template 에서 설정 파일 만들기

::: danger

이 방법은 간단하기는 하지만, eval 명령을 사용하기 때문에, template 파일 내의 `"` 문자가 사라지고, 
backtick (<code>&#x60;</code>) 문자가 확장되는 문제가 있습니다. `$[a-zA-Z]+` 패턴에도 문제가 있겠네요.

::: 

지금 보고 있는 vuepress site 를 만들면서 Google Analytics 연동을 하는데, 
설정에 `GOOGLE_ANALYTICS_ID` 를 넣어야 하는 일이 생겼습니다. 물론 간단한 일인데, public repo 에 민감한 정보를
넣는 일은 하지 않아야겠기에 해당 값은 환경변수에 넣고, `config.js` 파일은 template 을 만들기로 했습니다.

하지만, template 파일로 부터 설정 파일을 만들자니, template 엔진을 써야해서 간단한 방법을 찾았습니다.

위의 주의사항 참고하고, 용도에 맞게 주의해서 사용합시다.

``` js
// config.js.tpl
export default {
    ga: '${GOOGLE_ANALYTICS_ID}'
}
```

``` bash
$ GOOGLE_ANALYTICS_ID=SECRET
$ TEMPLATE=$(cat config.js.tpl)
$ eval "echo \"$TEMPLATE\"" > config.js
```

