# server

❄ 이 동 근 박 현 지 ❄

---

## 프로젝트 폴더링

```
📂 functions
  📂 api
    📂 routes
      📂 myLikePost
        📜 index.js
        📜 likePOST.js
        📜 myLikePostGET.js
      📂 post
        📜 index.js
        📜 postGET.js
        📜 postPOST.js
      📜 index.js
    📜 index.js
  📂 config
    📜 dbConfig.js
  📂 constants
    📜 responseMessage.js
    📜 statusCode.js
  📂 db
    📜 db.js
    📜 index.js
    📜 myLikePost.js
    📜 post.js
    📜 user.js
  📂 lib
    📜 convertSnakeToCamel.js
    📜 util.js
  📂 node_modules
  📜 index.js
  📜 .env
  📜 .eslintrc.js
  📜 .gitignore
  📜 .prettierrc.js
  📜 package-lock.json
  📜 package.json
📦 .firebaserc
📦 .gitignore
📦 firebase.json
📦 README.md
```

---

## git

### git branch

- api 별로 브랜치 만들어서 완성 → `dev` 브랜치에 pull request → `dev` 브랜치에서 `main`으로 pull request 보내기
- merge 할 때는 상대방의 코드리뷰를 받고 하기

### git commit message 컨벤션

```
{type}: {message}

[예시]
add: 프로젝트 생성 API 추가
```

- ✅ [CHORE] : 코드 수정, 내부 파일 수정
- 🍱 [ADD] : 새로운 파일 추가
- ♻️ [REFACTOR] : 전면 수정이 있을 때 사용합니다
- 🔨 [FIX] : 버그, 오류 해결
- ⚰️ [DEL] : 쓸모없는 코드 삭제
- 📝 [DOCS] : README나 WIKI 등의 문서 개정
- 🚚 [MOVE] : 프로젝트 내 파일이나 코드의 이동
- ⏪️ [RENAME] : 파일 이름 변경이 있을 때 사용합니다.
- 🔀 [MERGE]: 다른브렌치를 merge 할 때 사용합니다.

---

## 코드 컨벤션

- prettierrc 파일 같이 써서 형태 통일하기
- 카멜케이스 사용
- 비구조화 할당
- 화살표 함수

---

## API 문서

```
1. 파트원 한 명 당 최소 2개의 endpoint
2. 최소 한 개의 GET과 최소 한 개의 POST
3. 각각의 endpoint에 예상되는 request / response 형식
```

[🚀 Notion API 문서](https://geeneve.notion.site/API-644dc98988414a5abb577bb8dc71ad03)
