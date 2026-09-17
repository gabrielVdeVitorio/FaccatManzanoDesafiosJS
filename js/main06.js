let i = 0;
const form = document.getElementById('thirdExercise--form');
while(i < 21)
{
    const paragraph = document.createElement('p');
    paragraph.textContent = i+1 +'. JavaScript';
    console.log(20-i);
    form.appendChild(paragraph);
    i++;
}