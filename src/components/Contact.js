import React from 'react'
import './Contact.css';
import './mediaquery.css';

const Contact = () => {

    return (
        <div id={'contact'} className="contact-container">
            <h1 className="contact-title">ZAPRASZAM DO KONTAKTU!</h1>
            <div className="contact-content">
                <div className="contact-right-content">

                    <div className="email-label">
                        <span className="contact-icon"><i className="fas fa-envelope"></i></span>
                        <span className="title-bold">EMAIL</span>
                        <span className="text-medium">monika@gmail.com</span>
                    </div>

                    <div className="phone-label">
                        <span className="contact-icon"><i className="fas fa-mobile-alt"></i></span>
                        <span className="title-bold">TELEFON</span>
                        <span className="text-medium">333 111 222</span>
                    </div>

                    <div className="adress-label">
                        <span className="contact-icon"><i className="fas fa-map-marker-alt"></i></span>
                        <span className="title-bold">ADRES</span>
                        <span className="text-medium">ul. Uliczna 21/37</span>
                        <span className="text-medium">80-012 Gdańsk</span>
                    </div>

                </div>
                <form className="contact-form">
                    <label>Imie i nazwisko</label>
                    <input className="contact-name" type="text" />
                    <label>E-mail</label>
                    <input className="contact-name" type="email" />
                    <label>Temat</label>
                    <input className="contact-name" type="text" />


                    <label>Treść wiadomości</label>
                    <textarea className="contact-textarea" name="" id="" cols="30" rows="10"></textarea>
                    <label>Grafika (referencja)</label>
                    <input className="upload-ref" type="file" id="myfile" name="myfile" />

                    <div className="klauzula"><input type="checkbox" style={{ marginRight: "5px" }} />Wyrażam zgodę na przesłanie oferty oraz przetwarzanie i przechowywanie moich danych osobowych w celach marketingowych, zgodnie z Ustawą o ochronie danych osobowych z dnia 29 sierpnia 1997 r. więcej...</div>
                    <button className="sendBtn">Wyślij</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
