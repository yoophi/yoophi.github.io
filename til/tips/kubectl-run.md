---
tags: [ "kubernetes" ]
---

# Kubernetes 에서 간단한 명령 실행하고 종료하기 

::: tip Tip

Kubernetes 에서 간단한 pod를 생성하여 TTY 환경에서 명령을 실행하고, 작업이 끝난 pod를 종료하는 방법을 정리해봅니다.

:::

`kubectl run` 의 도움말에는 정말 많은 옵션이 있는데, 

```
$ kubectl run --help
```

그중 필요한 것을 추려봅시다.

```
--command=false: 실행할 명령어.
--image='': 컨테이너로 실행할 이미지.
--restart='Always': Restart 정책. 기본값은 Always [Always, OnFailure, Never].
--rm=false: true 일 경우, 명령을 실행한 후 해당 리소스를 삭제.
-i, --stdin=false: stdin 을 열린 상태로 유지.
-t, --tty=false: pod 의 개별 컨테이너에게 TTY 를 할당.
```

그래서 다음과 같이 실행하면 됩니다.

```
$ kubectl run \
    pod_name            # POD 이름 
    --rm                # 실행이 완료된 후 리소스를 삭제하고 
    --restart='Never'   # 삭제되었다고 재시작하지 말고...
    --stdin=false       # 표준 입력을 열린 채로 유지하고 
    --tty               # TTY 를 할당. 보통 -it 형태로 많이 사용하죠. 
    --namespace default # namespace 가 필요하다면 지정.
```

`mysql-client` 를 실행할 수 있는 이미지를 컨테이너로 실행하려면 

```
$ kubectl run mysql-client --rm -it --restart='Never' \
    --image docker.io/bitnami/mysql:8.0.22-debian-10-r44 \
    --namespace mysql \
    --command -- bash
```

`ubuntu` 이미지를 컨테이너로 실행해 간단한 작업을 처리하려면 아래처럼 실행하면 됩니다.

```
$ kubectl run ubuntu-term --rm -it --restart='Never' \
    --image ubuntu \
    --command -- bash
```

#kubernetes