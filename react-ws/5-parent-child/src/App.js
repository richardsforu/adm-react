
import 'bootstrap/dist/css/bootstrap.css';
import Greet from './components/Greet';
import StoryBox from './components/StoryBox';

function App(props) {
  return (
    <div className="container">
      <h1> {props.title} </h1>
      <h1>{props.age}</h1>
      <div className="card">
        <div className="card-header">APP Component</div>
        <div className="card-body">
          <h1>APP Component</h1>
          <hr />
       
          <StoryBox storyTitle="Love React JS" props1={props} />

        </div>
      </div>


      <hr />










    </div>
  )
}

export default App;


