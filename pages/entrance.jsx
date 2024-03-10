import React from 'react';
import { Link } from "react-router-dom"
const Entrance = () => {
    return (
        <div className='html'>
            <div>
                <strong  className = 'title'>вход</strong>
                <div className = 'text'>
                    <div>Имя:</div>
                    <input type="text" name="name"/>
                    <div>Телефон:</div>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                    </div>
                    <div>
                        <h3>
                            <button className='button1'>Войти</button>
                        </h3>
                    </div>        
                
            </div>

        </div>
    );
};
export default Entrance