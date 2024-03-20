const modalBtn = document.querySelector('.mobile-open-btn');
let sidebar = document.querySelector('.mobile-menu');

modalBtn.addEventListener('click', () => {
    sidebar.classList.add('is-open');
}
)

const closeModalBtn = document.querySelector('.mobile-close-btn');

closeModalBtn.addEventListener('click', () => {
    sidebar.classList.remove('is-open');
}
)

const headerMenuBtn = document.querySelector('.toggle-menu');

headerMenuBtn.addEventListener('click', () => {
  const navMenu = document.querySelector('.menu-list');
  navMenu.classList.toggle('active');
}
);

const modalOrderBtn = document.querySelector('.mobile-order-btn')

modalOrderBtn.addEventListener('click', () => {
    sidebar.classList.remove('is-open');

}
)

const mobileMenuLinks = document.querySelectorAll('.mobile-menu-list-link')

for (const mobileLink of mobileMenuLinks) {
    mobileLink.addEventListener('click', () => {
        sidebar.classList.remove('is-open')
    })
}
