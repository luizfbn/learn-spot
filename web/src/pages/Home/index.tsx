import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'
import logo from '../../assets/logo.svg'

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={ logo } alt="LearnSpot" />
                </header>

                <main>
                    <h1>Seu marketplace de aulas.</h1>
                    <p>Ajudamos alunos a encontrarem professores de forma eficiente.</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Cadastre um ponto de ensino</strong>
                    </Link>
                </main>
                
            </div>
        </div>
    )
}

export default Home