import React from 'react';
import './card.css'

export default function Card({ robot }) {    
    return (
        <div className="card-container">
            <div className="card-robot">
                <div>
                    <h4>{`Numero: ${robot.id}`}</h4>
                    <h2>{robot.name}</h2>
                </div>
                <div className='card-robot-avatar'>
                    <img src={robot.avatar} alt="robot" width='48px' height='48px' />
                    <img src={robot.sprite1} alt="robot" width='48px' height='48px' />
                </div>
                
            </div>   
            <div className="card-description">                
                <h3>{`Jogo: Rockman ${robot.series}`}</h3>
                <h3>{`Arma: ${robot.weapon}`}</h3>
                <h3>{`Fraquesa: ${robot.weakness}`}</h3>
            </div>        
        </div>
    );
}

