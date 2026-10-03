/**
 * 
 * @param {HTMLElement} htmlElement 
 * @param {string} htmlElementId 
 * @param {string[]} htmlElementClasses 
 * @returns {[htmlElement.id, htmlElement.classList]}
 */

const setIdAndClasses = (htmlElement, htmlElementId, htmlElementClasses) =>
{
    htmlElement.id = htmlElementId;
    for (let i = 0; i < htmlElementClasses.length; i++)
    {
        htmlElement.classList.add(htmlElementClasses[i]);
    }
    return [htmlElement.id, htmlElement.classList];
}

export default setIdAndClasses;