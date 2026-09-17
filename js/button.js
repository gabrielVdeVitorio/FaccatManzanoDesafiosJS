let previousExercise, disableButtonFunction;
let actual = 0;

const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const exercises =
[
    { id: document.getElementById('firstExercise'), filePath: './main04.js' },
    { id: document.getElementById('secondExercise'), filePath: './main05.js' },
    { id: document.getElementById('thirdExercise'), filePath: './main06.js' }
];

const disableButton =
{
    '0': () => { previousButton.disabled = true; },
    '2': () => { nextButton.disabled = true; }
}

const importNext = async () =>
{
    filePath = exercises[actual].filePath;
    try
    {
        const module = await import(filePath);
        module.execute();
    }
    catch (error)
    {
        console.error(`Failed to load file Path: '${filePath}'`);
    }
}

const disableFunctionExecute = () =>
{
    disableButtonFunction = disableButton[actual];
    console.log(disableButtonFunction);
    if (!disableButtonFunction)
    {
        console.error(`There's no disable function for actual '${actual}'`);
        return;
    }
    disableButtonFunction();
}

const initialize = () =>
{
    exercises[actual].id.style.display = 'flex';
    disableFunctionExecute();
}
const main = () =>
{
    initialize();
    importNext();

    previousButton.addEventListener('click', () =>
    {
        // Hide actual, point actual to the previous position and display it.
        exercises[actual].id.style.display = 'none';
        actual -= 1;
        exercises[actual].id.style.display = 'flex';

        // Import the next JS file.
        importNext();
        
        // Disable the button previous button if it's the first exercise and able 'next' button.
        disableFunctionExecute();
        nextButton.disabled = false;
    });

    nextButton.addEventListener('click', () =>
    {
        // Hide actual, point actual to the next position and display it.
        exercises[actual].id.style.display = 'none';
        actual += 1;
        exercises[actual].id.style.display = 'flex';
        
        // Import the next JS file.
        importNext();

        // Disable the button previous button if it's the first exercise.
        disableButtonFunction = disableButton[actual];
        disableFunctionExecute();
        previousButton.disabled = false;
    });
}

main();