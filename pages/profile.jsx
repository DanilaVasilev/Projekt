import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
const Profile = () => {
    const[id, setID] = React.useState('')
    const[name, setName] = React.useState('')
    const[classschool, setClassschool] = React.useState('')
    const[letter, setLetter] = React.useState('')
    const[phone, setPhone] = React.useState('')
    const[user_type, setUser_type] = React.useState('')
    const[birthday, setBirthday] = React.useState('')
    useEffect(() => {
        fetch('http://localhost:3001/user')
        .then(response => response.json())
        .then(response => {
            setBirthday(response.birthday)
            setID(response.id)
            setName(response.name)
            setClassschool(response.class)
            setLetter(response.letter)
            setPhone(response.phone)
            setUser_type(response.user_type)  
           
            })
        }, [])
    return (
        <div className='html'>
            <div>
                <strong  className = 'title'>Профиль</strong>
                <div className = 'text'>
                    
                    <div>Id: {id}</div>
                    <div>Имя: {name}</div>
                    <div>Класс: {classschool}</div>
                    <div>Буква: {letter}</div>
                    <div>День рождения: {birthday}</div>
                    <div>Телефон: {phone}</div>
                    <div>Тип пользователя: {user_type}</div>
                    <div>День рождения: {birthday}</div>
                    </div>
                    <div>
                         <h3>
                          <Link to='/Registration' className='A'>Выйти с аккаунта</Link>
                         </h3>
                    </div>
                   
            </div>
        </div>
    );
};
export default Profile