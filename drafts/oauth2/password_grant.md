---
tags: ["oauth"]
---

# OAuth 2.0 Password Grant

Password Grant는 사용자의 자격 증명을 access token과 교환하는 방법입니다. 
클라이언트 응용 프로그램은 사용자의 암호를 수집하여 인증 서버로 보내야 하므로 
이 방식은 더 이상 사용하지 않는 것이 좋습니다. 

이 방식은 multifactor 인증이나 delegated account 등을 사용하는 
메커니즘을 제공하지 않기 때문에 실제로 상당히 제한적입니다. 

최신 OAuth 2.0 Security Best Current Practice 에서는 Password Grant 를 완전히 허용하지 않습니다. 

#oauth [OAuth Grant Types](../oauth_grant_types.md)
