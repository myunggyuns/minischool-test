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

### Test problems - first review

> 1.  검색어를 입력하고, scroll down으로 추가적인 데이터를 얻고 난 후, 새로고침 하면 render 과정에서 문제 발생.
>     > > render 과정에서 map 함수를 사용하는데, 이 때 사용하는 key 값이 중복되는 현상.
>     > > 새로고침(F5)를 하는 과정에서 persist storage에 있는 데이터와 render하는 과정에서 useEffect에는 초기 side effect로 인해서 data가 중복되는 현상
>     > > 새로고침을 분기를 하고, persist storage 데이터만 사용하는 코드가 필요한 것으로 생각됨.

> 2.  검색란에 검색어를 입력고, scroll down을 하고, 추가적인 검색어를 입력하면 기존데이터에 추가가 된다. > > 예를 들어서 123을 검색을 하고, scroll down으로 2번째 페이지 데이터를 얻은 후 input란에 있는 123에서 1234를 입력하면 기존의 데이터에 추가가 된다.(123에서 30개 데이터를 받고 scroll down으로 2번째 데이터를 얻어 데이터가 60개가 되고 1234로 데이터를 얻으면 90개 데이터가 된다.)
>     > > re-render에 대한 분기를 해주는 코드가 필요한 것으로 생각됨.

### Test problems - second review

> 1.  검색어를 입력하고, scroll down으로 지속적으로 추가 데이터를 받을 때, key값이 중복되는 현상 있음.
>     > > 이전에 있던 데이터와 새로 들어온 repo의 id값이 중복되는 현상이 있음.
>     > > 추가로 데이터를 받아오는 과정에서 필터가 필요한 것으로 판단됨.
