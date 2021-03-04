import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const App = () => {

  const [flights, setFlights] = useState([])

  const listFlights = async () => {

    try {
      const apiUrl = 'http://localhost:8080/api/pss';
      const response = await axios.get(apiUrl);
      const flights = await response.data;
      setFlights(flights);
      return flights;

    } catch (e) {
      console.log(e);
    }


  }

  useEffect(() => {

    listFlights();

  }, [])


  function renderFlights() {

    return flights.map((flight,index) => {
      return (
        <tr key={index}>
          <td>{flight.id}</td>

          <td>{flight.flightNumber}</td>
          <td>{flight.origin}</td>
          <td>{flight.destination}</td>
          <td>{flight.flightDate}</td>
          <td>{flight.flightTime}</td>
          <td>{flight.duration}</td>
          <td>{flight.fare.fare}</td>
          <td>{flight.inventory.count}</td>
        </tr>

      )

    })


  }


  return (
    <div className="container">

      <h1>Axios Library Demo</h1> <hr />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Flight Number</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Flying Date</th>
            <th>Flight Time</th>
            <th>Duration</th>
            <th>Fare</th>
            <th>Available Seats</th>

          </tr>
        </thead>
        <tbody>
          {renderFlights()}
        </tbody>
      </table>


    </div>
  );
};

export default App;