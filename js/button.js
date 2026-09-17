let previousExercise, disableButtonFunction;
let actual = 0;

const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const searchExerciseInput = document.getElementById('div__div--actual-exercise');

const exercises =
[
    { id: document.getElementById('firstExercise'), filePath: './main04.js' },
    { id: document.getElementById('secondExercise'), filePath: './main05.js' },
    { id: document.getElementById('thirdExercise'), filePath: './main06.js' }
];

const disableButton =
{
    '0': () => { previousButton.disabled = true; nextButton.disabled = false; },
    '2': () => { nextButton.disabled = true; previousButton.disabled = false; }
}

const importNext = async () =>
{
    try
    {
        filePath = exercises[actual].filePath;
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

const hideContent = (n) =>
{
    // Hide actual, point actual to the previous position and display it.
    if (exercises[n])
    {
        exercises[actual].id.style.display = 'none';
        actual = n;
        exercises[actual].id.style.display = 'flex';
    }
}

const main = () =>
{
    initialize();
    importNext();

    searchExerciseInput.addEventListener('input', (event) =>
    {
        hideContent(event.target.value-1);
        importNext();
        disableFunctionExecute();
    });

    previousButton.addEventListener('click', () =>
    {
        // Hide actual, point actual to the previous position and display it.
        hideContent(actual-1);

        // Import the next JS file.
        importNext();
        
        // Disable the button previous button if it's the first exercise and able 'next' button.
        disableFunctionExecute();
        nextButton.disabled = false;
    });

    nextButton.addEventListener('click', () =>
    {
        // Hide actual, point actual to the next position and display it.
        hideContent(actual+1);
        
        // Import the next JS file.
        importNext();

        // Disable the button previous button if it's the first exercise.
        disableFunctionExecute();
        previousButton.disabled = false;
    });
}

main();