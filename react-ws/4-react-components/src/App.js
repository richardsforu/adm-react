import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Greet from './Greet';

function App(props) { // functional component / stateless component

  return (
    <div>


      <h1>Hello Welcome to {props.title}</h1> <hr />

      <Welcome />

      <hr />

      <Greet />



    </div>
  );
}

export default App;
