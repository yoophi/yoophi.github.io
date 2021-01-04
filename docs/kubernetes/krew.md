---
tags: 
- kubernetes
- kubectl
---

#  krew

[[toc]]

## 소개 

<https://github.com/kubernetes-sigs/krew>

`krew` 는 [kubectl plugin](kubectl-plugin.md) 설치를 도와주는 #kubernetes 유틸리티입니다. OSX 에서 `brew` 의 역할을 해준다고 할 수 있겠네요. 

## 설치 방법

아래와 같이 간단하게 `brew` 를 이용해 설치할 수 있습니다. 
(하지만 [공식문서](https://krew.sigs.k8s.io/docs/user-guide/setup/install/)에서는 직접 설치하는걸 권장하네요.)

```bash
$ brew install krew
```

설치 후 `.bash_profile` 파일에 `PATH`를 업데이트해줍니다.

```bash
export PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"
```

설치가 완료된 후 `kubectl krew` 명령이 잘 동작하면 준비가 끝났습니다.

## 사용해보기 

제가 유용하게 사용하고 있는 `kubectl-example` 을 설치해봅시다. 

플러그인의 정보를 검색하고, 

```bash
$ kubectl krew search example
NAME     DESCRIPTION                        INSTALLED
example  Prints out example manifest YAMLs  no
```

플러그인의 정보를 확인하고,

```bash
$ kubectl krew info example
NAME: example
URI: https://github.com/seredot/kubectl-example/releases/download/v1.0.1/kubectl-example_1.0.1_Darwin_x86_64.tar.gz
SHA256: 2f63f29d92c236c7bea56cfb5825529d6b4b966bcf79a386a669b24774d24e6c
VERSION: v1.0.0
HOMEPAGE: https://github.com/seredot/kubectl-example
DESCRIPTION:
Prints out a example manifest YAML for a given resource type.
The plugin works similar to a dry run output but for arbitrary resources.
All examples originate from kubernetes.io.
```

플러그인을 설치하고,

```bash
$ kubectl krew install example
Installing plugin: example
Installed plugin: example
\
 | Use this plugin:
 | 	kubectl example
 | Documentation:
 | 	https://github.com/seredot/kubectl-example
/
WARNING: You installed plugin "example" from the krew-index plugin repository.
   These plugins are not audited for security by the Krew maintainers.
   Run them at your own risk.
```

플러그인을 언인스톨해봅니다. 

```bash
$ kubectl krew uninstall example
I0104 22:23:15.058168   41408 migration.go:41] Migrating krew index layout.
I0104 22:23:15.058573   41408 migration.go:58] Migration completed successfully.
Uninstalled plugin example
```
