const header = document.querySelector('header');
const sidebarIcon = document.querySelector('.js-sidebar-icon');
const sidebar = document.querySelector('.js-sidebar');
const removeIcon = document.querySelector('.js-remove-icon');
const home = document.querySelector('.js-home');
const learningGuide = document.querySelector('.js-learning-guide');
const videos = document.querySelector('.js-videos');

sidebarIcon.addEventListener('click', () => {
  openSidebar();
})

removeIcon.addEventListener('click', () => {
  closeSidebar();
})

function openSidebar () {
  header.classList.add('mobile-no-header');
  sidebar.classList.add('mobile-sidebar');

  removeIcon.innerHTML = 'X';
  home.innerHTML = 'Home';
  learningGuide.innerHTML = 'Learning Guide';
  videos.innerHTML = 'Videos';
}

function closeSidebar () {
  header.classList.remove('mobile-no-header');
  sidebar.classList.remove('mobile-sidebar');

  removeIcon.innerHTML = '';
  home.innerHTML = '';
  learningGuide.innerHTML = '';
  videos.innerHTML = '';
}