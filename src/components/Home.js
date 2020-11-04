import React from 'react'
import './Home.css';
import './mediaquery.css';
import Contact from './Contact'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { HashLink } from 'react-router-hash-link';

const Home = () => {

    return (
        <div>
            <div className="hero-container">
                <HashLink to="/#gallery">
                    <button className="new-cookies-button">Zobacz najnowsze ciastka</button>
                </HashLink>

                <img className="hero-section" src="/images/hero-image.jpg" alt="" />
            </div>

            <div id={'offer'} className="offer-section">
                <h1 className="section-title">Oferta</h1>
                <p className="offer-text"><b>Lukrowane ciasteczka</b> to moja pasja już od kilku ładnych lat. Już od małego tworzyłam lukrowane ciastka na różne święta czy okazje, co
zaowocowało przyszłemu zainteresowaniu w sztuce zdobienia ciastek. Kunsztu zdobienia oraz pieczenia ciastek uczyłam się pod okiem mistrzów
tego fachu na różnych szkoleniach oraz kursach ciastkarskich. Moja oferta zawiera wszelkiej maści ciasteczka okolicznościowe od walentynek po wigilie. </p>
                <br></br>
                <p className="offer-text-bold">Serdecznie zapraszam do zapoznania się z ofertą! </p>

                <div className="offer-content">
                    <div className="offer-box">
                        <img className="offer-image" src="/images/urodzinowe.jpg" alt="" />
                        <span className="offer-title-image">Ciasteczka <br></br>urodzinowe</span>
                    </div>

                    <div className="offer-box">
                        <img className="offer-image" src="/images/okazjonalne.jpg" alt="" />
                        <span className="offer-title-image">Ciasteczka <br></br>okazjonalne</span>
                    </div>

                    <div className="offer-box">
                        <img className="offer-image" src="/images/swiateczne.jpg" alt="" />
                        <span className="offer-title-image">Ciasteczka <br></br>świąteczne</span>
                    </div>

                    <div className="offer-box">
                        <img className="offer-image" src="/images/walentynkowe.jpg" alt="" />
                        <span className="offer-title-image">Ciasteczka<br></br> walentynkowe</span>
                    </div>
                </div>
            </div>

            <div id={'gallery'} className="gallery-section">
                <h1 className="section-title">Galeria</h1>
                <SimpleReactLightbox>
                    <SRLWrapper>
                        <div className="gallery-content">
                            <div className="image">
                                <img className="gallery-image" src="/images/1.jpg" alt="" />
                                <div className="hoverDiv">
                                    <span className="hoverIcon"><i className="fas fa-search-plus"></i></span>
                                </div>
                            </div>

                            <img className="gallery-image" src="/images/2.jpg" alt="" />
                            <img className="gallery-image" src="/images/3.jpg" alt="" />
                            <img className="gallery-image" src="/images/1.jpg" alt="" />
                            <img className="gallery-image" src="/images/2.jpg" alt="" />
                            <img className="gallery-image" src="/images/3.jpg" alt="" />
                            <img className="gallery-image" src="/images/3.jpg" alt="" />
                            <img className="gallery-image" src="/images/1.jpg" alt="" />
                        </div>
                    </SRLWrapper>
                </SimpleReactLightbox>
            </div>

            <div id={'about'} className="about-section">
                <img className="about-image" src="/images/monika.jpg" alt="" />

                <div className="right-text">
                    <p>Cześć, nazywam się Monika. Od zawsze lubiłam piec różne słodkości, a
                    najbardziej je dekorować. Stworzyłam tę stronę, żeby się rozwijać a
                    także podzielić się tym, co robię z innymi :) Chętnie wykonam
                    ciasteczka na zamówienie, na różne okazje. Zapraszam do kontaktu.</p>
                    <p className="about-me-sign">Monika Bodnar</p>
                </div>

            </div>

            <Contact />
        </div >
    )
}

export default Home
