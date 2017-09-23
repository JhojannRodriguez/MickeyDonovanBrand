/*Elements*/

let navigatorBar = document.getElementById('navigator'),
    sectionChange = document.getElementById('presentation'),
    greenText = document.getElementsByClassName('green-color'),
    allSections = document.getElementsByTagName('section'),
    motions = document.getElementById('e-motion'),
    overlay = document.getElementsByClassName('overlay_containerImage')[0],
    closeButton = document.getElementsByClassName('close-button')[0],
    menuResponsive = document.getElementById('responsiveButton'),
    menuContainer = document.getElementsByClassName('navigator__containerbottons')[0];

/*FUNCTIONS*/

let animationLetters = ( elements , createEl , animationClass , delay ) =>{
	let delayCounter = delay;
	for( a = 0 ; a < elements.length ; a++){
		let cutElement = elements[a].textContent.split("");
		elements[a].firstChild.remove()
		for( i = 0 ; i < cutElement.length ; i++ ){
			elements[a].appendChild(document.createElement(createEl));
			elements[a].querySelectorAll(createEl)[i].textContent = cutElement[i];
			elements[a].querySelectorAll(createEl)[i].classList.add(animationClass);
			elements[a].querySelectorAll(createEl)[i].style.animationDelay = delayCounter + "s";
			elements[a].querySelectorAll(createEl)[i].style.display = "inline-block";
			delayCounter +=	delay;
		}
	}
}


let changeNav = (nav, elementLimitChange, putClass, reClass) => {
  if( window.scrollY > elementLimitChange.offsetTop - nav.clientHeight ){
    nav.classList.remove(reClass);nav.classList.add(putClass);
  }else{
    nav.classList.remove(putClass);nav.classList.add(reClass);
  }
};

//executuions//

navigatorBar.addEventListener('click', (e) => {
  [...allSections].map( i => {
    if(e.target.textContent.toUpperCase() === i.id.toUpperCase() && e.target.nodeName === "LI"){
      window.scrollTo(0, i.offsetTop - 40);
      [...navigatorBar.lastElementChild.children].map(i => i.classList.remove('navigator__button-activated'))
      e.target.classList.add('navigator__button-activated')
    }
  })
})

window.addEventListener('load', () => {
  changeNav(navigatorBar,sectionChange,'navigator-sticky','navigator-static');
  animationLetters(greenText , 'span' , 'text-bounceAnimation' , 0.04);
});

window.addEventListener('scroll' , () =>{
  changeNav(navigatorBar,sectionChange,'navigator-sticky','navigator-static');
});

motions.addEventListener('click' , e => {
  if ( e.target.nodeName === "IMG" ) {
    overlay.getElementsByTagName('img')[0].setAttribute('src' , `../IMAGES/Animations/Face Animation ${e.target.alt}.gif`);
    overlay.style.display = "block"

  }
})


menuResponsive.addEventListener('click' , () => {
  if(menuContainer.classList.contains('navigator-hidden')){
    menuContainer.classList.remove('navigator-hidden');
    menuContainer.classList.add('navigator-show')
  }else{
    menuContainer.classList.remove('navigator-show');
    menuContainer.classList.add('navigator-hidden')
  }

});

overlay.addEventListener('click' , (e) => {
  e.preventDefault();
  overlay.style.display = "none";
});

closeButton.addEventListener('click' , () => {
  overlay.style.display = "none";
});
