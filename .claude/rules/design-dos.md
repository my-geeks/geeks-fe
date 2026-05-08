# Design Do's

## 색상은 반드시 theme 사용

모든 색상은 하드코딩하지 않고 theme을 통해 참조한다.

```tsx
// ❌ 하지 말 것
color: '#ff0000';
background-color: '#fff';

// ✅ 이렇게 할 것
color: ${({ theme }) => theme.colors.primary};
background-color: ${({ theme }) => theme.colors.background};
```

## 타이포그래피도 반드시 theme 사용

폰트 크기, 굵기, 줄 간격 등 타이포그래피 관련 값도 theme을 통해 참조한다.

```tsx
// ❌ 하지 말 것
font-size: 16px;
font-weight: 700;

// ✅ 이렇게 할 것
font-size: ${({ theme }) => theme.typography.body.fontSize};
font-weight: ${({ theme }) => theme.typography.heading.fontWeight};
```
