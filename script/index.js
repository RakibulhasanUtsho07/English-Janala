
const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data))
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
        <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson-${lesson.level_no}</button>
       `;
       //addend into container
       levelContainer.appendChild(divBtn);
    }
    
}
loadLesson()