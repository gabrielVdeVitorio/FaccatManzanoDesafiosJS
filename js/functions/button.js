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
    },
    'PageUp+Shift': (event) =>
    {
        event.preventDefault();
        changeExercise(1, previousButton);
    },
    'PageDown+Shift': (event) =>
    {
        event.preventDefault();
        changeExercise(-1, previousButton);
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
    { id: document.getElementById('exercicioExtra01'),      filePath: '../exerciciosExtras/exercicioExtra01.js'},
    { id: document.getElementById('exercicioExtra02'),      filePath: '../exerciciosExtras/exercicioExtra02.js'},
    { id: document.getElementById('exercicioExtra03'),      filePath: '../exerciciosExtras/exercicioExtra03.js'},
    { id: document.getElementById('exercicioExtra04'),      filePath: '../exerciciosExtras/exercicioExtra04.js'},
    { id: document.getElementById('exercicioExtra05'),      filePath: '../exerciciosExtras/exercicioExtra05.js'},
    { id: document.getElementById('faccat05'),              filePath: '../faccat/faccat05.js'},
    { id: document.getElementById('faccat06'),              filePath: '../faccat/faccat06.js'},
    { id: document.getElementById('faccat07'),              filePath: '../faccat/faccat07.js'},
    { id: document.getElementById('faccat08'),              filePath: '../faccat/faccat08.js'},
    { id: document.getElementById('faccat09'),              filePath: '../faccat/faccat09.js'},
    { id: document.getElementById('faccat10'),              filePath: '../faccat/faccat10.js'},
    { id: document.getElementById('faccat11'),              filePath: '../faccat/faccat11.js'},
    { id: document.getElementById('faccat12'),              filePath: '../faccat/faccat12.js'},
    { id: document.getElementById('faccat13'),              filePath: '../faccat/faccat13.js'},
    { id: document.getElementById('faccat14'),              filePath: '../faccat/faccat14.js'},
    { id: document.getElementById('faccat15'),              filePath: '../faccat/faccat15.js'},
    { id: document.getElementById('faccat16'),              filePath: '../faccat/faccat16.js'},
    { id: document.getElementById('faccat17'),              filePath: '../faccat/faccat17.js'},
    { id: document.getElementById('faccat18'),              filePath: '../faccat/faccat18.js'},
    { id: document.getElementById('faccat19'),              filePath: '../faccat/faccat19.js'},
    { id: document.getElementById('faccat20'),              filePath: '../faccat/faccat20.js'},
    { id: document.getElementById('faccat21'),              filePath: '../faccat/faccat21.js'},
    { id: document.getElementById('faccat22'),              filePath: '../faccat/faccat22.js'},
    { id: document.getElementById('faccat23'),              filePath: '../faccat/faccat23.js'},
    { id: document.getElementById('faccat24'),              filePath: '../faccat/faccat24.js'},
    { id: document.getElementById('faccat25'),              filePath: '../faccat/faccat25.js'},
    { id: document.getElementById('faccat26'),              filePath: '../faccat/faccat26.js'},
    { id: document.getElementById('faccat27'),              filePath: '../faccat/faccat27.js'},
    { id: document.getElementById('faccat28'),              filePath: '../faccat/faccat28.js'},
    { id: document.getElementById('faccat29'),              filePath: '../faccat/faccat29.js'},
    { id: document.getElementById('faccat30'),              filePath: '../faccat/faccat30.js'},
    { id: document.getElementById('faccat31'),              filePath: '../faccat/faccat31.js'},
    { id: document.getElementById('faccat32'),              filePath: '../faccat/faccat32.js'},
    { id: document.getElementById('faccat33'),              filePath: '../faccat/faccat33.js'},
    { id: document.getElementById('faccat34'),              filePath: '../faccat/faccat34.js'},
    { id: document.getElementById('faccat35'),              filePath: '../faccat/faccat35.js'},
    { id: document.getElementById('faccat36'),              filePath: '../faccat/faccat36.js'},
    { id: document.getElementById('faccat37'),              filePath: '../faccat/faccat37.js'},
    { id: document.getElementById('faccat38'),              filePath: '../faccat/faccat38.js'},
    { id: document.getElementById('faccat39'),              filePath: '../faccat/faccat39.js'},
    { id: document.getElementById('faccat21'),              filePath: '../faccat/faccat21.js', disableIf0: () => { previousButton.disabled = false; nextButton.disabled = true; } }
];
actual = exercises.length-3; //-------------------------------------------------------- 'ACTUAL' CONTROL

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

const changeExercise = (one, buttonToAble) =>
{
    // Hide actual, point actual to the next position and display it.
    hideContent(actual+one);
    
    // Import the next JS file.
    importNext();

    // Disable the button previous button if it's the first exercise.
    disableFunctionExecute();
    buttonToAble.disabled = false;
}



const main = () =>
{
    initialize();
    
    const activeKeys = new Set();
    document.addEventListener('keydown', (event) =>
    {
        activeKeys.add(event.key);
        const currentPressedKeys = Array.from(activeKeys)
            .sort()
            .join('+');
        console.log(`${currentPressedKeys}`);
        const execute = onKeydown[currentPressedKeys] || function(event) { console.warn(`The pressed key '${event.key}' has no function correpondent.`) };
        execute(event);
    });
    document.addEventListener('keyup', (event) =>
    {
        const currentPressedKeys = Array.from(activeKeys)
            .sort()
            .join('+');
        const execute = onKeyup[currentPressedKeys] || function(event) { console.warn(`The pressed key '${event.key}' has no function correpondent.`) };
        execute(event);
        activeKeys.delete(event.key);
    });

    previousButton.addEventListener('click', () =>
    {
        changeExercise(-1, nextButton);
    });

    restartButton.addEventListener('click', () =>
    {
        importNext();
    });

    nextButton.addEventListener('click', () =>
    {
        changeExercise(1, previousButton);
    });
}

main();