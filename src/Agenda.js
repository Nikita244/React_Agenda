import React, { useState } from 'react';
import people from "../src/people";
import './Agenda.css'


const Agenda = () => {
    const [persone, setPersone] = useState(people);

    const elimina = (id) => {
        return setPersone(persone.filter((el) => el.id !== id))
    }
    const refresh = () => {
        return setPersone(people);
    }
    const cancTutto = () => {
        return setPersone([]);
    }
    return (

        <div className='container w-75 shadow bg-white rounded mb-5'>
            <ul className='w-75 d-flex  align-item-center flex-column px-0 m-auto'>
                {persone.map((el) => {
                    return (
                        <li className='py-3 d-flex border-bottom' key={el.id}>
                            <img src={el.img} alt='person' />
                            <div>
                                <h4 className='text-start ps-3'>{el.nome}</h4>
                                <p className='text-start ps-3 mb-0'>{el.stato}</p>
                            </div>
                            <button type='button' className='btn' onClick={() => elimina(el.id)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3-fill text-danger" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg></button>
                        </li>
                    );
                })}
                <div className='py-4'>
                <button type="button" className="btn btn-primary  float-start"  onClick={() => refresh()}>Reload</button>
                <button type="button" className="btn btn-danger float-end" onClick={() => cancTutto()}>Delete all</button>
            </div>
            </ul>
        </div>
    )
}

export default Agenda
