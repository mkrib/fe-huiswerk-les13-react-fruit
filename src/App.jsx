import './App.css'
import {useState} from "react";
import Product from "./components/Product.jsx";
import Button from "./components/Button.jsx";
import InputField from "./components/InputField.jsx";

function App() {
    // const [fruitAmounts, setFruitAmounts] = useState({
    //     strawberries: 0,
    //     bananas: 0,
    //     apples: 0,
    //     kiwis: 0
    // });

    const [amountOfStrawberries, setAmountOfStrawberries] = useState(0);
    const [amountOfBananas, setAmountOfBananas] = useState(0);
    const [amountOfApples, setAmountOfApples] = useState(0);
    const [amountOfKiwis, setAmountOfKiwis] = useState(0);

    function resetFruitAmounts() {
        setAmountOfStrawberries(0);
        setAmountOfBananas(0);
        setAmountOfApples(0);
        setAmountOfKiwis(0);
    }

    const [formValues, setFormValues] = useState({
        firstname: '',
        lastname: '',
        age: '',
        zipcode: '',
        deliveryFrequency: 'every-week',
        momentInTheDay: 'day',
        comment: '',
        termsAndConditions: false,
    });

    function handleFormChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormValues({
            ...formValues,
            [changedFieldName]: newValue,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(
            `Voornaam: ${formValues.firstname}
            Achternaam: ${formValues.lastname} 
            Leeftijd: ${formValues.age} jaar
            Postcode: ${formValues.zipcode} 
            Bezorgfrequentie: ${formValues.deliveryFrequency}
            Bezorgmoment: ${formValues.momentInTheDay}
            Opmerking: ${formValues.comment}
            Algemene voorwaarden: ${formValues.termsAndConditions}
            
            Hoeveelheid aardbeien: ${amountOfStrawberries}
            Hoeveelheid bananen: ${amountOfBananas}
            Hoeveelheid appels: ${amountOfApples}
            Hoeveelheid kiwi's: ${amountOfKiwis}`
        );
    }

    return (
        <>
            <main className="outer-container">

                <section className="inner-container section-shoppinglist">
                    <h1>Fruitmand bezorgservice</h1>
                    <Product
                        productName="🍓 Aardbeien"
                        amountCounter={amountOfStrawberries}
                        setAmountCounter={setAmountOfStrawberries}
                    />

                    <Product
                        productName="🍌 Bananen"
                        amountCounter={amountOfBananas}
                        setAmountCounter={setAmountOfBananas}
                    />

                    <Product
                        productName="🍎 Appels"
                        amountCounter={amountOfApples}
                        setAmountCounter={setAmountOfApples}
                    />

                    <Product
                        productName="🥝 Kiwi's"
                        amountCounter={amountOfKiwis}
                        setAmountCounter={setAmountOfKiwis}
                    />

                    <Button
                        classNames="btn btn-reset"
                        buttonType="reset"
                        onClickFunction={resetFruitAmounts}
                    >
                        Reset
                    </Button>

                </section>

                <form className="section-form inner-container" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend><h2>Contactformulier</h2></legend>

                        <InputField
                            inputName="firstname"
                            inputLabel="Voornaam"
                            inputType="text"
                            inputValue={formValues.firstname}
                            inputChangeHandler={handleFormChange}
                        />

                        <InputField
                            inputName="lastname"
                            inputLabel="Achternaam"
                            inputType="text"
                            inputValue={formValues.lastname}
                            inputChangeHandler={handleFormChange}
                        />

                        <InputField
                            inputName="age"
                            inputLabel="Leeftijd"
                            inputType="number"
                            inputValue={formValues.age}
                            inputChangeHandler={handleFormChange}
                        />

                        <InputField
                            inputName="zipcode"
                            inputLabel="Postcode"
                            inputType="text"
                            inputValue={formValues.zipcode}
                            inputChangeHandler={handleFormChange}
                        />

                        <label htmlFor="delivery-frequency">Bezorgfrequentie</label>
                        <select
                            name="delivery-frequency"
                            id="delivery-frequency"
                            value={formValues.deliveryFrequency}
                            onChange={handleFormChange}
                        >
                            <option value="every-week">Iedere week</option>
                            <option value="every-2-weeks">Iedere 2 weken</option>
                            <option value="every-month">Iedere maand</option>
                        </select>

                        <span>
                        <label htmlFor="momentInTheDay-day">
                            <input
                                id="momentInTheDay-day"
                                type="radio"
                                name="momentInTheDay"
                                value="day"
                                checked={formValues.momentInTheDay === "day"}
                                onChange={handleFormChange}
                            />
                            Overdag
                        </label>
                        <label htmlFor="momentInTheDay-night">
                            <input
                                id="momentInTheDay-night"
                                type="radio"
                                name="momentInTheDay"
                                value="evening"
                                checked={formValues.momentInTheDay === "evening"}
                                onChange={handleFormChange}
                            />
                            's Avonds
                        </label>
                            </span>

                        <label htmlFor="comment">Opmerking</label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={formValues.comment}
                            onChange={handleFormChange}
                        />

                        <label htmlFor="termsAndConditions">
                            <input
                                id="termsAndConditions"
                                type="checkbox"
                                name="termsAndConditions"
                                checked={formValues.termsAndConditions}
                                onChange={handleFormChange}
                            />
                            Ik ga akkoord met de voorwaarden
                        </label>

                        <Button
                            classNames="btn btn-submit"
                            buttonType="submit"
                            onClickFunction={handleSubmit}
                        >
                            Verzend
                        </Button>
                    </fieldset>
                </form>
            </main>
        </>
    )
}

export default App
