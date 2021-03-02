import { useState } from 'react'; // useState is a hook
import 'bootstrap/dist/css/bootstrap.css';
import Greet from './components/Greet';

const App = () => {

  console.log(">>>> APP Component");

  const [msg, setMsg] = useState('Default Message'); // only one property update at a time
  const [count, setCount] = useState(0); // only one property update at a time

  // naming conveions shoudl be followed while using useState or setting state
  // When ever there is a change in the state , then App component re-renders by re-rendering all its child components
  // unless entire APP component is reloaded with child components, then only updated data avialble to child components
  return (

    <div className="container">

      <h1>Props Demo</h1> <hr />

      <div className="card">
        <div className="card-header">APP Component</div>
        <div className="card-body">
          <h2>APP Component</h2>
          <hr />
          <button onClick={() => setMsg('Good Morning')} className="btn btn-primary">Good Morning</button>
          <button onClick={() => setMsg('Good Noon')} className="btn btn-primary">Good Noon</button>
          <button onClick={() => setMsg('Happy Evening')} className="btn btn-primary">Good Evening</button>
          <hr/>
          <button onClick={() => setCount(count+1)} className="btn btn-success">+</button>
          <button onClick={() => setCount(count-1)} className="btn btn-success">-</button>

          <hr/>
          <h1>Count: {count}</h1>
        </div>
      </div>

      <hr />

      <Greet greetMsg={msg} /> <hr />



    </div>
  );
};

export default App;