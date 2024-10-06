const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

const images = [
    'images/Neural Network.jpg',
    'images/developer-working-on-code-free-vector.jpg',
    'images/data.jpg',
    'images/genAI.jpg',
    "images/OIP.jpg",
  ];
  let currentImageIndex = 0;
  const sliderImage = document.querySelector('.image #img');

  function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    sliderImage.src = images[currentImageIndex];
  }

  setInterval(changeImage, 2500);

function PageTransitions() {
    // Button click active class
    sectBtn.forEach((btn) => {
        btn.addEventListener('click', function() {
            document.querySelector('.active-btn')?.classList.remove('active-btn');
            this.classList.add('active-btn');
        });
    });

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove active class from all buttons and sections
            sectBtns.forEach((btn) => btn.classList.remove('active'));
            e.target.classList.add('active');
            sections.forEach((section) => section.classList.remove('active'));

            // Add active class to clicked button and corresponding section
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    // toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-theme');
    });
}

PageTransitions();