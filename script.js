const cells = document.querySelectorAll('.table-cell');


function incrementElement (e){
    
    e.target.innerHTML++;
    setTimeout('console.log("Нажал")', 500);
    console.log("one");
}


const decrementElement = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) -1;
    console.log("dable")
};


const elementAddEventListner = (element) => {
    element.addEventListener('click', incrementElement);
    element.addEventListener('dblclick', decrementElement);

};

cells.forEach(elementAddEventListner);









