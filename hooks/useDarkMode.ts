const className = 'dark-mode';

const toggleDarkMode = () => {
  const isDarkMode = document.body.classList.contains(className);
  isDarkMode
    ? document.body.classList.remove(className)
    : document.body.classList.add(className);
};

export default function useDarkMode() {
  return { toggleDarkMode };
}
