import React from 'react';
import TL from "./TimeLine";
import "../styles/main.css";




function App() {
  return (
        <Home/>  
  );
}

function Home()
{
  return(

    <div className="page">
      <TL/>
    </div>
  );

}

export default App;
