const loadLessons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then((res) => res.json()).then(data => displayLessons(data.data))
};



const createelements = (arr) => {

    const htmlElements = arr.map(item => `<span class="btn">${item}</span>`).join(' ');
    return htmlElements;
}

const loadWordDetail = async(id) => {
    const url = `https://openapi.programming-hero.com/api/word/${id}`;
    const res = await fetch(url);
    const details = await res.json();
    // Handle the word detail data
    displayWordDetails(details.data);
};


const manageSpinner = (status) => {
    if (status == true) {
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('word-container').classList.add('hidden');
    } else {
        document.getElementById('spinner').classList.add('hidden');
        document.getElementById('word-container').classList.remove('hidden');
    }

};
const displayWordDetails = (word) => {

    
const detailsBox = document.getElementById('details-container');

detailsBox.innerHTML = `<div class="">
        <h2 class="text-2xl font-bold">
          ${word.word} (<i class="fa-solid fa-microphone-lines" style="color: rgb(114, 73, 235);"></i> :${word.pronunciation})
        </h2>
      </div>
      <div class="">
        <h2 class="font-bold">
          Menaing
        </h2>
        <p class="">
          ${word.meaning}
        </p>
      </div>
      <div class="">
        <h2 class="font-bold">
          Example
        </h2>
        <p class="text-lg">
          ${word.sentence}
        </p>
      </div>
      <div class="">
        <h2 class="font-bold">
          Synonyms
        </h2>
      <div>${createelements(word.synonyms)}</div>
      </div>`


document.getElementById('word_modal').showModal();
}



const removeActiveClass = () => {
    const lessonBtns = document.querySelectorAll('.lesson-btn');
    lessonBtns.forEach(btn => btn.classList.remove('btn-active'));
};

const loadLevelWord = (id) => {

    manageSpinner(true);
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then((res) => res.json()).then((data) => {
            
            removeActiveClass();
            const clickBtn = document.getElementById(`lesson-${id}`);

            clickBtn.classList.add('btn-active');
            
            displayLevelWord(data.data)});

};


function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}

const displayLevelWord = (words) => {
    const WordContainer = document.getElementById('word-container');
    WordContainer.innerHTML = '';


    if (words.length === 0) {
        WordContainer.innerHTML = `
        <div class="font-bangla bg-white rounded-xl col-span-3 shadow-sm text-center py-10 px-5 space-y-4"> <img class="mx-auto" src="./assets/alert-error.png" alt="No words found">
        <p class="font-semibold text-lg text-gray-500">
        এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
        </p>
        <h2 class="font-bold text-2xl">নেক্সট Lesson এ যান</h2>
        </div>
        `;
        manageSpinner(false);
        return;
    }


    words.forEach(word => {

        const card = document.createElement('div');

        card.innerHTML = `
           <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
           <h2 class="font-bold text-2xl">${word.word ? word.word : "Sorry no word found"}</h2>
      <p class="font-semibold">Meaning / Pronunciation</p>      
      <div class = "text-2xl font-medium font-bangla">"${word.meaning ? word.meaning : "Sorry no meaning found"} / ${word.pronunciation ? word.pronunciation : "Sorry no pronunciation found"}"</div>
      

      <div class="flex justify-between items center"> 
      
        <button onclick="loadWordDetail(${word.id} )" class="btn btn-primary"><i class="fa-solid fa-circle-info" style="color: #ffffff;"></i></button>
        <button class="btn btn-primary" onclick="pronounceWord('${word.word}')"><i class="fa-solid fa-volume fa-xs" style="color: rgb(250, 250, 250);"></i></button>
      </div>

    </div>`;


        WordContainer.appendChild(card);
    });
manageSpinner(false);
};


const displayLessons = (lessons) => {


    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';

    for (const lesson of lessons) {


        const btnDiv = document.createElement('div');

        btnDiv.innerHTML = `<button id="lesson-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-soft btn-primary lesson-btn"><img src="./assets/fa-book-open.png" alt="Lesson Icon">Lesson-${lesson.level_no}</button>
        `;
        levelContainer.appendChild(btnDiv);
    }
};






loadLessons();