let previousExercise, disableButtonFunction;
let actual = 1;

const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');

const exercises =
{
    '1': document.getElementById('firstExercise'),
    '2': document.getElementById('secondExercise'),
    '3': document.getElementById('thirdExercise')
}

const disableButton =
{
    '1': () => { previousButton.setAttribute.disabled = true },
    '3': () => { nextButton.setAttribute.disabled = true }
}

const main = () =>
{
    previousButton.addEventListener( 'click', () =>
    {
        // Disable the button previous button if it's the first exercise.
        disableButtonFunction = disableButton[actual];
        disableButtonFunction();
        
        // Hide actual, point actual to the previous position and display it.
        exercises[actual].style.display = 'none';
        actual -= 1;
        exercises[actual].style.display = 'flex';
    });

    nextButton.addEventListener( 'click', () =>
    {
        // Disable the button previous button if it's the first exercise.
        disableButtonFunction = disableButton[actual];
        disableButtonFunction();
        
        // Hide actual, point actual to the next position and display it.
        exercises[actual].style.display = 'none';
        actual += 1;
        exercises[actual].style.display = 'flex';
    });
}