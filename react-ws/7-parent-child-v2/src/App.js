import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from './components/Button';
const App = () => {

  let buttons = [5, 10, 15, 20, -5, -10, -15, -20]


  const [totalCount, setTotalCount] = useState(0);

  function calculateTotalHits(e) {
    console.log(">>>>> APP Component:: calculateTotalHits <<<<");
    console.log(e);
    setTotalCount(totalCount + e)
  }

  function renderButtons() {
    return buttons.map((btn, idx) => {
      return (
        <div key={idx} className="col-2 text-center mt-3">
          <div className="card" >
            <div className="card-body">
              <Button btnLabel={btn} onAction={e => calculateTotalHits(e)} />
            </div>
          </div>
        </div>
      )
    })



  }

  return (
    <div className="container">

      <h1>  Counter Box </h1> <hr />

      <div className="card">
        <div className="card-header">Counter APP </div>
        <div className="card-body">
          <div className="row">
            {renderButtons()}

          </div>
        </div>

        <div className="card-footer">
          <span className="text-center">
            <h2>Total: {totalCount}</h2>
          </span>
        </div>
      </div>




    </div>
  );
};

export default App;