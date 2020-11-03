import React from 'react'
import './Pricelist.css';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Pricelist = () => {

    return (
        <div className="pricelist-section">
            <h1 className="section-title">Cennik</h1>
            <p className="pricelist-text">
                Bardzo ciężko jest mi ustalić typowy cennik, który wskazywałby na jednoznaczne wycenienie zamówienia. Każde ciasteczko jest inne,
                ponieważ to Ty określasz jak ma dokładnie wyglądać, na ile szczegółowa ma być grafika, jakie duże, jaka ilość itd. Ciasteczka wyceniam
                indywidualnie, a na koszt ma wpływ wiele czynników: wielkość ciasteczek, ich ilość, skomplikowanie wzoru, czas poświęcony na
                wykonanie itd.
            <p className="pricelist-bold">Minimalne zamówienie – 10 sztuk, ale 5 ciasteczek jednego wzoru.</p>
                <p>W celu zorientowania się, jak mogę wycenić zamówione przez Ciebie ciasteczka, zamieściłam poniżej tabelę, w której prezentuję
                przykładowy koszt danych ciasteczek. Różnią się one przede wszystkim czasem poświęconym na ich wykonanie oraz wielkością, ale mam
                nadzieję, że ta forma cennika, będzie dla Ciebie obrazowa i będziesz wiedział jaki rodzaj ciasteczek dokładnie chcesz zamówić. Przy
                składaniu zamówienia, zawsze możesz również dodać, jaki koszt pojedynczego ciasteczka Cię interesuje, a ja postaram się dostosować.
                Podane ceny są określone jako “około” ponieważ mogę wycenić ciasteczko na 12 zł, czy też 18 zł. Wszystkie ceny są podane za sztukę i
                zawierają “opakowanie” tj. woreczek celofanowy zaklejony z tyłu.
                <br></br>
                    <br></br>
                Winietki, czy też przewiązanie kokardką są to opcje dodatkowe, dlatego są też dodatkowo płatne.
                <br></br>
                    <br></br>
                    <p style={{ fontWeight: "bold", fontSize: "17px" }}>Koszt przesyłki to 25 zł.</p>
                W zależności od przeznaczenia ciasteczek, w przypadku podziękowań dla gości, nie dodaję do poszczególnych ciasteczek ‚metki’ ze
                składem, a jedynie do opakowania zbiorczego, w którym wysyłam zamówienie. Oczywiście wszystko o moich ciasteczkach możesz
                przeczytać w zakładce “o ciasteczkach“.
                <br></br>
                    <br></br>
                W celu wyceny proszę przesłać wybraną grafikę, logo, zdjęcie.
            </p>
            </p>
            <h1 className="section-title">Przykładowe ceny ciastek</h1>
            <p className="pricelist-text" style={{ marginBottom: "50px" }}>
                Ceny zależą od wielkości ciasteczek i pracochłonności. Moje ciasteczka to gwarancja precyzyjnego wykonania, jakości oraz świeżości, koszt może wydawać Ci się wysoki, ale każde ciasteczko jest pracochłonne, a ja przykładam ogromną wagę do szczegółów i idealnego wykończenia.
                <br></br>
                <br></br>
                Zawsze możesz określić jaki koszt chcesz przeznaczyć na ciasteczka, a ja zaproponuję coś dopasowanego, dobierając odpowiednią technikę wykonania wzoru.
            </p>



            <Tabs>
                <TabList>
                    <div className="prices">
                        <Tab><span className="price-item">5zł</span></Tab>
                        <Tab><span className="price-item">10zł</span></Tab>
                        <Tab><span className="price-item">15zł</span></Tab>
                        <Tab><span className="price-item">20zł</span></Tab>
                        <Tab><span className="price-item">25zł</span></Tab>
                        <Tab><span className="price-item">30zł</span></Tab>
                        <Tab><span className="price-item">40zł</span></Tab>
                        <Tab><span className="price-item">50zł</span></Tab>
                    </div>
                </TabList>
                <TabPanel>
                    <SimpleReactLightbox>
                        <SRLWrapper>
                            <div className="gallery-content">
                                <img className="gallery-image" src="/images/1.jpg" alt="" />
                                <img className="gallery-image" src="/images/2.jpg" alt="" />
                                <img className="gallery-image" src="/images/3.jpg" alt="" />
                                <img className="gallery-image" src="/images/1.jpg" alt="" />
                            </div>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </TabPanel>
                <TabPanel>
                    <SimpleReactLightbox>
                        <SRLWrapper>
                            <div className="gallery-content">
                                <img className="gallery-image" src="/images/okazjonalne.jpg" alt="" />
                                <img className="gallery-image" src="/images/swiateczne.jpg" alt="" />
                                <img className="gallery-image" src="/images/urodzinowe.jpg" alt="" />
                                <img className="gallery-image" src="/images/walentynkowe.jpg" alt="" />
                            </div>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </TabPanel>
                <TabPanel>
                    <SimpleReactLightbox>
                        <SRLWrapper>
                            <div className="gallery-content">
                                <img className="gallery-image" src="/images/1.jpg" alt="" />
                                <img className="gallery-image" src="/images/2.jpg" alt="" />
                                <img className="gallery-image" src="/images/3.jpg" alt="" />
                                <img className="gallery-image" src="/images/1.jpg" alt="" />
                            </div>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </TabPanel>
                <TabPanel>
                    <SimpleReactLightbox>
                        <SRLWrapper>
                            <div className="gallery-content">
                                <img className="gallery-image" src="/images/2.jpg" alt="" />
                                <img className="gallery-image" src="/images/1.jpg" alt="" />
                                <img className="gallery-image" src="/images/2.jpg" alt="" />
                                <img className="gallery-image" src="/images/3.jpg" alt="" />
                            </div>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </TabPanel>
                <TabPanel>
                    <SimpleReactLightbox>
                        <SRLWrapper>
                            <div className="gallery-content">
                                <img className="gallery-image" src="/images/okazjonalne.jpg" alt="" />
                                <img className="gallery-image" src="/images/swiateczne.jpg" alt="" />
                                <img className="gallery-image" src="/images/urodzinowe.jpg" alt="" />
                                <img className="gallery-image" src="/images/walentynkowe.jpg" alt="" />
                            </div>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </TabPanel>
                <TabPanel>
                    <SimpleReactLightbox>
                        <SRLWrapper>
                            <div className="gallery-content">
                                <img className="gallery-image" src="/images/2.jpg" alt="" />
                                <img className="gallery-image" src="/images/1.jpg" alt="" />
                                <img className="gallery-image" src="/images/2.jpg" alt="" />
                                <img className="gallery-image" src="/images/3.jpg" alt="" />
                            </div>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </TabPanel>
                <TabPanel>
                    <SimpleReactLightbox>
                        <SRLWrapper>
                            <div className="gallery-content">
                                <img className="gallery-image" src="/images/1.jpg" alt="" />
                                <img className="gallery-image" src="/images/2.jpg" alt="" />
                                <img className="gallery-image" src="/images/3.jpg" alt="" />
                                <img className="gallery-image" src="/images/1.jpg" alt="" />
                            </div>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </TabPanel>
                <TabPanel>
                    <SimpleReactLightbox>
                        <SRLWrapper>
                            <div className="gallery-content">
                                <img className="gallery-image" src="/images/okazjonalne.jpg" alt="" />
                                <img className="gallery-image" src="/images/swiateczne.jpg" alt="" />
                                <img className="gallery-image" src="/images/urodzinowe.jpg" alt="" />
                                <img className="gallery-image" src="/images/walentynkowe.jpg" alt="" />
                            </div>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </TabPanel>
            </Tabs>




        </div>
    )
}

export default Pricelist
