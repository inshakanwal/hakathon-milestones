var toggleButton = document.getElementById('toggle-skills');
var Skills = document.getElementById('Skills');
toggleButton.addEventListener('click', function () {
    if (Skills.style.display === 'none') {
        Skills.style.display = 'block';
    }
    else {
        Skills.style.display = 'none';
    }
});
var togleBtn = document.getElementById('toggle-experience');
var experience = document.getElementById('work experience');
togleBtn.addEventListener('click', function () {
    if (experience.style.display === 'none') {
        experience.style.display = 'block';
    }
    else {
        experience.style.display = 'none';
    }
});
