# OAuth, OpenID Connect 및 SAML 의 차이점 

::: tip INFO

인증 서버를 개발하면서 OpenID Connect 와 OAuth 에 대해 자료를 정리하고
있습니다.<br /> 
참고하기 위해 [okta](https://www.okta.com/) 의 
[문서](https://www.okta.com/identity-101/whats-the-difference-between-oauth-openid-connect-and-saml/)를
번역해보았습니다.

:::

<!--
There are as many ways to keep data safe as there are ways to attack it. From multi-factor authentication to single sign-on to on-premises firewalls, the options can be staggering. For developers and IT professionals, the choice of how to keep data and identities secure begins even sooner: choosing the standard that should be deployed to keep federated identity safe.
-->

데이터를 공격하는 방법만큼 데이터를 안전하게 유지하는 방법도 많습니다. 다중
요소 인증(Multi Facto Auth)에서 단일 로그온 및 내부 방화벽에 이르기까지 다양한
옵션을 사용할 수 있습니다. 개발자와 IT 전문가의 경우, 데이터 및 ID 보안을
유지하는 방법을 빨리 선택해야 합니다. 연합 ID를 안전하게 유지하기 위해 구현하기
위해 어떤 표준을 선택해야 할까요?

<!--
The decision isn’t always a straightforward one. Many struggle to distinguish between OAuth 2.0, OpenID Connect, and Security Assertion Markup Language (SAML), each of which brings structure to the federation process. This article brings clarity on what these standards mean, how they compare, and the purposes for which enterprises should use them.
-->

결정이 항상 간단한 것은 아닙니다. 많은 사람들이 OAuth 2.0, OpenID Connect 와
SAML 의 서로 다른 페더레이션 구조 때문에 이것들을 구별하는데 어려움을 겪고
있습니다.  이 문서에서는 이러한 표준의 의미와 차이점을, 그리고 언제 무엇을
사용하면 좋을지 알아봅니다.

<!--
We've also got a more focused comparison between SAML vs OAuth in another article if that's what you're looking for.
-->

SAML 과 OAuth 를 더 심도있게 분석한 [다른 기사](https://www.okta.com/identity-101/saml-vs-oauth/)도 있으니 관심있으면 살펴보세요.

<!--## The Differences Between Standards-->

## 표준간의 차이점 

<!--
The main differentiator between these three players is that OAuth 2.0 is a framework that controls authorization to a protected resource such as an application or a set of files, while OpenID Connect and SAML are both industry standards for federated authentication. That means that OAuth 2.0 is used in fundamentally different situations than the other two standards (examples of which can be seen below), and can be used simultaneously with either OpenID Connect or SAML.
-->

이러한 세가지 표준들의 가장 중요한 차이점은, OpenID Connect 와 SAML 이 연합
인증(federated authentication)을 위한 업계 표준인데 반해 OAuth 2.0 은 보호된
리소스(어플리케이션이나 파일들)에 대한 권한을 인가(authorization)하기 위한
프레임워크라는 점입니다.
 
<!--
Using either OpenID Connect or SAML independently, enterprises can achieve user authentication and deploy single sign-on. Though they both deal with logins, they have different strengths and weaknesses.
-->

OpenID Connect 또는 SAML 을 독립적으로 사용함으로써 기업은 사용자 인증을
구현하고 SSO(Single Sign-On)을 배포할 수 있습니다.

<!--
- OpenID Connect is built on the OAuth 2.0 protocol and uses an additional JSON Web Token (JWT), called an ID token, to standardize areas that OAuth 2.0 leaves up to choice, such as scopes and endpoint discovery. It is specifically focused on user authentication and is widely used to enable user logins on consumer websites and mobile apps.
-->

- OpenID Connect 는 OAuth 2.0 프로토콜을 기반으로 하며, ID Token 이라고 하는
  JSON Web Token(JWT)을 사용하여 OAuth 2.0 이 기본으로 제공하지 않는 부분인
  scopes 나 Endpoint Discovery 와 같은 영역을 표준화합니다.  OpenID Connect는
  특히 사용자 인증에 집중하고 있으며 웹사이트나 모바일 앱의 사용자 로그인을
  구현하기 위해 널리 사용됩니다.

<!--
- SAML is independent of OAuth, relying on an exchange of messages to authenticate in XML SAML format, as opposed to JWT. It is more commonly used to help enterprise users sign in to multiple applications using a single login.
-->

- SAML은 OAuth 와 독립적이며 인증을 위해 JWT 가 아닌 XML SAML 포맷의 메시지를
  교환하는 방식을 사용합니다.  엔터프라이즈 고객이 단일 로그인을 사용하여
  여러개의 어플리케이션에 로그인할 수 있도록 지원하는 데 보다 일반적으로
  사용됩니다.

## OAuth 2.0 vs OpenID Connect vs SAML

<!--
Remember that it isn’t a question of which structure an organization should use, but rather of when each one should be deployed. A strong identity solution will use these three structures to achieve different ends, depending on the kind of operations an enterprise needs to protect. Their use cases are as follows:
-->

조직이 어떤 구조를 사용해야하는가? 하는 질문이 아니라 각각의 표준이 어떤 용도로
사용되는가? 라는 점을 기억하세요.  강력한 ID 솔루션은 기업이 보호해야하는 운영
유형에 따라 이 세가지 구조를 사용하여 서로 다른 목표를 달성합니다.

이러한 사용 사례는 다음과 같습니다.

<!--
OAuth 2.0: If you’ve ever signed up to a new application and agreed to let it automatically source new contacts via Facebook or your phone contacts, then you’ve likely used OAuth 2.0. This standard provides secure delegated access. That means an application can take actions or access resources from a server on behalf of the user, without them having to share their credentials. It does this by allowing the identity provider (IdP) to issue tokens to third-party applications with the user’s approval.
-->

**OAuth 2.0**: <br />
새 애플리케이션에 가입하고 Facebook이나 전화 연락처를 통해 새 연락처를 자동으로
수집할 수 있도록 동의한 적이 있다면, 아마도 OAuth 2.0을 사용한 것입니다.  이
표준은 안전한 위임 액세스를 제공합니다.  즉, 응용프로그램이 자격 증명을
공유하지 않고도 사용자를 대신하여 서버에서 작업을 수행하거나 리소스에 액세스할
수 있습니다. ID 제공자(IdP)가 사용자의 승인으로 타사 응용 프로그램에 토큰을
발급하도록 허용함으로써 이 작업을 수행할 수 있습니다.

<!--
OpenID Connect: If you’ve used your Google to sign in to applications like YouTube, or Facebook to log into an online shopping cart, then you’re familiar with this authentication option. OpenID Connect is an open standard that organizations use to authenticate users. IdPs use this so that users can sign in to the IdP, and then access other websites and apps without having to log in or share their sign-in information. 
-->


**OpenID Connect**: <br />
Google을 사용하여 YouTube 같은 어플리케이션에 로그인했거나,
Facebook 을 이용해서 온라인 쇼핑 서비스에 로그인했다면 이 인증 옵션에 익숙한 
것입니다. OpenID Connect는 조직에서 사용자를 인증하는 데 사용하는 개방형
표준입니다. IdP는 사용자가 로그인 정보를 공유하지 않고도 IdP에 로그인한 다음
다른 웹 사이트와 앱에 액세스할 수 있도록 이 기능을 사용합니다.

<!--
SAML: You’ve more likely experienced SAML authentication in action in the work environment. For example, it enables you to log into your corporate intranet or IdP and then access numerous additional services, such as Salesforce, Box, or Workday, without having to re-enter your credentials. SAML is an XML-based standard for exchanging authentication and authorization data between IdPs and service providers to verify the user’s identity and permissions, then grant or deny their access to services.
-->

**SAML**: <br />
아마도 업무 환경에서 SAML 인증을 경험한 적이 더 많을 것입니다. 회사
인트라넷 또는 IdP에 로그인한 다음 자격 증명을 다시 입력하지 않고도 Salesforce,
Box 또는 Workday와 같은 수많은 추가 서비스에 액세스할 수 있습니다. SAML은 IdP와
서비스 공급자 간에 인증 및 인증 데이터를 교환하여 사용자의 ID와 사용 권한을
확인한 다음 서비스에 대한 액세스를 허용하거나 거부하기 위한 XML 기반
표준입니다.

<!--
Enterprises rely on web frameworks and protocols like OAuth 2.0, OpenID, and SAML to bring structure and security to federated identity. Knowing when to use each is a key step towards protecting your organization’s data from the ground up.
-->

엔터프라이즈 서비스는 OAuth 2.0, OpenID 및 SAML과 같은 웹 프레임워크와
프로토콜에 의존하여 구조와 보안을 연합 인증(Federated Identity)으로 구현합니다.
각 표준을 언제 사용해야 하는지 아는 것이 조직의 데이터를 보호하는 데 있어
중요합니다.

