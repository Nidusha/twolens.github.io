const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');
        portfolioItems.forEach(item => {
            if(category === 'all' || item.classList.contains(category)){
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
