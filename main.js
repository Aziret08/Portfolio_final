 // --- Smooth scroll ---
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', e => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    // закрытие меню после клика
                    burger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        });

        // --- Portfolio filter buttons ---
        const filterButtons = document.querySelectorAll('.portfolio-filters button');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
         const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');

    // Меняем иконку кнопки
    if (body.classList.contains('dark')) {
      toggleBtn.textContent = '☀️';
    } else {
      toggleBtn.textContent = '🌙';
    }
  });
  // Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  // Показывать кнопку, если пользователь прокрутил вниз более чем на 400px
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// --- Burger Menu ---
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

// Открытие/закрытие меню
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Закрытие меню при клике на пункт (только в адаптиве)
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      burger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});