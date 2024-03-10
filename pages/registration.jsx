import React from 'react';
import { Link } from "react-router-dom"
const Registration= () => {
    return (
        <div className='html'>
            <div>
                <strong  className = 'title'>Регистрация</strong>
                <div className = 'text'>
                    <div>Имя:
                        <input type="text" name="name"/>
                    </div>
                    <div>Класс:
                    <input type="text" name="class"/>
                    </div>
                    <div>Буква:
                    <input type="text" name="word"/>
                    </div>
                    <div>День рождения:
                    <input type="date" id="start" name="trip-start" value="2018-07-22" min="2000    -01-01" max="2018-12-31" />
                    </div>
                    <div>Телефон:
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                    </div>
                    <legend>Выбери статус</legend>
                    <div>
                    <input type="radio" id="huey" name="drone" value="huey" checked />
                    <label for="huey">Ученик</label>
                    </div>
                    <div>
                    <input type="radio" id="dewey" name="drone" value="dewey" />
                    <label for="dewey">Учитель</label>
                    </div>

                    </div>
                    <div>
                        <h3>
                            <button className='button'>
                               Зарегистрироваться
                                </button>
                                <button className='uge'>
                                <Link to='/Profile'>Уже есть аккаунт</Link>
                                </button>
                        </h3>
                    </div>        
                
            </div>

        </div>
    );
};
export default Registration