---
tags: ["osx", "bash", "zsh"]
---

# "default interactive shell is now zsh" 메시지 보지 않기


[How to hide the 'default interactive shell is now zsh' message in Terminal on macOS](https://www.addictivetips.com/mac-os/hide-default-interactive-shell-is-now-zsh-in-terminal-on-macos/)


Catalina 업데이트 후부터  Default Shell 이 `zsh`가 아닌 상태로 shell 에 접속하면, 아래와 같은 화면을 보게 된다.

```
The default interactive shell is now zsh.
To update your account to use zsh, please run `chsh -s /bin/zsh`.
For more details, please visit https://support.apple.com/kb/HT208050.
$
```

`zsh`을 사용하지 않으면서, 위 메시지를 보지 않으려면 `BASH_SILENCE_DEPRECATION_WARNING` 환경변수를 설정해주면 된다.

`.bash_profile` 파일에 다음 명령을 추가해두면 된다.

```
export BASH_SILENCE_DEPRECATION_WARNING=1
```

<TagLinks />
