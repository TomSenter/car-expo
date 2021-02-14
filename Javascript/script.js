

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
    info.innerText = "The Aventador LP700–4 uses Lamborghini's new 700 PS (515 kW; 690 bhp) 6,498 cc (6.5 L; 396.5 cu in) 60° V12 engine weighing 235 kg. Known internally as the L539, the new engine is Lamborghini's fifth in-house engine and second V12 design.";
    // info header
    const h2 = document.createElement('h2');
    h2.innerText = 'Lamborghini aventador';

    // append to info writing
    infoWriting.appendChild(h2);
    infoWriting.appendChild(info);
    



    //x 
    const close= document.createElement('i');
    close.classList.add('fas');
    close.classList.add('fa-times-circle');

    //append all child elements
    div.appendChild(img);
    div.appendChild(infoWriting);
    div.appendChild(close);

    carDisplay.appendChild(div);

    // add an event handler for deleting the div

    document.querySelector('.fa-times-circle').onclick = deleteInfo;
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
    info.innerText = 'The Bugatti Chiron is a mid-engine two-seater sports car designed and developed in Germany by Bugatti Engineering GmbH and manufactured in Molsheim, France by French automobile manufacturer Bugatti Automobiles S.A.S.. ... The car is based on the Bugatti Vision Gran Turismo concept car.';
    // info header
    const h2 = document.createElement('h2');
    h2.innerText = 'Bugatti';

    // append to info writing
    infoWriting.appendChild(h2);
    infoWriting.appendChild(info);
    



    //x 
    const close= document.createElement('i');
    close.classList.add('fas');
    close.classList.add('fa-times-circle');

    //append all child elements
    div.appendChild(img);
    div.appendChild(infoWriting);
    div.appendChild(close);

    carDisplay.appendChild(div);

    // add an event handler for deleting the div

    document.querySelector('.fa-times-circle').onclick = deleteInfo;

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
    info.innerText = 'As proof of its lineage, the Spider possesses speeds that surpass its predecessors. It can go 0 to 62 mph in a whopping 3 seconds and from 62 to 124 mph after another 3 seconds.';
    // info header
    const h2 = document.createElement('h2');
    h2.innerText = 'Ferarri';

    // append to info writing
    infoWriting.appendChild(h2);
    infoWriting.appendChild(info);
    



    //x 
    const close= document.createElement('i');
    close.classList.add('fas');
    close.classList.add('fa-times-circle');

    //append all child elements
    div.appendChild(img);
    div.appendChild(infoWriting);
    div.appendChild(close);

    carDisplay.appendChild(div);

    // add an event handler for deleting the div

    document.querySelector('.fa-times-circle').onclick = deleteInfo;
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
    info.innerText = 'The mid-engined, rear-wheel-drive supercar – codenamed P14 – was actually conceived alongside the development of the 650S and promises to encapsulate the very best elements from McLaren’s illustrious line-up: the usability of the 570GT, the thrills of the 675LT and, perhaps, the pace of the P1 hypercar.';
    // info header
    const h2 = document.createElement('h2');
    h2.innerText = 'Mclaren';

    // append to info writing
    infoWriting.appendChild(h2);
    infoWriting.appendChild(info);
    



    //x 
    const close= document.createElement('i');
    close.classList.add('fas');
    close.classList.add('fa-times-circle');

    //append all child elements
    div.appendChild(img);
    div.appendChild(infoWriting);
    div.appendChild(close);

    carDisplay.appendChild(div);

    // add an event handler for deleting the div

    document.querySelector('.fa-times-circle').onclick = deleteInfo;

}



    

//event handler functions
lambo.onclick = lamboDiv;

bugatti.onclick = bugattiDiv;
ferarri.onclick = ferarriDiv;
mclaren.onclick = mclarenDiv;


/*mobile burger menu js*/
function toggleBurger(e){
   e.target.classList.toggle('change');

  document.getElementById('home-burger-menu').classList.toggle('show');
}

const homeBurger = document.getElementById('home-burger');

homeBurger.onclick = toggleBurger;





