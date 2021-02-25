
let indianClock = document.querySelector('#indianClock');
let dubaiClock = document.querySelector('#dubaiClock');
let americanClock = document.querySelector('#americanClock');



function jsClock(props) {

    time = new Date().toLocaleTimeString('en-US', { timeZone: props });
    //indianClock.innerText = time;
    let ui = `
    
     <div class='card'> 
        <div class='card-header'>${props} </div>
        <div class='card-body'>
            <span> ${time} </span>
        </div>
     </div>
    `

    return ui;
}

setInterval(() => {
    indianClock.innerHTML = jsClock('Asia/Kolkata');
    dubaiClock.innerHTML = jsClock('Asia/Dubai');
    americanClock.innerHTML = jsClock('America/new_york');

}, 1000)

