const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

// Open the sidebar
openBtn.addEventListener('click', () => {
sidebar.classList.add('active');
document.querySelector('.main-content').classList.add('active');
});

// Close the sidebar
closeBtn.addEventListener('click', () => {
sidebar.classList.remove('active');
document.querySelector('.main-content').classList.remove('active');
});