export async function support(app, event, selector, mutationName, flag) {
  const openDialogButtons = document.querySelectorAll(selector);
  let clickedOnOpenDialogButton = false;
  openDialogButtons.forEach(button => {
    if (button.contains(event.target)) {
      clickedOnOpenDialogButton = true;
    }
  });
  
  if (clickedOnOpenDialogButton) {
    await app.$store.dispatch(mutationName, flag);
  }

  return clickedOnOpenDialogButton;
}

export async function handleAppClick(app, event, checkPopupState, dialogRef, mutationName, flag) {
  if (checkPopupState) {
    const dialogElement = dialogRef.$el;
    console.log(app.$store.state[checkPopupState]);
    if (app.$store.state[checkPopupState] && (!dialogElement.contains(event.target))) {
      await app.$store.dispatch(mutationName, flag);
    }
  }
}













export async function LentClick() {
  const parentElement = document.querySelector('.section-cont-v2');
  parentElement.addEventListener('click', event => {
    const sectionB = event.target.closest('.section-b');
    if (!sectionB) return;

    const sectionC = sectionB.parentNode.querySelector('.section-c');
    const imag = sectionB.querySelector('img.sec-ic-arr');
    const secTexti = sectionB.querySelector('.sec-texti');
    
    sectionC.style.display = sectionB.classList.toggle('acti') ? 'block' : 'none';
    imag.classList.toggle('no-deg', !sectionB.classList.contains('acti'));
    imag.classList.toggle('deg', sectionB.classList.contains('acti'));
    secTexti.innerHTML = sectionB.classList.contains('acti') ? 'Свернуть список' : 'Узнать больше';

    sectionB.parentNode.querySelectorAll('.section-b').forEach(elem => {
      if (elem !== sectionB) {
        elem.classList.remove('acti');
        elem.querySelector('.sec-texti').innerHTML = 'Узнать больше';
        elem.parentNode.querySelector('.section-c').style.display = 'none';
      }
    });
  });
}
