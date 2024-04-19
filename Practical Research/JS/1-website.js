const sidebarIcon = document.querySelector('.js-sidebar-icon');
const sidebar = document.querySelector('.js-sidebar');
const header = document.querySelector('header');
const removeIcon = document.querySelector('.js-remove-icon');
const home = document.querySelector('.js-home');
const learningGuide = document.querySelector('.js-learning-guide');
const videos = document.querySelector('.js-videos');


sidebarIcon.addEventListener('click', () => {
  openSidebar();
});

removeIcon.addEventListener('click', () => {
  removeSidebar();
});


function openSidebar () {
  header.classList.add('no-header');
  sidebar.classList.add('new-sidebar');
  removeIcon.classList.add('remove-icon');

  removeIcon.innerHTML = 'X';
  home.innerHTML = 'Home';
  learningGuide.innerHTML = 'Learning Guide';
  videos.innerHTML = 'Videos';
}


function removeSidebar () {
  header.classList.remove('no-header');
  sidebar.classList.remove('new-sidebar');
  removeIcon.classList.remove('remove-icon');

  removeIcon.innerHTML = '';
  home.innerHTML = '';
  learningGuide.innerHTML = '';
  videos.innerHTML = '';
}