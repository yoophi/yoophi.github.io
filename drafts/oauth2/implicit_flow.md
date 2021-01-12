---
tags: ["oauth"]
---

# OAuth 2.0 Implicit Grant

Implicit Flow는 authorization code 를 교환하는 과정 없이 access token 을 직접 부여하는 방식인데,
예전에 네이티브 앱 및 자바스크립트 앱에 대해 권장되었던 단순화된 OAuth Flow 입니다.

클라이언트가 수신했다는 확인 없이 HTTP 리디렉션에서 access token을 반환할 수 있는 
위험이 존재하기 때문에 Implicit Flow는 사용하지 않는 것이 좋습니다. (일부 서버에서는 이 방식을 완전히 금지합니다)

OAuth 2.0 Security Best Current Practice 문서에서는 
Implicit Flow 를 완전히 사용하지 않도록 권장하며, 브라우저 기반 어플리케이션에서의 
OAuth 2.0은 PKCE와 함께 authorization code 방식을 사용하는 방법을 설명합니다.

#oauth [OAuth Grant Types](../oauth_grant_types.md)