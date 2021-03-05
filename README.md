# MiniSchool Test

### 'npm install'

set up the library before starting application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Summary Github

1. Mockup1.png

   > 1. 검색란과 entity를 선택할 수 있어야한다.
   > 2. 검색란은 화면 중앙에 위치한다.(수직방향으로)
   > 3. 검색란에 아무 입력값이 없거나 기존에 입력값을 지웠을 때, 검색란은 화면 중앙에 위치한다.

2. Mockup2.png

   > 1. 검색을 했을 때, 한번만 검색이 되어야하고 redux persist를 이용해서 cache storage를 이용한다.
   > 2. Add dedound(feel free import from lodash)로 3글자 이상 입력 되었을 때, api call을 한다.
   > 3. 검색란에 3글자 이상이고, select를 변경되면 re-rendering 한다.
   > 4. 검색란을 지우면 빈화면 출력 => 즉시 반응
   > 5. 결과값을 더 보기위해 스크롤을 내려서 볼 수 있어야 한다.

3. Mockup3.png
   > 1. 각 검색은 유저의 상세정보를 보여준다(레포이름, 저자, 별수 등등)
   > 2. 프로파일 사진, 이름, 위치 등등을 링크를 걸어 둔다.
   > 3. 반응형 앱을 만든다(max-width: 768px 이면 2줄로 보여준다.)
