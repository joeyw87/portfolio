<p align="center">
  <h1 align="center">조영욱 — Web Developer Portfolio</h1>
  <p align="center">
    백엔드·프론트엔드 경험을 기반으로 더 나은 소프트웨어 구조를 고민하는 개발자의 포트폴리오입니다.<br/>
    GitHub Pages로 호스팅되며, 아래 링크에서 확인할 수 있습니다.
    <br/><br/>
    <a href="https://joeyw87.github.io/portfolio"><strong>🔗 https://joeyw87.github.io/portfolio</strong></a>
    <br/><br/>
    <img src="https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=HTML5"/>
    <img src="https://img.shields.io/badge/-CSS3-05122A?style=flat&logo=CSS3&logoColor=1572B6"/>
    <img src="https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript"/>
    <img src="https://img.shields.io/badge/-Bootstrap-05122A?style=flat&logo=bootstrap&logoColor=563D7C"/>
    <img src="https://img.shields.io/badge/-jQuery-05122A?style=flat&logo=jquery&logoColor=0769AD"/>
  </p>
</p>

---

## 📋 Overview

- **정적 사이트(Static Site)** — GitHub Pages를 통해 무료 호스팅
- **싱글 페이지** 기반 스크롤 포트폴리오 + 개별 블로그 포스트 페이지
- Colorlib 템플릿을 기반으로 개인 커스터마이징
- 빌드 도구 없이 순수 HTML / CSS / JS로 구성

---

## 🗂️ 프로젝트 구조

```
portfolio/
├── index.html          # 메인 포트폴리오 (About, Skills, Projects, Blog, Contact)
├── single.html         # 블로그 단일 포스트 예시 (템플릿)
├── blog/
│   ├── blog.css        # 블로그 포스트 공통 스타일
│   ├── sidebar.js      # 사이드바 공통 컴포넌트 (JS 동적 주입)
│   ├── blog1.html      # 블로그 포스트 1 — 소프트웨어 개발 방법론
│   └── blog2.html      # 블로그 포스트 2 — 요구사항 분석에 대해
├── css/                # Bootstrap, 애니메이션 등 공통 CSS
├── js/                 # jQuery, Bootstrap, 애니메이션 등 공통 JS
├── images/             # 프로필·프로젝트·배경 이미지
├── fonts/              # 아이콘 폰트 (Flaticon, Ionicons 등)
└── scss/               # SCSS 소스 (Bootstrap 커스터마이징)
```

---

## 🧩 주요 섹션

| 섹션 | 설명 |
|------|------|
| **Home** | 이름·직함·소개 히어로 영역 |
| **About** | 자기소개 및 기본 정보 |
| **Education** | 학력 사항 |
| **Skills** | 기술 스택 배지 + 원형/바 형태 숙련도 차트 |
| **Projects** | 실무 프로젝트 이력 (회사별 타임라인) |
| **Side Projects** | 사이드·개인 프로젝트 갤러리 |
| **My Blog** | 기술 블로그 포스트 목록 |
| **Contact** | 연락처 정보 |

---

## 🛠️ 기술 스택

**Languages** — Java, C#, ReactJS, JSP, JavaScript(ES6), TypeScript, Node.js, jQuery, HTML, CSS

**Frameworks** — Spring Boot, Spring Framework, eGovFramework, Next.js

**Database** — MySQL, MariaDB, MSSQL, Oracle, Redis, SQLite

**ETC** — Git / GitLab, Jira, Wiki, Svn, Linux, Tomcat, Docker, Nginx, MyBatis

---

## 📝 블로그 포스트 추가 방법

1. `blog/` 폴더에 `blog3.html` 생성 (기존 `blog1.html` 구조 참고)
2. `blog/sidebar.js`의 `recentPosts` 배열에 새 포스트 정보 추가
3. `index.html`의 My Blog 섹션에 새 카드 추가

---

## 📦 배포

```bash
git add .
git commit -m "커밋 메시지"
git push origin main
```

GitHub Pages 설정: **Settings → Pages → Source: main branch**

배포 URL: `https://joeyw87.github.io/portfolio`

---

## 🙏 Credits

- 템플릿 기반: [Colorlib](https://colorlib.com) (CC BY 3.0 — 제작자 표기 필수)
- Bootstrap 4, jQuery, AOS, Owl Carousel 등 오픈소스 라이브러리 활용
