const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
const Skills = document.getElementById('Skills') as HTMLElement

toggleButton.addEventListener('click', ()=> {
    if(Skills.style.display === 'none') {
        Skills.style.display = 'block'
    } else {
        Skills.style.display = 'none'
    }
});


const togleBtn = document.getElementById('toggle-experience') as HTMLButtonElement
const experience = document.getElementById('work experience') as HTMLElement

togleBtn.addEventListener('click', ()=> {
     if(experience.style.display === 'none') {
        experience.style.display = 'block'
     } else {
        experience.style.display = 'none'
   }
});