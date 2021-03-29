# osx 에서 sed 를 이용해 파일의 문자열 치환하여 저장하기

    sed -i s/search/replace/g filename.txt
     
위 명령이 정상 동작하지 않는 경우

    sed -i "" s/search/replace/g filename.txt
    
위 명령처럼 입력하면 된다.

물론 


    brew install gnu-sed
    gsed -i s/search/replace/g filename.txt
    
위 방식처럼 gnu sed 를 사용하는 것도 좋다.