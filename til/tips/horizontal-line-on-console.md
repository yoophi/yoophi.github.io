# Horizontal Line in Shell script

<https://stackoverflow.com/questions/20239979/horizontal-line-on-the-console>

쉘스크립트에 가로선을 긋기 위한 방법. 아래 방법이 가장 실용적인 것 같다.

`bash` 에서.

```
printf %"$COLUMNS"s | tr " " "-"
```

`zsh` 에서 `tr` 사용 없이.

```
printf '—%.0s' {1..$COLUMNS} 
```
