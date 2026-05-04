# geeks-fe
🏠 기숙사 룸메이트 매칭 플랫폼 🏠

## Tech Stack

- React
- TypeScript
- Vite
- ESLint
- Feature-Sliced Design

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: 개발 서버 실행
- `npm run build`: TypeScript 검사 및 프로덕션 빌드
- `npm run preview`: 빌드 결과 미리보기
- `npm run lint`: ESLint 검사

## Project Structure

```txt
src/
  app/       # 앱 엔트리, 전역 스타일, 전역 프로바이더
  pages/     # 라우트 단위 페이지
  widgets/   # 페이지를 구성하는 독립적인 UI 블록
  features/  # 사용자 액션 중심 기능
  entities/  # 도메인 모델
  shared/    # 공용 API, UI, lib, config
```

각 slice는 필요할 때 `ui`, `model`, `api`, `lib` 같은 segment를 둘 수 있습니다.
