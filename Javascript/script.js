// leave it as a module in the script tag so we can import modules in

// get elements
const lambo = document.getElementById('lambo');
const bugatti = document.getElementById('bugatti');
const ferarri = document.getElementById('ferarri');
const mclaren = document.getElementById('mclaren');
const carDisplay= document.querySelector('.car-display');

// event handler functions 

//delete the info section
const deleteInfo = ()=>{
    const info = document.querySelector('.info');
    carDisplay.removeChild(info);
}

// lambo 

const lamboDiv = ()=>{
    const div = document.createElement('div');
    div.classList.add('info');


    /*div to hold header and paragraph*/
    const infoWriting = document.createElement('div');
    infoWriting.classList.add('info-writing');


    //img
    const img = document.createElement('img');
    img.src = '../Images/aventador_roadster.jpg';

    //info paragraph 
    const info = document.createElement('p');
    info.innerText = 'This is a lamborghini';
    // info header
    const h2 = document.createElement('h2');
    h2.innerText = 'Lamborghini aventador';

    // append to info writing
    infoWriting.appendChild(h2);
    infoWriting.appendChild(info);
    



    //x 
    const close= document.createElement('span');
    close.classList.add('close');
    close.innerText = 'Close';

    //append all child elements
    div.appendChild(img);
    div.appendChild(infoWriting);
    div.appendChild(close);

    carDisplay.appendChild(div);

    // add an event handler for deleting the div

    document.querySelector('.close').onclick = deleteInfo;
}


//bugatti
function bugattiDiv(){

    const div = document.createElement('div');
    div.classList.add('info');


    /*div to hold header and paragraph*/
    const infoWriting = document.createElement('div');
    infoWriting.classList.add('info-writing');


    //img
    const img = document.createElement('img');
    img.src = '../Images/bugatti-chiron.jpg';

    //info paragraph 
    const info = document.createElement('p');
    info.innerText = 'This is a bugatti';
    // info header
    const h2 = document.createElement('h2');
    h2.innerText = 'Bugatti';

    // append to info writing
    infoWriting.appendChild(h2);
    infoWriting.appendChild(info);
    



    //x 
    const close= document.createElement('span');
    close.classList.add('close');
    close.innerText = 'Close';

    //append all child elements
    div.appendChild(img);
    div.appendChild(infoWriting);
    div.appendChild(close);

    carDisplay.appendChild(div);

    // add an event handler for deleting the div

    document.querySelector('.close').onclick = deleteInfo;

}

//ferarri
function ferarriDiv(){

    const div = document.createElement('div');
    div.classList.add('info');


    /*div to hold header and paragraph*/
    const infoWriting = document.createElement('div');
    infoWriting.classList.add('info-writing');


    //img
    const img = document.createElement('img');
    img.src = '../Images/ferarri-spider.jpeg';

    //info paragraph 
    const info = document.createElement('p');
    info.innerText = 'This is a ferarri';
    // info header
    const h2 = document.createElement('h2');
    h2.innerText = 'Ferarri';

    // append to info writing
    infoWriting.appendChild(h2);
    infoWriting.appendChild(info);
    



    //x 
    const close= document.createElement('span');
    close.classList.add('close');
    close.innerText = 'Close';

    //append all child elements
    div.appendChild(img);
    div.appendChild(infoWriting);
    div.appendChild(close);

    carDisplay.appendChild(div);

    // add an event handler for deleting the div

    document.querySelector('.close').onclick = deleteInfo;
}

//mclaren 
function mclarenDiv(){

    const div = document.createElement('div');
    div.classList.add('info');


    /*div to hold header and paragraph*/
    const infoWriting = document.createElement('div');
    infoWriting.classList.add('info-writing');


    //img
    const img = document.createElement('img');
    img.src = '../Images/mclaren.jpg';

    //info paragraph 
    const info = document.createElement('p');
    info.innerText = 'This is a mclaren';
    // info header
    const h2 = document.createElement('h2');
    h2.innerText = 'Mclaren';

    // append to info writing
    infoWriting.appendChild(h2);
    infoWriting.appendChild(info);
    



    //x 
    const close= document.createElement('span');
    close.classList.add('close');
    close.innerText = 'Close';

    //append all child elements
    div.appendChild(img);
    div.appendChild(infoWriting);
    div.appendChild(close);

    carDisplay.appendChild(div);

    // add an event handler for deleting the div

    document.querySelector('.close').onclick = deleteInfo;

}



    

//event handler functions
lambo.onclick = lamboDiv;

bugatti.onclick = bugattiDiv;
ferarri.onclick = ferarriDiv;
mclaren.onclick = mclarenDiv;



