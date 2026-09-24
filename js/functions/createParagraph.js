/**
 * 
 * @param {HTMLElement} fatherElementId 
 * @param {string | number} paragraphContent 
 */

const createParagraph = (fatherElementId, paragraphContent) =>
{
    const paragraph = document.createElement('p');
    paragraph.textContent = paragraphContent;
    fatherElementId.appendChild(paragraph);
    return paragraph;
}

export default createParagraph;