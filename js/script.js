const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

const articles = document.querySelectorAll('.background-image article');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentPage = 1;
const articlesPerPage = 6;

function showPage(page) {
  articles.forEach((article, index) => {
    if (index >= (page - 1) * articlesPerPage && index < page * articlesPerPage) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
}

showPage(currentPage);

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < Math.ceil(articles.length / articlesPerPage)) {
    currentPage++;
    showPage(currentPage);
  }
});
