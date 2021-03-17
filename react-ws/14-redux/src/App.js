import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import counterActions from './actions/counterActions';
import userActions from './actions/userActions';
import MyComponent from './MyComponent';

const App = () => {

  //const[counter,setCounter]=useState(10)

  const counter=useSelector(state=>state.counter)
  const currentUser=useSelector(state=>state.currentUser);

  const dispatch=useDispatch();

  const user={name:'Praveen'}

  useEffect(() => {
    dispatch(userActions.setUser(user))
  },[])


  return (
    <div className="container">

      <h1>Reducer  Demo</h1> <hr/>

      <h1>Counter: { counter }</h1>

      <button onClick={()=>dispatch(counterActions.increment())}>Increment Counter</button>
      <button onClick={()=>dispatch(counterActions.decrement())}>Decrement Counter</button>

      <hr/>

      {
        currentUser.loggedIn? <>
        <h1>Hello ,{currentUser.user.name}</h1>
        <button onClick={()=>dispatch(userActions.logout())}>Logout</button>
        </>
        :
        <>
        <h1>Login</h1>
     
        <button onClick={()=>dispatch(userActions.setUser(user))}>Login as Praveen</button>
        </>
     }

    

     <hr/>

   <MyComponent/>

      
    </div>
  );
};

export default App;