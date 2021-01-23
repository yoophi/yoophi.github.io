# Life with Silicon Mac

## Todo

- Brewfile 사용하기
- Docker 설치하기
- Kubernetes
- (현재) 설치 안되는 어플리케이션 정리하기 

## Logs

현재 안되는 것:

맥미니 설치 목적 중 하나였던 kubernetes 설치가 안된다.

Docker 가 부분적으로 동작하기는 하지만, Docker for Desktop 에서 Enable Kubernetes 항목은 동작하지 않는다. 
(내부 DNS 문제라던가, 구성요소인 컨테이너의 arm 실행 등의 여러 문제가 남아있는 듯)

Kind 의 경우 구성요소인 Docker 이미지가 arm 을 아직 지원하지 않는 문제가 있다는 것 같다. 실행이 되지 않는다.

Multipass 는 아직 가상머신을 구동하지 못한다.

Minikube 는 실행 바이너리가 arm 을 지원하지 않아서 새로 받기는 했는데, 가상머신 엔진과의 조합이 아직 해결되지 않았다는 이슈가 있어서 동작하지 않는다.
하지만 vftool 과 None driver 조합으로 실행했다는 이야기가 있기는 하다.


부분적으로 되는 것:

다행히 Docker for Mac 의 프리뷰 버전으로 일부 컨테이너는 실행이 된다.

Paralles Desktop 의 프리뷰 버전으로 ubuntu VM 을 띄울 수 있는 것을 확인했다. (arm 버전 ISO 이미지를 설치할 수 있다)
그러니 k3s 를 이용할 수 있을 것으로 생각하는데 아직 실행해보지는 못했다.

(지금은 여기까지 진행)
