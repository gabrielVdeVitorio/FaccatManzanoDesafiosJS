import setIdAndClasses from './setIdAndClasses.js';

/**
 * 
 * @param {string[] | number[]} trContents - Table row which encloses the HTML elements will be stored (th or td).
 * @param {string} trElements - Name of the HTML element you will store inside the tr ('th' or 'td');
 */

const createAndFillTr = (htmlFatherElement, trContents, trElements) =>
{
    const tr = document.createElement('tr');
    htmlFatherElement.appendChild(tr);
    for (const tdValue of trContents)
    {
        const td = document.createElement(trElements);
        td.textContent = tdValue;
        tr.appendChild(td);
    }
}

const createAndFillTableBlocks =
{
    0: (htmlElement, matrix, debugMessage = "non-informed") => { console.warn(`Failed to execute '${debugMessage}' matrix ${matrix} due it hasn't no enough length (1) to create a block inside ${htmlElement}.`) },
    1: (table, thead) =>
    {
        const theadElement = document.createElement('thead');
        table.appendChild(theadElement);
        thead.forEach((trContents) =>
        {
            createAndFillTr(theadElement, trContents, 'th');
        });
    },

    2: (table, tbody) =>
    {
        const tbodyElement = document.createElement('tbody');
        table.appendChild(tbodyElement);
        tbody.forEach((trContents) =>
        {
            createAndFillTr(tbodyElement, trContents, 'td');
        });
    },

    3: (table, tfoot) =>
    {
        const tfootElement = document.createElement('tfoot');
        table.appendChild(tfootElement);
        tfoot.forEach((trContents) =>
        {
            createAndFillTr(tfootElement, trContents, 'td');
        });
    }
}
/**
 * 
 * @param {HTMLElement} divBlock - HTML father block element will enclose the table.
 * @param {number[][] | string[][]} thead - Thead contents, in format of matrix (multidimensional array) – each index is a tr and its contents are th.
 * @param {number[][] | string[][]} tbody - Tbody contents, in format of matrix (multidimensional array) – each index is a tr and its contents are td.
 * @param {string} tableId - The id you want to set to your table. Will return Date.now() if it's not set.
 * @param {string[]} tableClasses - The array of classes you want to set to your table. 'function-generated-table' is automatically set if it's not set in parameters.
 * @param {number[][] | string[][]} tfoot - Tfoot contents, in format of matrix (multidimensional array) – each index is a tr and its contents are td.
 * @returns {string}
 */

const createTable = (divBlock, thead, tbody, tableId=`my-table-${Date.now()}`, tableClasses=['function-generated-table'], tfoot = [] ) =>
{
    const table = document.createElement('table');
    divBlock.appendChild(table);

    setIdAndClasses(table, tableId, tableClasses);

    createAndFillTableBlocks[(+!!thead.length)](table, thead, 'thead');
    createAndFillTableBlocks[(+!!tbody.length)*2](table, tbody, 'tbody');
    createAndFillTableBlocks[(+!!tfoot.length)*3](table, tfoot, 'tfoot');

    return table.id;
}

export default createTable;