# 안전하게 OSX VNC에 연결하기

집에서 열심히 전기를 쓰고 있는 맥미니에 원격으로 접속하기 위해 NAT 의 Port Forwarding 으로 5900 포트를 열었더니, 드디어 손님들이 침입하기 시작했다. 포트를 변경하는 것도 귀찮고, 지금보다 조금 더 안전하게 접속하려면 어떻게 해야할까?

여러가지 해결방법이 오고 가는 
[Can VNC access be allowed safely? - Apple Community](https://discussions.apple.com/thread/7593615) 글을 
읽다보니, ssh tunneling 을 이용하는 것이 좋은 방법이 될 수 있겠다는 생각이 들었다.

```
ssh -p 23456 -L 34567:localhost:5900 remote.host.name
```

`remote.host.name` 서버의 ssh port 가 `23456` 으로 열려있을 때, 그 서버의 `localhost:5900` 포트를 
현재 사용중인 내 컴퓨터의 `34567` 포트로 포트 포워딩하는 방법이다. 
이렇게 하면 `remote.host.name` 의 VNC 에 접속하기 위해서 내 컴퓨터의 `localhost:34567` 포트를 사용하면 된다.
(중간에 `localhost:5900` 때문에 항상 헤깔리기는 한다.)

```
open vnc://localhost:34567
```

SSH 터널링 관련해서는 [[SSH, Network] SSH 포트 포워딩(SSH 터널링)의 개념 및 사용 방법](https://m.blog.naver.com/PostView.nhn?blogId=alice_k106&logNo=221364560794&proxyReferer=https:%2F%2Fwww.google.com%2F) 문서에 정리가 잘 되어 있으니 참고하면 좋을 것 같다. 