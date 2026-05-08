# Design Don'ts

## 인라인 스타일 금지

컴포넌트에 인라인 스타일을 직접 작성하지 않는다.

```tsx
// ❌ 하지 말 것
<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }} />

// ✅ 대신 styled-components 사용
const Container = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
```

레이아웃, 간격, 색상 등 모든 스타일은 styled-components로 작성한다.
