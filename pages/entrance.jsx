import React from 'react';
import { Link } from "react-router-dom"
const Entrance = () => {
    return (
        <div className='html'>
            <div>
                <strong  className = 'title'>Регистрация</strong>
                <div className = 'text'>
                    <div>Имя:</div>
                    <div>Класс:</div>
                    <div>Буква:</div>
                    <div>День рождения:</div>
                    <div>Телефон:</div>
                    <div>Тип пользователя:</div>
                    </div>
                    <div>
                        <h3>
                            <Link to='/' className='A'>Назад</Link>
                        </h3>
                    </div>        
                
            </div>

        </div>
    );
};
export default Entrance