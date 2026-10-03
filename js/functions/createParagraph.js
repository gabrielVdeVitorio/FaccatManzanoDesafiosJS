import setIdAndClasses from "./setIdAndClasses.js";

/**
 * 
 * @param {HTMLElement} fatherElementId 
 * @param {string | number} paragraphContent 
 * @param {string} id 
 * @param {string[]} classes 
 * @returns {HTMLParagraphElement}
 */

const createParagraph = (fatherElementId, paragraphContent, id = 'p--' + Date.now(), classes = ['p--function-generated']) =>
{
    const paragraph = document.createElement('p');
    paragraph.textContent = paragraphContent;
    fatherElementId.appendChild(paragraph);
    setIdAndClasses(paragraph, id, classes);
    return paragraph;
}

export default createParagraph;