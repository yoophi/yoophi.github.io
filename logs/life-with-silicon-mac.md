# Silicon Mac 사용하기


## Logs

용도는, 상시 켜져있는 개발 보조 및 취미용도.

직접 작성한 잡동사니 같은 코드를 실행시키고 (daemon 및 cron jon, worker 등) 웹 인터페이스 등으로 외부에서 컨트롤 하는 것이다.
그러려면 필요한 것은 

- 기본적인 개발환경을 구축할 수 있어야 하고
- 개발 결과물이 실행되어야 한다. 코드가 직접 실행되거나, docker 또는 kubernetes 로 컨테이너를 구동하거나.


### 동작하지 않는 것

맥미니 설치 목적 중 하나였던 kubernetes 설치가 안된다.

Docker 가 부분적으로 동작하기는 하지만, Docker Desktop 에서 Enable Kubernetes 항목은 동작하지 않는다. 
(내부 DNS 문제라던가, 구성요소인 컨테이너의 arm 실행 등의 여러 문제가 남아있는 듯)

Kind 의 경우 구성요소인 Docker 이미지가 arm 을 아직 지원하지 않는 문제가 있다는 것 같다. 실행이 되지 않는다.

Multipass, Vagrant, VirtualBox 는 아직 가상머신을 구동하지 못한다.

Minikube 는 실행 바이너리가 arm 을 지원하지 않아서 새로 받기는 했는데, 가상머신 엔진과의 조합이 아직 해결되지 않았다는 이슈가 있어서 동작하지 않는다.
하지만 vftool 과 None driver 조합으로 실행했다는 이야기가 있기는 하다.

**TODO**

- 관련 이슈 정리하기. 링크 추가하기
- 문제가 해결되는지 주기적으로 확인하기

### 부분적으로 동작하는 것

다행히 Docker Desktop 의 프리뷰 버전으로 일부 컨테이너는 실행이 된다. 하지만 mysql 컨테이너 등 intel 과 amd 의 CPU 만 지원하는 이미지는 실행이 되지 않는다. 

parallels desktop 의 프리뷰 버전으로 ubuntu VM 을 띄울 수 있는 것을 확인했다. (arm 버전 ISO 이미지를 설치할 수 있다)
그러니 k3s 를 이용할 수 있을 것으로 생각하는데 아직 실행해보지는 못했다.

`kubectl` 등의 유틸리티가 실행되지 않았는데, 이건 arm 지원버전을 별도로 다운 받으니 동작한다.

**TODO**

- parallels desktop 으로 생성한 VM 에 k3s 를 이용하여 kubernetes 설치하고 사용해보기.
-  Docker Desktop 기반으로 Docker Swarm 을 구성해보기. Portainer 구성해보기.
-  Trafik 등으로 Docker Swarm 내부로의 API Gateway 테스트해보기.
-  `kubectl` 등 유틸리티를 코드에서 바로 빌드해 사용해보기.


### 잘 동작하는 것

OSX 에서 제공되는 기능들은 (당연하지만) 정상적으로 동작한다. 대부분의 맥용으로 컴파일된 프로그램들은 써드파티 제품들도 
문제가 있는 것은 경험하지 못했다.


### 아직 테스트해보지 못한 것

- IntelliJ 제품들. 듣기로는 아직 제대로 동작하지 않는다고 했다.

**TODO**

- Brewfile 사용하기
- 설치 안되는 어플리케이션 정리하기 
- Python, Node 로 작성한 프로그램을 직접 실행으로 구동시켜 문제가 없는지 확인하기. 
- VSCode. 사용에 충분할 만큼 제대로 동작하는지 확인하기.


(지금은 여기까지 진행)
 