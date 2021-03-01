
let indianClock = document.querySelector('#indianClock');
let dubaiClock = document.querySelector('#dubaiClock');
let americanClock = document.querySelector('#americanClock');



function jsClock(props) {
    let time = new Date().toLocaleTimeString('en-US', { timeZone: props });
    //indianClock.innerText = time;
    let ui = `
     <div class='card'> 
        <div class='card-header'>
             ${props} 
        </div>
        <div class='card-body'>
            <p>Good Morning</p>
            <hr/>
            <span> ${time} </span>
        </div>
     </div>
    `
    return ui;
}



let indianClockV1 = document.querySelector('#indianClockV1');
let dubaiClockV1 = document.querySelector('#dubaiClockV1');
let americanClockV1 = document.querySelector('#americanClockV1');


function ReactClock(props) {
    let time = new Date().toLocaleTimeString('en-US', { timeZone: props });

    let ui =
        <div className='card'>
            <div className='card-header bg-info'>
                {props}
            </div>
            <div className='card-body'>
                <p>Good Morning</p>
                <hr />
                <span> {time} </span>
            </div>
        </div>

    return ui;
}


function Clock(props) {
    let { timeZone } = props;
    return (
        <div className='card'>
            <div className='card-header bg-info'>
                {timeZone}
            </div>
            <div className='card-body'>
                <p>Good Morning</p>
                <hr />
                <span> {new Date().toLocaleTimeString('en-US', { timeZone })} </span>
            </div>
        </div>
    )
}


// with React class component  // Component is nothing but a function or a class

// if you are creating a component with a function, then its stateless component
// if you are creating a component with a class, then its stateful component
function Wall() { // stateles component
    return (

        <div>
            <div className="row">
                <div className="col-4">
                    <Clock timeZone="Asia/Kolkata" />
                </div>
                <div className="col-4">
                    <Clock timeZone="Asia/Dubai" />
                </div>
                <div className="col-4">
                    <Clock timeZone="america/new_york" />
                </div>
            </div>
        </div>

    )


}

class Employee{ // stateful component
    constructor(id,name,salary){
        this.id = id
        this.name =name;
        this.salary=salary;
    }


    processSalary(){
        // number of working days shoud take from backend
        // calaculate salary based on number of working days
        // salary
    }

    display(){
        processSalary();
        // salary ...
    }
}

let e1=new Employee(1,'Praveen',10000);


let Sum = (props) => {
    let { a, b } = props;
    return (
        <div>
            <h1>Sum : {Number.parseInt(a)+Number.parseInt(b)}</h1>
        </div>

    )
}


setInterval(() => {

    indianClock.innerHTML = jsClock('Asia/Kolkata');
    dubaiClock.innerHTML = jsClock('Asia/Dubai');
    americanClock.innerHTML = jsClock('America/new_york');

    ReactDOM.render(ReactClock('Asia/Kolkata'), indianClockV1);
    ReactDOM.render(ReactClock('Asia/Dubai'), dubaiClockV1);
    ReactDOM.render(ReactClock('America/new_york'), americanClockV1);

    ReactDOM.render(<Wall />, document.getElementById('root'));

    ReactDOM.render(<Sum a="100" b="200" />, document.getElementById('d1'));
    ReactDOM.render(<Sum a="1000" b="2000" />, document.getElementById('d2'));



}, 1000);





