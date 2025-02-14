// Simple animation for slider
const slider = document.querySelector('.slider');
let scrollAmount = 0;

function slideScroll(amount) {
    slider.scrollBy({ left: amount, behavior: 'smooth' });
}

// Adding click event to each slide for future actions
const slides = document.querySelectorAll('.slide');
slides.forEach(slide => {
    slide.addEventListener('click', () => {
        alert('Play this movie!');
    });
});

