const setIdAndClasses = (htmlElement, htmlElementId, htmlElementClasses) =>
{
    htmlElement.id = htmlElementId;
    for (let i = 0; i < htmlElementClasses.length; i++)
    {
        htmlElement.classList.add(htmlElementClasses[i]);
    }
}

export default setIdAndClasses;