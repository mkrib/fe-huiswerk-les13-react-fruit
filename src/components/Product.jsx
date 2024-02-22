import ProductCounter from "./ProductCounter.jsx";

function Product({productName, amountCounter, setAmountCounter}) {
    return (
        <>
            <section className="section-product">
                <h2>{ productName }</h2>
                <ProductCounter
                    amountCounter={ amountCounter }
                    setAmountCounter={ setAmountCounter }
                />
            </section>
        </>
    );
}

export default Product;