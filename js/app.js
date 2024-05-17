document.addEventListener('DOMContentLoaded', function() {
  console.log('script loaded');
  const body = document.querySelector('body');
  const themeSelector = document.getElementById('theme-selector');
  themeSelector.addEventListener('change', changeTheme);
  function changeTheme() {
    let theme = themeSelector.value;
    if (theme === 'light') {
      body.style.backgroundColor = '#fff';
      body.style.color = '#000';
    } else if (theme === 'warm') {
      body.style.backgroundColor = 'linen';
      body.style.color = '#000';
    } else if (theme === 'dark') {
      body.style.backgroundColor = '#222';
      body.style.color = '#fff';
    } else if (theme === 'forest') {
      body.style.backgroundColor = 'forestgreen';
      body.style.color = '#fff';
    } else {
      return
    }
  }
}
);