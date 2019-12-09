import React from 'react';
import './App.css';

/* Tela para mostrar informacoes do artista */
/* Infelizmente nao consegui passar as props para cá*/

function BandPage () {
    return (
        <div className="container">
            <nav>
                <div className="header-nav">
                    <h1 className="logo-style">Logo</h1>
                    <h3 className="back-button">Back</h3>
                </div>
            </nav>
            <section>
                <div className="band-bg"></div>
                <div className="artist-name">Pink Floyd</div>
                <div className="artist-name">
                    <img className="artist-avatar" src="http://blogs.jornaldaparaiba.com.br/silvioosias/wp-content/uploads/sites/33/2017/10/Dark-side-of-the-moon-1.jpg" alt="" />
                </div>
                <div className="artist-stat">
                    <h3>PROGRESSIVE</h3>
                    <h3>233433 PLAYS</h3>
                </div>
                <div className="artist-description">
                    <span>
                        Pink Floyd are a psychedelic/progressive rock band formed in Cambridge, England, United Kingdom in 1965. Pink Floyd is one 
                        of rock's most successful and influential acts, having sold over 200 million albums worldwide 
                        and with 74.5 million certified units in the United States, making them one of the best-selling artists of all time. 
                        Currently the band consists of David Gilmour (vocals, guitar) and Nick Mason (drums).\n\nThe band's classic lineup was Roger Waters
                    </span>
                </div>
            </section>
        </div>
    )
}

export default BandPage;