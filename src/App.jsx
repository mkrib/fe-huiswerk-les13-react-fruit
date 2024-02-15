import './App.css'
import {useState} from "react";

function App() {
    const [amountOfStrawberries, setAmountOfStrawberries] = useState(0);
    const [amountOfBananas, setAmountOfBananas] = useState(0);
    const [amountOfApples, setAmountOfApples] = useState(0);
    const [amountOfKiwis, setAmountOfKiwis] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Send!");
    }

    return (
        <>
            <section className="section-product-wrapper">
            <section className="section-product">
                <h2>Aardbeien</h2>
                <button
                    disabled={amountOfStrawberries <= 0}
                    onClick={() => setAmountOfStrawberries(prev => prev - 1)}>-
                </button>
                <p>{amountOfStrawberries}</p>
                <button
                    onClick={() => setAmountOfStrawberries(prev => prev + 1)}
                >+
                </button>
            </section>

            <section className="section-product">
                <h2>Bananen</h2>
                <button
                    disabled={amountOfBananas <= 0}
                    onClick={() => setAmountOfBananas(prev => prev - 1)}>-
                </button>
                <p>{amountOfBananas}</p>
                <button
                    onClick={() => setAmountOfBananas(prev => prev + 1)}
                >+
                </button>
            </section>

            <section className="section-product">
                <h2>Appels</h2>
                <button
                    disabled={amountOfApples <= 0}
                    onClick={() => setAmountOfApples(prev => prev - 1)}>-
                </button>
                <p>{amountOfApples}</p>
                <button
                    onClick={() => setAmountOfApples(prev => prev + 1)}
                >+
                </button>
            </section>

            <section className="section-product">
                <h2>Kiwi's</h2>
                <button
                    disabled={amountOfKiwis <= 0}
                    onClick={() => setAmountOfKiwis(prev => prev - 1)}>-
                </button>
                <p>{amountOfKiwis}</p>
                <button
                    onClick={() => setAmountOfKiwis(prev => prev + 1)}
                >+
                </button>
            </section>
            </section>

            {/*<div className="div-form">*/}
                <form onSubmit={handleSubmit}>
                    <fieldset>
                    <legend>Contactformulier</legend>
                    <label htmlFor="firstname">Voornaam</label>
                    <input
                        id="firstname"
                        type="text"
                        name="firstname"
                    />
                    <label htmlFor="lastname">Achternaam</label>
                    <input
                        id="lastname"
                        type="text"
                        name="lastname"
                    />
                    <label htmlFor="age">Leeftijd</label>
                    <input
                        id="age"
                        type="number"
                        name="age"
                    />
                    <label htmlFor="zipcode">Postcode</label>
                    <input
                        id="zipcode"
                        type="text"
                        name="zipcode"
                    />
                    <label htmlFor="delivery-frequency">Bezorgfrequentie</label>
                    <select
                        name="delivery-frequency"
                        id="delivery-frequency"
                        type="select">
                        <option value="every-week">Iedere week</option>
                        <option value="every-2-weeks">Iedere 2 weken</option>
                        <option value="every-month">Iedere maand</option>
                    </select>

                    <input
                        id="day"
                        type="radio"
                        name="day"/>
                    <label htmlFor="day">Overdag</label>
                    <input
                        id="evening"
                        type="radio"
                        name="evening"/>
                    <label htmlFor="evening">'s Avonds</label>

                    <label htmlFor="comment">Opmerking</label>
                    <textarea
                        id="comment"
                        name="comment"
                    />

                    <input
                        id="terms-and-conditions"
                        type="checkbox"
                        name="terms-and-conditions"
                    />
                    <label htmlFor="terms-and-conditions">Ik ga akkoord met de voorwaarden</label>

                    <button
                        type="submit"
                    >
                        Verzend
                    </button>
                    </fieldset>
                </form>
            {/*</div>*/}
        </>
    )
}

export default App
