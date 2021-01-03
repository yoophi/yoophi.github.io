# img의 caption 표시하기 

## 문제

markdown 에서는 아래와 같은 형식으로 `alt` 태그가 있는 	`<img />` 태그를 만들 수 있습니다.

```
![caption](/path/to/image.jpg)
```

하지만, 이미지가 정상적으로 로드된 경우 `alt` 태그 내의 정보는 화면에 표시되지 않는다. `img`의 `alt` 속성의 경우 순수 CSS 를 이용하여 화면에 표시할 수 없다고 합니다.

요즘의 일반적인 해결방법은 아래와 같이 
`figure`, `img`, `figurecaption` 등의 태그를 사용하고 CSS 로 제어하는 것인데, markdown 내에서는 해결할 수 없는 방법인데요.

``` html
<figure>
    <img src='image.jpg' alt='missing' />
    <figcaption>Caption goes here</figcaption>
</figure>
```

## 해결방법

markdown 의 경우, 아래와 같이 코드를 작성하면

```
![missing](image.jpg)*Caption goes here*
```

아래와 같은 markup 을 얻을 수 있습니다.

``` html
<p>
  <img src="image.jpg" alt="missing" />
  <em>Caption goes here</em>
</p>
```

`em` 태그를 `figurecaption` 태그로 바꿀 수는 없겠지만,
`img + em`에 해당하는 CSS를 아래와 같이 작성해주면, `em` 태그 내의 텍스트를 이미지 아래에 표시할 수 있습니다.

``` css
img + em {
  display: block;
}
```

vuepress 에서는, `.vuepress/style.styl` 파일이 기본 CSS 를 지정할 수 있는 파일이므로, 해당 파일에 CSS 를 작성하면 됩니다.

``` css
/* .vuepress/style.styl */
img + em {
  display: block;
}
```

해결!<br />
(저는 `display: inline-block` 으로 해서, 이미지가 작을 때는 오른쪽에 표시되도록 했습니다)

![missing](https://via.placeholder.com/150x150)*150x150 이미지입니다*


![missing](https://via.placeholder.com/640x480)*640x480 이미지입니다*

## 참고

- [Using an image caption in Markdown Jekyll](https://stackoverflow.com/questions/19331362/using-an-image-caption-in-markdown-jekyll)
- [이미지에 캡션 달기 - 유기체의 다락방](https://62che.com/blog/vuepress/%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%97%90-%EC%BA%A1%EC%85%98-%EB%8B%AC%EA%B8%B0.html)