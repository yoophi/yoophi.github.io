---
tags: 
- kustomize
- kubernetes
---

# kustomize

::: tip DRAFT

kustomize 에 대한 개요 및 사용법 문서를 준비중입니다.

:::

<https://kustomize.io>

kubstomize 는 kubernetes 자원들을 관리하거나 GitOps 파이프라인을 구성할 때 유용하게 사용하는 유틸리티입니다. 

제가 좋아하는 기능들은 다음과 같습니다. 

- `commonLabels` 를 이용해 `label` 구성하기 
- `newImage`, `newTag` 를 이용해 `image` 주소를 변경하기 
- `configmapGenerator`, `secretsGenerator` 를 이용해 `configMaps` 및 `secrets` 리소스 생성하기 
- `namePrefix`, `nameSuffix` 이용하여 리소스의 이름 변경하기 
- `jsonPatch` 이용하여 리소스의 특정 값을 수정하거나 특정 값을 추가하기 

kustomize 를 설치하고, 실무에 응용하는 법을 문서로 정리해보도록 하겠습니다.

```
TODO
```