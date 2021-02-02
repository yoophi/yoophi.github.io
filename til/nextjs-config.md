# Next.js Config

`process.env.XXXX` 의 값은 build 시에 문자열 값으로 바뀐다. `next start` 로 실행하더라도, build 시에 문자열로 변환되어있기 때문에 값은 변경되지 않는다.
그런 이유로 Docker Container 에서 사용하기는 어렵다.

page 들은 `getServerSideProps` 등을 사용하더라도, 환경변수를 사용한 부분들은 pre-render 되면서 문자열로 고정되어 html 로 빌드된다. 따라서 `process.env.XXXX` 값으로 치환하기가 곤란하다.

`pages/api/xxxx` 형식의 API Endpoint 들은 pre-render 되지 않으므로 `process.env.XXXX` 값을 사용하는건 가능. 
하지만, 이것 역시 build 시에 문자열로 변환되기 때문에, 환경변수를 수정하더라도 값은 변경되지 않는다.

여러모로, Docker Image + 환경변수 조합으로 처리하기 곤란하다!
