
import './App.css';
import {useGoogleOneTapLogin} from "react-google-one-tap-login"
import { useState } from 'react';

function App() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [lastName,setLastName]=useState("");

    useGoogleOneTapLogin({
      onSuccess:(response)=>{
        setName(response.given_name);
        setEmail(response.email);
        setLastName(response.family_name);
      },
    
      onError:(error)=> console.log(error),
      googleAccountConfigs:{
        client_id:"177775215506-ung3a2fq9rilrq19n6it14hqea8j1aso.apps.googleusercontent.com",
      },
    })
  return (

    <>
      <h1>{name} {lastName}</h1>
      <h2>{email}</h2>

      reajnenes

    </>
  );
}

export default App;
