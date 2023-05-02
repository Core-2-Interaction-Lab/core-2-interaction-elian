// Dropdown menu functionality
const menu = document.querySelector('.menu');
const dropdown = document.querySelector('.dropdown');
const items = document.querySelectorAll('.item');

menu.addEventListener('mouseover', () => {
  dropdown.style.display = 'block';
});

menu.addEventListener('mouseout', () => {
  dropdown.style.display = 'none';
});

items.forEach(item => {
  item.addEventListener('click', () => {
    alert(`You clicked ${item.textContent}!`);
  });
});



window.addEventListener('scroll', function() {
    const backToStartBtn = document.querySelector('#back-to-start');
    if (window.pageYOffset > 20) {
      backToStartBtn.classList.add('show');
    } else {
      backToStartBtn.classList.remove('show');
    }
  });
  

