const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.controls');
const sectionButton = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransition () {
    // Changes the active class when a button is clicked
    for (let i = 0; i < sectionButton.length; i++) {
        sectionButton[i].addEventListener('click', function () {
            let currentButton = document.querySelectorAll('.active-btn');
            currentButton[0].className = currentButton[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // Change active section class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove selected from the other buttons
            sectionButtons.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            // Hide the other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

pageTransition();