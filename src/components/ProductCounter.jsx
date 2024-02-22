function ProductCounter({amountCounter, setAmountCounter}) {
    return (
        <>
            <div className="counter-wrapper">
                <button
                    className="btn btn-counter"
                    disabled={ amountCounter <= 0 }
                    onClick={() => setAmountCounter(prev => prev - 1) }>-
                </button>
                <p>{ amountCounter }</p>
                <button
                    className="btn btn-counter"
                    onClick={() => setAmountCounter(prev => prev + 1) }
                >+
                </button>
            </div>
        </>
    );
}

export default ProductCounter;