import React from 'react';
import { Link } from "react-router-dom"
const Profile = () => {
    return (
        <div className='html'>
            <div>
                <strong  className = 'title'>Профиль</strong>
                <div className = 'text'>
                    <div>Id:</div>
                    <div>Имя:</div>
                    <div>Класс:</div>
                    <div>Буква:</div>
                    <div>День рождения:</div>
                    <div>Телефон:</div>
                    <div>Тип пользователя:</div>
                    </div>
                    <div>
                         <h3>
                          <Link to='/profile' className='A'>Выйти с аккаунта</Link>
                         </h3>
                    </div>
                   
            </div>
        </div>
    );
};
export default Profile