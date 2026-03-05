
const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data))
}

// create words card dynamically
const loadLevelWord = (id) => {
    const url =`https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then((res) => res.json())
    .then((json) => wardCards(json.data))

}
// {"id":6,"level":5,"word":"Fascinate","meaning":"মুগ্ধ করা","pronunciation":"ফ্যাসিনেট"},
const vocabCards = document.getElementById("ward-cards");
const wardCards = (words) =>{

    vocabCards.innerHTML = "";
    const emptyLesson = document.getElementById("empty-lesson")
    emptyLesson.classList.add("hidden")
    if(words.length == 0){
        vocabCards.innerHTML =`
        <div class="empty-lesson w-[1200px] bg-gray-100 mx-auto text-center p-15 rounded-xl mt-6 ">
                <img src="./assets/alert-error.png" alt="" class="mx-auto">
                <p class="font-bangla text-[14px] leading-[24px] text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <p class="font-bangla text-[24px] leading-[40px] font-medium">নেক্সট Lesson এ যান</p>
            </div>
        `
        return;
    }
    for(const word of words){
        
      let cardDiv =  document.createElement("div")
      cardDiv.innerHTML =`
      <div class="bg-white text-center space-y-3 p-3 py-6 m-4 rounded min-h-[310px] flex flex-col justify-center shadow-md">
                    <div class="flex flex-col justify-center flex-grow space-y-3">
                        <p class="font-bold text-[32px] ">${word.word ? word.word : "not found"}</p>
                        <p class="text-[20px] leading-[24px] font-medium">meaning/pronunciation</p>
                        <p class="font-bangla text-[32px] font-semibold text-[#18181B]">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "pronunciation not found"}"</p>
                    </div>
                    <div class="flex justify-between mx-4 items-end ">
                        <span class="cursor-pointer"><i class="fa-solid fa-circle-info"></i></span>
                        <span class="cursor-pointer"><i class="fa-solid fa-volume-high"></i></span>
                    </div>
                </div>
      `
      vocabCards.append(cardDiv);
    }

}

const displayLesson = (lessons) => {
    
    // get the container & empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    // get into every lessons
    for(const lesson of lessons){
        //create Element
       const divBtn = document.createElement("div");
       divBtn.innerHTML = `
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson-${lesson.level_no}</button>
       `;
       //addend into container
       levelContainer.appendChild(divBtn);
    }
    
}
loadLesson()