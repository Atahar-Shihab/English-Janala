const loadLessons = () => {fetch('https://openapi.programming-hero.com/api/levels/all')
    .then((res) => res.json()).then(data => displayLessons(data.data))
};



const displayLessons = (lessons) => {


    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';

    for (const lesson of lessons) {


        const btnDiv = document.createElement('div');

        btnDiv.innerHTML = `<button class="btn btn-soft btn-primary"><img src="./assets/fa-book-open.png" alt="Lesson Icon">Lesson-${lesson.level_no}</button>
        `;
        levelContainer.appendChild(btnDiv);
    }
};






loadLessons();