const myButtonResize = document.getElementById('exercicioExtra04__button--resize');
const myButtonDisappear = document.getElementById('exercicioExtra04__button--hide');
const myResizeableParagraph = document.getElementById('exercicioExtra04__p--resize');
const myHideableParagraph = document.getElementById('exercicioExtra04__p--hide');
let actualSize = 0;
let isHidden = 0;
let cssAttributes = window.getComputedStyle(myResizeableParagraph);
const originalcssAttributes =
{
  fontSize: cssAttributes.fontSize,
  display: cssAttributes.display
}

const resize =
{
  0: () => { myResizeableParagraph.style.fontSize = '5em'; myButtonResize.textContent = 'Downsize it'; },
  1: () => { myResizeableParagraph.style.fontSize = originalcssAttributes.fontSize; myButtonResize.textContent = 'Upsize it'; }
}

const hidden =
{
  0: () => { myHideableParagraph.style.display = "none"; myButtonDisappear.textContent = 'Show it'; },
  1: () => { myHideableParagraph.style.display = originalcssAttributes.display; myButtonDisappear.textContent = 'Hide it'; }
}

myButtonResize.addEventListener('click', () => { resize[actualSize](); actualSize += 1; actualSize &= 1; });
myButtonDisappear.addEventListener('click', () => { hidden[isHidden](); isHidden = (isHidden + 1) & 1; });