---
tags: ["oauth"]
---

# OAuth 2.0 Authorization Code Grant

Authorization Code Grant 는 기밀 또는 공용 클라이언트가 authorization code 를 이용하여 access
token 을 교환하는 방식으로 사용됩니다.

사용자가 리디렉션 URL을 통해 클라이언트로 돌아온 후, 응용 프로그램은 URL 에서 authorization code를 가져와 
access_token 을 요청하는데 사용합니다.

모든 클라이언트는 더 나은 보안을 제공하기 위해 이 흐름과 함께 PKCE extension 을 사용하는게 좋습니다.

#oauth [OAuth Grant Types](../oauth_grant_types.md)