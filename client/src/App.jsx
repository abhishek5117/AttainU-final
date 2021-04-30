import React,{useEffect,createContext,useReducer,useContext} from 'react';
import Navbar from './components/login/Navbar';
import "./App.css";
import { BrowserRouter,Route,Switch,useHistory} from 'react-router-dom';
 import Home from './components/login/Home';
 import Signin from './components/login/Login';
import Signup from './components/login/Signup';
import {reducer,initialState} from './reducer/useReducer'
export const UserContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} =useContext(UserContext)
  useEffect(()=>{  
   const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      
    }else{
      history.push('/signin')
    }
  },[])
  return(
    <Switch>
        <Route exact path="/">
        <Home />
        </Route >
        <Route path="/login">
        <Signin />
        </Route>
        <Route path="/signup">
        <Signup />
        </Route>
      </Switch> 
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Navbar/>
    <Routing/>
  </BrowserRouter>
  </UserContext.Provider>
  );
}

export default App;