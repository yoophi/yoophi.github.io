(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{431:function(e,t,a){"use strict";a.r(t);var r=a(45),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"간단하게-설명하는-oauth-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#간단하게-설명하는-oauth-2"}},[e._v("#")]),e._v(" 간단하게 설명하는 OAuth 2")]),e._v(" "),a("p",[e._v("이 문서는 개발자들과 서비스 제공자들이 OAuth 2 프로토콜을 구현할 수 있도록\nOAuth 2.0 을 단순화된 형식으로 설명합니다.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://oauth.net/2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAuth 2 스펙"),a("OutboundLink")],1),e._v("은 다소 읽기 복잡합니다.\n그래서 저는 OAuth 2의 용어를 간단하게 설명할 수 있는 방식으로\n이 글을 썼습니다.\nThe core spec leaves many decisions up to the\nimplementer, often based on security tradeoffs of the\nimplementation.\nOAuth 2를 성공적으로 구현하기 위해 필요한 모든 가능한\n결정들을 설명하는 대신, 이 글에서는 적당한 대부분의 구현에 필요한 것들을\n설명합니다.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.udemy.com/course/oauth-2-simplified/?referralCode=B04F59AED67B8DA74FA7",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://aaronparecki.com/oauth-2-simplified/nuts-and-bolts-of-oauth.png",alt:""}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Note: 이 문서는 2012 버전에 기반한 OAuth 2.0 모범사례로 업데이트되었습니다.\n원본 문서는 "),a("a",{attrs:{href:"https://aaronparecki.com/2012/07/29/7/oauth2-simplified",target:"_blank",rel:"noopener noreferrer"}},[e._v("이곳"),a("OutboundLink")],1),e._v("에서 있습니다.")]),e._v(" "),a("h2",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#roles"}},[e._v("Roles")]),e._v(": Applications, APIs and Users")]),e._v(" "),a("li",[a("a",{attrs:{href:"#creating-an-app"}},[e._v("Creating an App")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#authorization"}},[e._v("Authorization")]),e._v(": Obtaining an access token\n"),a("ul",[a("li",[a("a",{attrs:{href:"#web-server-apps"}},[e._v("Web Server Apps")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#single-page-apps"}},[e._v("Single-Page Apps")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#mobile-apps"}},[e._v("Mobile Apps")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#others"}},[e._v("Other Grant Types")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#making-authenticated-requests"}},[e._v("Making Authenticated Requests")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#differences"}},[e._v("Differences from OAuth 1.0")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#authentication-and-signatures"}},[e._v("Authentication and\nSignatures")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#user-experience-and-alternative-authorization-flows"}},[e._v("User Experience and Alternative Authorization\nFlows")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#performance-at-scale"}},[e._v("Performance at Scale")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#resources"}},[e._v("Resources")])])]),e._v(" "),a("h2",{attrs:{id:"역할"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#역할"}},[e._v("#")]),e._v(" 역할")]),e._v(" "),a("h3",{attrs:{id:"_3자-어플리케이션-클라이언트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3자-어플리케이션-클라이언트"}},[e._v("#")]),e._v(' 3자 어플리케이션: "클라이언트"')]),e._v(" "),a("p",[e._v("클라이언트는 사용자의 계정에 접근하고자 하는 어플리케이션입니다.\n클라이언트는 동작을 수행하기 전에 사용자로부터 권한을 획득해야 합니다.")]),e._v(" "),a("h3",{attrs:{id:"api-리소스-서버"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-리소스-서버"}},[e._v("#")]),e._v(' API: "리소스 서버"')]),e._v(" "),a("p",[e._v("리소스 서버는 사용자의 정보에 접속하기 위해 사용되는 API 서버입니다.")]),e._v(" "),a("h3",{attrs:{id:"인증-서버"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#인증-서버"}},[e._v("#")]),e._v(" 인증 서버")]),e._v(" "),a("p",[e._v("인증서버는  사용자가 요청을 승인 또는 거절할 수 있는 인터페이스를 제공하는 서버입니다.\n작게 구현하자면 인증서버는 API 서버와 동일할 수도 있습니다. 그렇지만\n큰 스케일로 배포될 때에는 대체로 단독 서버로 구성됩니다.")]),e._v(" "),a("h3",{attrs:{id:"사용자-자원-소유자-resource-owner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용자-자원-소유자-resource-owner"}},[e._v("#")]),e._v(' 사용자: "자원 소유자 (Resource Owner)"')]),e._v(" "),a("p",[e._v("Resource Owner는 그들 계정의 일부에 대한 접근 권한을 부여하는 사람입니다.")]),e._v(" "),a("h2",{attrs:{id:"앱-만들기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#앱-만들기"}},[e._v("#")]),e._v(" 앱 만들기")]),e._v(" "),a("p",[e._v("OAuth 프로세스를 시작하기 전에, 우선 서비스에 새로운 앱을 등록해야 합니다.\n새로운 앱을 등록할 때, 보통 어플리케이션의 이름, 웹사이트, 로고 등등 기본적인 정보를 등록하게\n됩니다.\n추가적으로\n웹서버나 브라우저 기반의 또는 모바일 앱 환경에서 사용자를 redirect 시킬 때 사용할\nRedirect URI 를 등록해야 합니다.")]),e._v(" "),a("h3",{attrs:{id:"redirect-uris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redirect-uris"}},[e._v("#")]),e._v(" Redirect URIs")]),e._v(" "),a("p",[e._v("보안적인 공격에 방어하기 위해, 서비스는 사용자를 미리 등록한 URI 로만 redirect 해줍니다.\nHTTP 방식의 Redirect URI 는 HTTPS 로 구성되어야만 합니다.\n이렇게 함으로써 인증 과정에서 누군가가 토큰을 가로채는 위험을 예방할 수 있습니다.\n네이티브 앱의 경우, redirect URI 로 어플리케이션을 위한 custom URL scheme 를 등록할 수 있습니다.\n예를 들자면 "),a("code",[e._v("demoapp://redirect")]),e._v(" 같은 것 말입니다.")]),e._v(" "),a("h3",{attrs:{id:"client-id-와-secret"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-id-와-secret"}},[e._v("#")]),e._v(" Client ID 와 Secret")]),e._v(" "),a("p",[e._v("After registering your app, you will receive a client ID and\noptionally a client secret. The client ID is considered public\ninformation, and is used to build login URLs, or included in\nJavascript source code on a page. The client secret "),a("strong",[e._v("must")]),e._v(" be kept\nconfidential. If a deployed app cannot keep the secret confidential,\nsuch as single-page Javascript apps or native apps, then the secret\nis not used, and ideally the service shouldn't issue a secret to\nthese types of apps in the first place.")]),e._v(" "),a("h2",{attrs:{id:"authorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[e._v("#")]),e._v(" Authorization")]),e._v(" "),a("p",[e._v("The first step of OAuth 2 is to get authorization from the user. For\nbrowser-based or mobile apps, this is usually accomplished by\ndisplaying an interface provided by the service to the user.")]),e._v(" "),a("p",[e._v('OAuth 2 provides several "grant types" for different use cases.\nThe grant types defined are:')]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Authorization Code")]),e._v(" for apps running on a "),a("a",{attrs:{href:"#web-server-apps"}},[e._v("web\nserver")]),e._v(", "),a("a",{attrs:{href:"#browser-based-apps"}},[e._v("browser-based")]),e._v("\nand "),a("a",{attrs:{href:"#mobile-apps"}},[e._v("mobile apps")])]),e._v(" "),a("li",[a("strong",[e._v("Password")]),e._v(" for logging in with a "),a("a",{attrs:{href:"#other-app-types"}},[e._v("username and\npassword")]),e._v(" (only for first-party apps)")]),e._v(" "),a("li",[a("strong",[e._v("Client credentials")]),e._v(" for "),a("a",{attrs:{href:"#client-credentials"}},[e._v("application\naccess")]),e._v(" without a user present")]),e._v(" "),a("li",[a("strong",[e._v("Implicit")]),e._v(" was previously recommended for clients without a\nsecret, but has been superseded by using the Authorization Code\ngrant with PKCE.")])]),e._v(" "),a("p",[e._v("Each use case is described in detail below.")]),e._v(" "),a("h2",{attrs:{id:"web-server-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-server-apps"}},[e._v("#")]),e._v(" Web Server Apps")]),e._v(" "),a("p",[e._v("Web server apps are the most common type of application you\nencounter when dealing with OAuth servers. Web apps are written in a\nserver-side language and run on a server where the source code of\nthe application is not available to the public. This means the\napplication is able to use its client secret when communicating with\nthe authorization server, which can help avoid many attack vectors.")]),e._v(" "),a("h3",{attrs:{id:"authorization-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization-2"}},[e._v("#")]),e._v(" Authorization")]),e._v(" "),a("p",[e._v('Create a "Log In" link sending the user to:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("https://authorization-server.com/auth?response_type=code&\n  client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&scope=photos&state=1234zyx\n")])])]),a("ul",[a("li",[a("strong",[e._v("response_type=code")]),e._v(" - Indicates that your server expects to\nreceive an authorization code")]),e._v(" "),a("li",[a("strong",[e._v("client_id")]),e._v(" - The client ID you received when you first\ncreated the application")]),e._v(" "),a("li",[a("strong",[e._v("redirect_uri")]),e._v(" - Indicates the URI to return the user to after\nauthorization is complete")]),e._v(" "),a("li",[a("strong",[e._v("scope")]),e._v(" - One or more scope values indicating which parts of\nthe user's account you wish to access")]),e._v(" "),a("li",[a("strong",[e._v("state")]),e._v(" - A random string generated by your application, which\nyou'll verify later")])]),e._v(" "),a("p",[e._v("The user sees the authorization prompt")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://aaronparecki.com/oauth-2-simplified/oauth-authorization-prompt.png",alt:"OAuth AuthorizationPrompt"}})]),e._v(" "),a("p",[e._v('If the user clicks "Allow," the service redirects the user back to\nyour site with an authorization code')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("https://example-app.com/cb?code=AUTH_CODE_HERE&state=1234zyx\n")])])]),a("ul",[a("li",[a("strong",[e._v("code")]),e._v(" - The server returns the authorization code in the\nquery string")]),e._v(" "),a("li",[a("strong",[e._v("state")]),e._v(" - The server returns the same state value that you\npassed")])]),e._v(" "),a("p",[e._v("You should first compare this state value to ensure it matches the\none you started with. You can typically store the state value in a\ncookie or session, and compare it when the user comes back. This\nhelps ensure your redirection endpoint isn't able to be tricked\ninto attempting to exchange arbitrary authorization codes.")]),e._v(" "),a("h3",{attrs:{id:"getting-an-access-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-an-access-token"}},[e._v("#")]),e._v(" Getting an Access Token")]),e._v(" "),a("p",[e._v("Your server exchanges the authorization code for an access token by\nmaking a POST request to the authorization server's token endpoint:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("POST https://api.authorization-server.com/token\n  grant_type=authorization_code&\n  code=AUTH_CODE_HERE&\n  redirect_uri=REDIRECT_URI&\n  client_id=CLIENT_ID&\n  client_secret=CLIENT_SECRET\n")])])]),a("ul",[a("li",[a("strong",[e._v("grant_type=authorization_code")]),e._v(" - The grant type for this flow\nis authorization_code")]),e._v(" "),a("li",[a("strong",[e._v("code=AUTH_CODE_HERE")]),e._v(" - This is the code you received in the\nquery string")]),e._v(" "),a("li",[a("strong",[e._v("redirect_uri=REDIRECT_URI")]),e._v(" - Must be identical to the\nredirect URI provided in the original link")]),e._v(" "),a("li",[a("strong",[e._v("client_id=CLIENT_ID")]),e._v(" - The client ID you received when you\nfirst created the application")]),e._v(" "),a("li",[a("strong",[e._v("client_secret=CLIENT_SECRET")]),e._v(" - Since this request is made\nfrom server-side code, the secret is included")])]),e._v(" "),a("p",[e._v("The server replies with an access token and expiration time")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('{\n  "access_token":"RsT5OjbzRn430zqMLgV3Ia",\n  "expires_in":3600\n}\n')])])]),a("p",[e._v("or if there was an error")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('{\n  "error":"invalid_request"\n}\n')])])]),a("p",[e._v("Security: Note that the service must require apps to pre-register\ntheir redirect URIs.")]),e._v(" "),a("p",[e._v("[]{#browser-based-apps}")]),e._v(" "),a("h2",{attrs:{id:"single-page-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-page-apps"}},[e._v("#")]),e._v(" Single-Page Apps")]),e._v(" "),a("p",[e._v("Single-page apps (or browser-based apps) run entirely in the browser\nafter loading the source code from a web page. Since the entire\nsource code is available to the browser, they cannot maintain the\nconfidentiality of a client secret, so the secret is not used in\nthis case. The flow is based on the authorization code flow above,\nbut with the addition of a dynamically generated secret used on each\nrequest. This is known as the "),a("a",{attrs:{href:"https://oauth.net/2/pkce",target:"_blank",rel:"noopener noreferrer"}},[e._v("PKCE"),a("OutboundLink")],1),e._v("\nextension.")]),e._v(" "),a("p",[e._v('::: {.inline-banner}\nNote: Previously, it was recommended that browser-based apps use the\n"Implicit" flow, which returns an access token immediately in the\nredirect and does not have a token exchange step. In the time since\nthe spec was originally written, the industry best practice has\nchanged to recommend that the authorization code flow be used\nwithout the client secret. This provides more opportunities to\ncreate a secure flow, such as using the '),a("a",{attrs:{href:"https://oauth.net/2/pkce/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PKCE\nextension"),a("OutboundLink")],1),e._v(". Further reading: "),a("a",{attrs:{href:"https://tools.ietf.org/html/draft-ietf-oauth-security-topics",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAuth 2.0\nSecurity Best Current\nPractice"),a("OutboundLink")],1),e._v("\n(ietf.org), "),a("a",{attrs:{href:"https://tools.ietf.org/html/draft-parecki-oauth-browser-based-apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAuth 2.0 for Browser-Based\nApps"),a("OutboundLink")],1),e._v("\n(ietf.org).\n:::")]),e._v(" "),a("h3",{attrs:{id:"authorization-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization-3"}},[e._v("#")]),e._v(" Authorization")]),e._v(" "),a("p",[e._v("Create a random string between 43-128 characters long, then generate\nthe url-safe base64-encoded SHA256 hash of the string. The original\nrandom string is known as the "),a("code",[e._v("code_verifier")]),e._v(", and the hashed\nversion is known as the "),a("code",[e._v("code_challenge")]),e._v(".")]),e._v(" "),a("p",[e._v("Create a random string (code verifier), e.g.\n"),a("code",[e._v("5d2309e5bb73b864f989753887fe52f79ce5270395e25862da6940d5")])]),e._v(" "),a("p",[e._v("Create the SHA256 hash, then base64-encode the string (code\nchallenge): "),a("code",[e._v("MChCW5vD-3h03HMGFZYskOSTir7II_MMTb8a9rJNhnI")])]),e._v(" "),a("p",[e._v("(You can use the helper utility at\n"),a("a",{attrs:{href:"https://example-app.com/pkce",target:"_blank",rel:"noopener noreferrer"}},[e._v("example-app.com/pkce"),a("OutboundLink")],1),e._v(" to generate a\nsecret and hash.)")]),e._v(" "),a("p",[e._v('Create a "Log In" link like the authorization code flow above, but\nnow include the code challenge in the request:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("https://authorization-server.com/auth?response_type=code&\n  client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&scope=photos&state=1234zyx&code_challenge=CODE_CHALLENGE&code_challenge_method=S256\n")])])]),a("ul",[a("li",[a("strong",[e._v("response_type=code")]),e._v(" - Indicates that your server expects to\nreceive an authorization code")]),e._v(" "),a("li",[a("strong",[e._v("client_id")]),e._v(" - The client ID you received when you first\ncreated the application")]),e._v(" "),a("li",[a("strong",[e._v("redirect_uri")]),e._v(" - Indicates the URI to return the user to after\nauthorization is complete")]),e._v(" "),a("li",[a("strong",[e._v("scope")]),e._v(" - One or more scope values indicating which parts of\nthe user's account you wish to access")]),e._v(" "),a("li",[a("strong",[e._v("state")]),e._v(" - A random string generated by your application, which\nyou'll verify later")]),e._v(" "),a("li",[a("strong",[e._v("code_challenge")]),e._v(" - The URL-safe base64-encoded SHA256 hash of\nthe secret")]),e._v(" "),a("li",[a("strong",[e._v("code_challenge_method=S256")]),e._v(" - Indicate which hashing method\nyou used (S256)")])]),e._v(" "),a("p",[e._v("The user sees the authorization prompt")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://aaronparecki.com/oauth-2-simplified/oauth-authorization-prompt.png",alt:"OAuth AuthorizationPrompt"}})]),e._v(" "),a("p",[e._v('If the user clicks "Allow," the service redirects the user back to\nyour site with an auth code')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("https://example-app.com/cb?code=AUTH_CODE_HERE&state=1234zyx\n")])])]),a("ul",[a("li",[a("strong",[e._v("code")]),e._v(" - The server returns the authorization code in the\nquery string")]),e._v(" "),a("li",[a("strong",[e._v("state")]),e._v(" - The server returns the same state value that you\npassed")])]),e._v(" "),a("p",[e._v("You should first compare this state value to ensure it matches the\none you started with. You can typically store the state value in a\ncookie, and compare it when the user comes back. This ensures your\nredirection endpoint isn't able to be tricked into attempting to\nexchange arbitrary authorization codes.")]),e._v(" "),a("p",[e._v("You can find a complete example of using PKCE in JavaScript in my\nblog post "),a("a",{attrs:{href:"https://developer.okta.com/blog/2019/05/01/is-the-oauth-implicit-flow-dead",target:"_blank",rel:"noopener noreferrer"}},[e._v("Is the OAuth Implicit Flow\nDead?"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"getting-an-access-token-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-an-access-token-2"}},[e._v("#")]),e._v(" Getting an Access Token")]),e._v(" "),a("p",[e._v("Now you'll need to exchange the authorization code for an access\ntoken, but instead of providing a pre-registered client secret, you\nsend the PKCE secret you generated at the beginning of the flow.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("POST https://api.authorization-server.com/token\n  grant_type=authorization_code&\n  code=AUTH_CODE_HERE&\n  redirect_uri=REDIRECT_URI&\n  client_id=CLIENT_ID&\n  code_verifier=CODE_VERIFIER\n")])])]),a("ul",[a("li",[a("strong",[e._v("grant_type=authorization_code")]),e._v(" - The grant type for this flow\nis authorization_code")]),e._v(" "),a("li",[a("strong",[e._v("code=AUTH_CODE_HERE")]),e._v(" - This is the code you received in the\nquery string")]),e._v(" "),a("li",[a("strong",[e._v("redirect_uri=REDIRECT_URI")]),e._v(" - Must be identical to the\nredirect URI provided in the original link")]),e._v(" "),a("li",[a("strong",[e._v("client_id=CLIENT_ID")]),e._v(" - The client ID you received when you\nfirst created the application")]),e._v(" "),a("li",[a("strong",[e._v("code_verifier=CODE_VERIFIER")]),e._v(" - The random secret you\ngenerated at the beginning")])]),e._v(" "),a("p",[e._v("The authorization server will hash the verifier and compare it to\nthe challenge sent in the request, and only issue the access token\nif they match. This ensures that even if someone was able to\nintercept the authorization code, they will not be able to use it to\nget an access token since they won't have the secret.")]),e._v(" "),a("h2",{attrs:{id:"mobile-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobile-apps"}},[e._v("#")]),e._v(" Mobile Apps")]),e._v(" "),a("p",[e._v("Like browser-based apps, mobile apps also cannot maintain the\nconfidentiality of a client secret. Because of this, mobile apps\nalso use the PKCE flow which does not require a client secret. There\nare some additional concerns that mobile apps should keep in mind to\nensure the security of the OAuth flow.")]),e._v(" "),a("p",[e._v("Note: Previously, it was recommended that mobile and native apps use\nthe Implicit grant. In the time since the spec was originally\nwritten, the industry best practice has changed to recommend using\nthe authorization code flow with no secret for native apps. There\nare some "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc8252",target:"_blank",rel:"noopener noreferrer"}},[e._v("additional\nrecommendations"),a("OutboundLink")],1),e._v(" for native\napps that are worth reading as well.")]),e._v(" "),a("h3",{attrs:{id:"authorization-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization-4"}},[e._v("#")]),e._v(" Authorization")]),e._v(" "),a("p",[e._v('Create a "Log in" button sending the user to either the native app\nof the service on the phone, or a mobile web page for the service.\nApps can register a custom URI scheme such as "example-app://" so\nthe native app is launched whenever a URL with that protocol is\nvisited, or they can register URL patterns which will launch the\nnative app if a URL matching the pattern is visited.')]),e._v(" "),a("h4",{attrs:{id:"using-the-service-s-native-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-service-s-native-app"}},[e._v("#")]),e._v(" Using the Service's Native App")]),e._v(" "),a("p",[e._v("If the user has the native Facebook app installed, direct them to\nthe following URL:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("fbauth2://authorize?response_type=code&client_id=CLIENT_ID\n  &redirect_uri=REDIRECT_URI&scope=email&state=1234zyx\n")])])]),a("ul",[a("li",[a("strong",[e._v("response_type=code")]),e._v(" - indicates that your server expects to\nreceive an authorization code")]),e._v(" "),a("li",[a("strong",[e._v("client_id=CLIENT_ID")]),e._v(" - The client ID you received when you\nfirst created the application")]),e._v(" "),a("li",[a("strong",[e._v("redirect_uri=REDIRECT_URI")]),e._v(" - Indicates the URI to return the\nuser to after authorization is complete, such as\n"),a("code",[e._v("fb00000000://authorize")])]),e._v(" "),a("li",[a("strong",[e._v("scope=email")]),e._v(" - One or more scope values indicating which\nparts of the user's account you wish to access")]),e._v(" "),a("li",[a("strong",[e._v("state=1234zyx")]),e._v(" - A random string generated by your\napplication, which you'll verify later")])]),e._v(" "),a("p",[e._v("For servers that support the "),a("a",{attrs:{href:"https://oauth.net/2/pkce/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PKCE\nextension"),a("OutboundLink")],1),e._v(" (and if you're building a\nserver, you should support the PKCE extension), you'll also include\nthe following parameters. First, create a \"code verifier\" which is\na random string that the app stores locally.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("code_challenge=XXXXXXX")]),e._v(" - This is a base64-encoded version of\nthe sha256 hash of the code verifier string")]),e._v(" "),a("li",[a("strong",[e._v("code_challenge_method=S256")]),e._v(" - Indicates the hashing method\nused to compute the challenge, in this case, sha256.")])]),e._v(" "),a("p",[e._v("Note that your redirect URI will probably look like\n"),a("code",[e._v("fb00000000://authorize")]),e._v(" where the protocol is a custom URL scheme\nthat your app has registered with the OS.")]),e._v(" "),a("h4",{attrs:{id:"using-a-web-browser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-web-browser"}},[e._v("#")]),e._v(" Using a Web Browser")]),e._v(" "),a("p",[e._v("If the service does not have a native application, you can launch a\nmobile browser to the standard web authorization URL. Note that you\nshould never use an embedded web view in your own application, as\nthis provides the user no guarantee that they are actually are\nentering their password in the service's website rather than a\nphishing site.")]),e._v(" "),a("p",[e._v('You should either launch the native mobile browser, or use the new\niOS "SafariViewController" to launch an embedded browser in your\napplication. This API was added in iOS 9, and provides a mechanism\nto launch a browser inside the application that both shows the\naddress bar so the user can confirm they\'re on the correct website,\nand also shares cookies with the real Safari browser. It also\nprevents the application from inspecting and modifying the contents\nof the browser, so can be considered secure.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("https://facebook.com/dialog/oauth?response_type=code&client_id=CLIENT_ID\n  &redirect_uri=REDIRECT_URI&scope=email&state=1234zyx\n")])])]),a("p",[e._v("Again, if the service supports PKCE, then those parameters should be\nincluded as well as described above.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("response_type=code")]),e._v(" - indicates that your server expects to\nreceive an authorization code")]),e._v(" "),a("li",[a("strong",[e._v("client_id=CLIENT_ID")]),e._v(" - The client ID you received when you\nfirst created the application")]),e._v(" "),a("li",[a("strong",[e._v("redirect_uri=REDIRECT_URI")]),e._v(" - Indicates the URI to return the\nuser to after authorization is complete, such as\n"),a("code",[e._v("fb00000000://authorize")])]),e._v(" "),a("li",[a("strong",[e._v("scope=email")]),e._v(" - One or more scope values indicating which\nparts of the user's account you wish to access")]),e._v(" "),a("li",[a("strong",[e._v("state=1234zyx")]),e._v(" - A random string generated by your\napplication, which you'll verify later")])]),e._v(" "),a("p",[e._v("The user will see the authorization prompt")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://aaronparecki.com/oauth-2-simplified/everyday-city-auth.png",alt:"Facebook AuthorizationPrompt"}})]),e._v(" "),a("h3",{attrs:{id:"getting-an-access-token-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-an-access-token-3"}},[e._v("#")]),e._v(" Getting an Access Token")]),e._v(" "),a("p",[e._v('After clicking "Approve", the user will be redirected back to your\napplication with a URL like')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("fb00000000://authorize?code=AUTHORIZATION_CODE&state=1234zyx\n")])])]),a("p",[e._v("Your mobile application should first verify that the state\ncorresponds to the state that was used in the initial request, and\ncan then exchange the authorization code for an access token.")]),e._v(" "),a("p",[e._v("The token exchange will look the same as exchanging the code in the\nweb server app case, except that the secret is not sent. If the\nserver supports PKCE, then you will need to include an additional\nparameter as described below.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("POST https://api.authorization-server.com/token\n  grant_type=authorization_code&\n  code=AUTH_CODE_HERE&\n  redirect_uri=REDIRECT_URI&\n  client_id=CLIENT_ID&\n  code_verifier=VERIFIER_STRING\n")])])]),a("ul",[a("li",[a("strong",[e._v("grant_type=authorization_code")]),e._v(" - The grant type for this flow\nis authorization_code")]),e._v(" "),a("li",[a("strong",[e._v("code=AUTH_CODE_HERE")]),e._v(" - This is the code you received in the\nquery string")]),e._v(" "),a("li",[a("strong",[e._v("redirect_uri=REDIRECT_URI")]),e._v(" - Must be identical to the\nredirect URI provided in the original link")]),e._v(" "),a("li",[a("strong",[e._v("client_id=CLIENT_ID")]),e._v(" - The client ID you received when you\nfirst created the application")]),e._v(" "),a("li",[a("strong",[e._v("code_verifier=VERIFIER_STRING")]),e._v(" - The plaintext string that\nyou previously hashed to create the code_challenge")])]),e._v(" "),a("p",[e._v("The authorization server will verify this request and return an\naccess token.")]),e._v(" "),a("p",[e._v("If the server supports PKCE, then the authorization server will\nrecognize that this code was generated with a code challenge, and\nwill hash the provided plaintext and confirm that the hashed version\ncorresponds with the hashed string that was sent in the initial\nauthorization request. This ensures the security of using the\nauthorization code flow with clients that don't support a secret.")]),e._v(" "),a("h2",{attrs:{id:"other-grant-types-others"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-grant-types-others"}},[e._v("#")]),e._v(" Other Grant Types {#others}")]),e._v(" "),a("h3",{attrs:{id:"password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[e._v("#")]),e._v(" Password")]),e._v(" "),a("p",[e._v('OAuth 2 also provides a "password" grant type which can be used to\nexchange a username and password for an access token directly. Since\nthis obviously requires the application to collect the user\'s\npassword, it must only be used by apps created by the service\nitself. For example, the native Twitter app could use this grant\ntype to log in on mobile or desktop apps.')]),e._v(" "),a("p",[e._v("To use the password grant type, simply make a POST request like the\nfollowing:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("POST https://api.authorization-server.com/token\n  grant_type=password&\n  username=USERNAME&\n  password=PASSWORD&\n  client_id=CLIENT_ID\n")])])]),a("ul",[a("li",[a("strong",[e._v("grant_type=password")]),e._v(" - The grant type for this flow is\npassword")]),e._v(" "),a("li",[a("strong",[e._v("username=USERNAME")]),e._v(" - The user's username as collected by the\napplication")]),e._v(" "),a("li",[a("strong",[e._v("password=PASSWORD")]),e._v(" - The user's password as collected by the\napplication")]),e._v(" "),a("li",[a("strong",[e._v("client_id=CLIENT_ID")]),e._v(" - The client ID you received when you\nfirst created the application")])]),e._v(" "),a("p",[e._v("The server replies with an access token in the same format as the\nother grant types.")]),e._v(" "),a("p",[e._v("Note, the client secret is not included here under the assumption\nthat most of the use cases for password grants will be mobile or\ndesktop apps, where the secret cannot be protected.")]),e._v(" "),a("h3",{attrs:{id:"application-access-client-credentials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-access-client-credentials"}},[e._v("#")]),e._v(" Application access {#client-credentials}")]),e._v(" "),a("p",[e._v("In some cases, applications may need an access token to act on\nbehalf of themselves rather than a user. For example, the service\nmay provide a way for the application to update their own\ninformation such as their website URL or icon, or they may wish to\nget statistics about the users of the app. In this case,\napplications need a way to get an access token for their own\naccount, outside the context of any specific user. OAuth provides\nthe "),a("code",[e._v("client_credentials")]),e._v(" grant type for this purpose.")]),e._v(" "),a("p",[e._v("To use the client credentials grant type, make a POST request like\nthe following:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("POST https://api.authorization-server.com/token\n    grant_type=client_credentials&\n    client_id=CLIENT_ID&\n    client_secret=CLIENT_SECRET\n")])])]),a("p",[e._v("The response will include an access token in the same format as the\nother grant types.")]),e._v(" "),a("h2",{attrs:{id:"making-authenticated-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#making-authenticated-requests"}},[e._v("#")]),e._v(" Making Authenticated Requests")]),e._v(" "),a("p",[e._v("The end result of all the grant types is obtaining an access token.")]),e._v(" "),a("p",[e._v("Now that you have an access token, you can make requests to the API.\nYou can quickly make an API request using cURL as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('curl -H "Authorization: Bearer RsT5OjbzRn430zqMLgV3Ia" \\\nhttps://api.authorization-server.com/1/me\n')])])]),a("p",[e._v("That's it! Make sure you always send requests over HTTPS and never\nignore invalid certificates. HTTPS is the only thing protecting\nrequests from being intercepted or modified.")]),e._v(" "),a("h2",{attrs:{id:"differences-from-oauth-1-0-differences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#differences-from-oauth-1-0-differences"}},[e._v("#")]),e._v(" Differences from OAuth 1.0 {#differences}")]),e._v(" "),a("p",[e._v('OAuth 1.0 was largely based on existing proprietary protocols such\nas Flickr\'s "FlickrAuth" and Google\'s "AuthSub". The result\nrepresented the best solution based on actual implementation\nexperience. However, after several years of working with the\nprotocol, the community learned enough to rethink and improve the\nprotocol in three main areas where OAuth 1.0 proved limited or\nconfusing.')]),e._v(" "),a("p",[e._v("You can read more about this in detail in my book "),a("a",{attrs:{href:"https://www.oauth.com/oauth2-servers/differences-between-oauth-1-2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAuth 2.0\nSimplified"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("ul",[a("li",[e._v("OAuth 2.0 Simplified - the book\n"),a("a",{attrs:{href:"https://oauth2simplified.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("oauth2simplified.com"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Learn more about "),a("a",{attrs:{href:"https://www.oauth.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("creating OAuth 2.0\nServers"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7636",target:"_blank",rel:"noopener noreferrer"}},[e._v("PKCE Extension"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://tools.ietf.org/html/draft-ietf-oauth-native-apps-07",target:"_blank",rel:"noopener noreferrer"}},[e._v("Recommendations for Native\nApps"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("More information is available on "),a("a",{attrs:{href:"https://oauth.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAuth.net"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Some content adapted from\n"),a("a",{attrs:{href:"http://hueniverse.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("hueniverse.com"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"about-the-author"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-the-author"}},[e._v("#")]),e._v(" About the Author")]),e._v(" "),a("p",[e._v("Aaron Parecki is the author of "),a("a",{attrs:{href:"https://oauth2simplified.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAuth 2.0\nSimplified"),a("OutboundLink")],1),e._v(", maintains\n"),a("a",{attrs:{href:"https://oauth.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("oauth.net"),a("OutboundLink")],1),e._v(", and is the editor of several W3C\nspecifications.")]),e._v(" "),a("p",[e._v("Want Aaron Parecki to come to your meetup and give a talk on OAuth?\n"),a("RouterLink",{attrs:{to:"/oauth/"}},[e._v("Request a presentation from Aaron")]),e._v(".")],1),e._v(" "),a("p",[e._v("#oauth #draft")])])}),[],!1,null,null,null);t.default=n.exports}}]);