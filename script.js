'use strict';

const doit = function() {
    console.log('Hip');
};

const buttons = document.querySelectorAll('.show-modal');

const buttonfun = function(b){  //Made a function telling what the button will do when clicked seperately.
    b.addEventListener('click',doit);
}

buttons.forEach(buttonfun);
