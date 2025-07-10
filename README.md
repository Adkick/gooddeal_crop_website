# 굿딜파트너 (GoodDeal Partners) 홈페이지

> 한국을 넘어 민간 KOTRA를 꿈꾸는 글로벌 광고 업계의 해답

## 🌏 프로젝트 소개

굿딜파트너는 마케팅 전문 법인으로, 한국 기업의 해외 진출을 위한 인플루언서 마케팅 및 AI 기반 광고 솔루션을 제공합니다.

### 🎯 주요 서비스
- **AddKick**: 광고 대행사 매칭 플랫폼 (민간 KOTRA 역할)
- **Renpick**: 가전 렌탈 종합 몰


## 🚀 기술 스택

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Form**: React Hook Form
- **UI Components**: Headless UI
- **Build Tool**: Vite
- **Deployment**: Netlify

## 📁 프로젝트 구조

```
gooddeal_v1.0/
├── public/
│   ├── _redirects
│   ├── addkick-logo.png
│   ├── aty.png
│   ├── background-building.jpg
│   ├── cj.png
│   ├── favicon.svg
│   ├── gooddeal_logo.png
│   ├── gooddeal-logo-footer.png
│   ├── jws.png
│   ├── oej.png
│   ├── renpick-logo.png
│   └── 전남교육또박체-EB.otf
├── src/
│   ├── App.tsx
│   ├── components/
│   │   └── common/
│   │       ├── Footer.tsx
│   │       ├── Header.tsx
│   │       └── PageTransition.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Partners.tsx
│   │   ├── Services.tsx
│   │   └── Team.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🛠️ 개발 환경 설정

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

### 3. 빌드

```bash
npm run build
```

### 4. 미리보기

```bash
npm run preview
```

### 5. 린트 검사

```bash
npm run lint
```

## 📱 주요 기능

### 🏠 홈페이지 (Home.tsx)
- 실시간 성과 피드 시스템
- 주요 성과 지표 대시보드
- CTA 버튼을 통한 상담 신청

### 💼 회사소개 (About.tsx)
- 회사 비전 및 핵심 가치
- 차별화 요소 및 솔루션 특징

### 🎯 사업영역 (Services.tsx)
- AddKick 광고 대행사 매칭 플랫폼 소개
- Renpick 가전 렌탈 종합 몰 소개
- 기술 스택 및 역량

### 📊 성과사례 (CaseStudies.tsx)
- 국가별 성공 사례
- 필터링 및 검색 기능
- ROI 및 성과 지표

### 👥 대표소개 (Team.tsx)
- 경영진 프로필
- 팀 구성 및 전문성

### 🤝 파트너 (Partners.tsx)
- 협력사 및 파트너 네트워크
- 협력 분야 및 성과

### 📞 문의하기 (Contact.tsx)
- 상담 신청 양식
- 연락처 정보
- 위치 정보

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: #1e40af (딥 블루)
- **Secondary**: #3b82f6 (브라이트 블루)
- **Accent**: #10b981 (그린)
- **Background**: #f8fafc (라이트 그레이)

### 타이포그래피
- **Primary**: Noto Sans KR
- **Heading**: Pretendard
- **Brand**: 전남교육또박체-EB
- **Code**: JetBrains Mono

## 📊 성과 지표

### AddKick (광고 대행사 매칭)
- 매칭 성공률: **98%**
- 평균 매칭 시간: **30초**
- 중개비 절감: **90%**
- 해외 진출 지원: **5개국**

### Renpick (가전 렌탈)
- 고객 만족도: **95%**
- 평균 비용 절감: **70%**
- 등록 제품 수: **1,000+**
- 렌탈 성공률: **85%**

### 전체 서비스
- 누적 사용자: **10,000+**
- 성공 프로젝트: **100+**
- 파트너사: **50+**

## 🌐 배포

### Netlify 배포
1. GitHub 저장소 연결
2. Build 명령어: `npm run build`
3. Publish 디렉토리: `dist`
4. 도메인: `www.gooddealpartners.com`

### 배포 설정
- **Netlify 리디렉션**: `public/_redirects` 파일 설정 완료
- **빌드 최적화**: TypeScript 컴파일 + Vite 빌드
- **정적 에셋**: 이미지, 폰트, 로고 파일 포함

## 📦 주요 의존성

### 프로덕션 의존성
- **React**: ^18.2.0
- **React DOM**: ^18.2.0
- **React Router DOM**: ^6.15.0
- **React Hook Form**: ^7.45.4
- **Framer Motion**: ^10.16.4
- **Lucide React**: ^0.279.0
- **Headless UI**: ^1.7.17

### 개발 의존성
- **TypeScript**: ^5.0.2
- **Vite**: ^4.4.5
- **Tailwind CSS**: ^3.3.3
- **ESLint**: ^8.45.0
- **PostCSS**: ^8.4.29
- **Autoprefixer**: ^10.4.15

## 📝 커밋 규칙

### 커밋 메시지 형식
```
타입: 간략한 설명 (50자 이내)
```

### 타입 분류
- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **docs**: 문서 수정
- **style**: 코드 스타일 변경 (기능 변경 없음)
- **refactor**: 코드 리팩토링
- **test**: 테스트 코드 추가/수정
- **chore**: 빌드, 설정 파일 수정

### 커밋 예시
```bash
feat: 메인 페이지 Hero 섹션 추가
fix: 모바일 네비게이션 메뉴 오류 수정
docs: README 설치 가이드 업데이트
style: Tailwind CSS 클래스 정리
refactor: 공통 컴포넌트 Header 구조 개선
test: Contact 폼 유효성 검사 테스트 추가
chore: Vite 설정 파일 업데이트
```

### 커밋 작성 규칙
- **한 줄로 간략하게**: 50자 이내로 작성
- **현재형 동사 사용**: "추가함" → "추가"
- **첫 글자 소문자**: 타입 다음 설명은 소문자로 시작
- **마침표 생략**: 문장 끝에 마침표 사용하지 않음

## 📞 연락처

- **이메일**: sqdhs@naver.com
- **전화**: 0504-080-4769
- **주소**: 경남 창원시 의창구 자룡로 48번길, 44

## 📄 라이선스

MIT License

---

© 2024 GoodDeal Partners. All rights reserved. 