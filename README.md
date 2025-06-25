# Fast Community

간단한 커뮤니티 사이트 프로젝트입니다.

## 프로젝트 소개

이 프로젝트는 React와 Vite를 사용하여 개발된 커뮤니티 웹사이트입니다. 사용자들이 서로 소통하고 정보를 공유할 수 있는 플랫폼을 제공합니다.

## 기술 스택

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS (Tailwind CSS 준비 중)
- **Package Manager**: npm

## 시작하기

### 필수 요구사항

- Node.js (버전 16 이상)
- npm

### 설치 및 실행

1. 프로젝트 클론

```bash
git clone [repository-url]
cd fast-comunity
```

2. 의존성 설치

```bash
npm install
```

3. 개발 서버 실행

```bash
npm run dev
```

4. 브라우저에서 확인

```
http://localhost:5173
```

## 프로젝트 구조

```
fast-comunity/
├── public/          # 정적 파일
├── src/             # 소스 코드
│   ├── assets/      # 이미지, 아이콘 등
│   ├── components/  # React 컴포넌트
│   ├── App.jsx      # 메인 앱 컴포넌트
│   └── main.jsx     # 앱 진입점
├── package.json     # 프로젝트 설정
└── vite.config.js   # Vite 설정
```

## 주요 기능 (계획)

- [ ] 사용자 인증 (로그인/회원가입)
- [ ] 게시글 작성 및 조회
- [ ] 댓글 시스템
- [ ] 사용자 프로필
- [ ] 게시글 검색
- [ ] 카테고리별 분류

## 개발 명령어

```bash
npm run dev          # 개발 서버 실행
npm run build        # 프로덕션 빌드
npm run preview      # 빌드 결과 미리보기
npm run lint         # ESLint 실행
```

## 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 연락처

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.
