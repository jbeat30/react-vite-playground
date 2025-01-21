export const initialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.className = savedTheme;
    return savedTheme;
  }
  return 'light'; // 기본 테마 설정
}