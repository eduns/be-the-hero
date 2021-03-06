import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function NewIncident() {
    const ongID = localStorage.getItem('ongID');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    async function handleSubmitNewIncident(e) {
        e.preventDefault();

        const data = {
            title, description, value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongID
                }
            });

            history.push('/profile');
        } catch (error) {
            alert('Erro ao cadastrar caso, tent novamente');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleSubmitNewIncident}>
                    <input type="text" 
                        placeholder="Título"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea 
                        placeholder="Descrição detalhada do caso..."
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input type="text" 
                        placeholder="Valor (em R$)"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}