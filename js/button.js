let previousExercise, disableButtonFunction;
let actual = 0;

const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const restartButton = document.getElementById('restartButton');
const searchExerciseInput = document.getElementById('div__input--actual-exercise');

const exercises =
[
    { id: document.getElementById('firstExercise'),     filePath: './main04.js', disableIf0: () => { console.log('Executing first  disableIf0 function'); previousButton.disabled = true; nextButton.disabled = false; } },
    { id: document.getElementById('secondExercise'),    filePath: './main05.js' },
    { id: document.getElementById('thirdExercise'),     filePath: './main06.js' },
    { id: document.getElementById('fourthExercise'),    filePath: './main07.js' },
    { id: document.getElementById('fifthExercise'),     filePath: './main08.js', disableIf0: () => { console.log('Executing last disableIf0 function'); previousButton.disabled = false; nextButton.disabled = true; } }
];

// Import the next JS file.
const importNext = async () =>
{
    try
    {
        const filePath = exercises[actual].filePath;
        const uniquePath = `${filePath}?cache=${Date.now()}`;
        const module = await import(uniquePath);
        module.execute();
    }
    catch (error)
    {
        console.error(`Failed to load file Path: '${filePath}'`, error);
    }
}

// Disable the button previous button if it's the first exercise (or the next button if it's the last exercise) and able 'next' button.
const disableFunctionExecute = () =>
{
    disableButtonFunction = exercises[actual].disableIf0 || function() {nextButton.disabled = false; previousButton.disabled = false; };
    if (!disableButtonFunction)
    {
        console.error(`There's no disable function for actual '${actual}'`);
        return;
    }
    disableButtonFunction();
}

// Handles the first execution, when page loads.
const initialize = () =>
{
    exercises[actual].id.style.display = 'flex';
    disableFunctionExecute();
    importNext();
}

// Hide actual, point actual to the previous position and display it.
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
    const onKeydown =
        {
            Insert: () =>
            {
                hideContent(event.target.value-1);
                importNext();
                disableFunctionExecute();
            },
            Shift: (location) => {}
        }
    initialize();
    document.addEventListener('keydown', (event) =>
    {
        onKeydown[event.key](event.location) || function() { console.error(`The pressed key has no function correpondent: ${event.key}`) };
    });

    previousButton.addEventListener('click', () =>
    {
        hideContent(actual-1);
        importNext();
        disableFunctionExecute();
        nextButton.disabled = false;
    });

    restartButton.addEventListener('click', () =>
    {
        importNext();
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

    document.addEventListener('keydown', () =>
    {

    });
}

main();