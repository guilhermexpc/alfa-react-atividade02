import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import './index.css'

function App() {
  const [robots, setRobots] = useState([]);
  const [robot, setRobot] = useState();
  const [load, setLoad] = useState(false);
  const url = 'https://pokeapi.co/api/v2/pokemon'
  const urlmm = 'https://megaman-robot-masters.herokuapp.com/'
  useEffect(()=>{ 
    setLoad(true);
    fetch(urlmm).then((r) => r.json())
    .then((json) => {setRobots(json)})     
    setLoad(false);
  }, [])

  // }, [])

  return (
    <body>
      <div className="container">
        {load ? <h1>Load</h1>
        :
        <div>
          <h1>Rockman</h1>
          <h2>Lista de robos</h2>

          <div className="grid">
            {robots.map((robot, index) =>
              <div className='grid-item'>
                <Card robot={robot}/>
              </div>
              )}
          </div>
              
         
          
          {/* <ul>
            {robots.map((robot, index) =>
              <li key={index}>
                <strong>[{index}] </strong>
                <strong>ID {robot.id} </strong>
                <strong>Serie: {robot.series} </strong>
                <strong>Nome: {robot.name} </strong>
                <strong>Weapon: {robot.weapon} </strong>
                <img src={robot.avatar} alt="Logo" />
              </li>
            )}
          </ul> */}
          {/* <h4>{robots.map((item) => item.name)}</h4> */}
        </div>
        }             
      </div>
    </body>
    
  );
}

export default App;
