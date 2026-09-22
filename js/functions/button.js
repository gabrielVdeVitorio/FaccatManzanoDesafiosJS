let previousExercise, disableButtonFunction;
let actual = 0;

const container = document.getElementById('main--container');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const restartButton = document.getElementById('restartButton');


const onKeydown =
{
    Insert: (event) =>
    {
        hideContent(event.target.value-1);
        importNext();
        disableFunctionExecute();
    },
    Shift: (event) =>
    {
        const whichShift =
        {
            1: () => {},
            2: () => { importNext(); }
        }
        whichShift[event.location]();
    }
}

const exercises =
[
    { id: document.getElementById('primeiroDesafio01'),     filePath: '../desafios/primeiroDesafio01.js', disableIf0: () => { previousButton.disabled = true; nextButton.disabled = false; } },
    { id: document.getElementById('primeiroDesafio02'),     filePath: '../desafios/primeiroDesafio02.js' },
    { id: document.getElementById('segundoDesafio'),        filePath: '../desafios/segundoDesafio.js' },
    { id: document.getElementById('terceiroDesafio01'),     filePath: '../desafios/terceiroDesafio01.js' },
    { id: document.getElementById('terceiroDesafio02'),     filePath: '../desafios/terceiroDesafio02.js' },
    { id: document.getElementById('terceiroDesafio03'),     filePath: '../desafios/terceiroDesafio03.js' },
    { id: document.getElementById('terceiroDesafio04'),     filePath: '../desafios/terceiroDesafio04.js' },
    { id: document.getElementById('terceiroDesafio05'),     filePath: '../desafios/terceiroDesafio05.js' },
    { id: document.getElementById('terceiroDesafio06'),     filePath: '../desafios/terceiroDesafio06.js' },
    { id: document.getElementById('terceiroDesafio07'),     filePath: '../desafios/terceiroDesafio07.js' },
    { id: document.getElementById('terceiroDesafio08'),     filePath: '../desafios/terceiroDesafio08.js' },
    { id: document.getElementById('terceiroDesafio09'),     filePath: '../desafios/terceiroDesafio09.js' },
    { id: document.getElementById('exerciciosExtras01'),    filePath: '../exerciciosExtras/exercicioExtra01.js'},
    { id: document.getElementById('exerciciosExtras02'),    filePath: '../exerciciosExtras/exercicioExtra02.js'},
    { id: document.getElementById('exerciciosExtras03'),    filePath: '../exerciciosExtras/exercicioExtra03.js'},
    { id: document.getElementById('exerciciosExtras03'),    filePath: '../exerciciosExtras/exercicioExtra04.js'},
    { id: document.getElementById('faccat15'),              filePath: '../faccat/faccat15.js', disableIf0: () => { previousButton.disabled = false; nextButton.disabled = true; } }
];

console.log(`${exercises.length}`);
actual = exercises.length-17;

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
        console.warn(`There's no disable function for actual '${actual}'`);
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
    initialize();
    container.addEventListener('keydown', (event) =>
    {
        onKeydown[event.key](event) || function() { console.warn(`The pressed key has no function correpondent: ${event.key}`) };
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
}

main();