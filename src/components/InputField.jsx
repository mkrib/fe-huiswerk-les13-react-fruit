function InputField({inputName, inputLabel, inputType, inputValue, inputChangeHandler}) {
    return (
        <>
            <label htmlFor={ inputName }>{ inputLabel }</label>
            <input
                id={ inputName }
                type={ inputType }
                name={ inputName }
                value={ inputValue }
                onChange={ inputChangeHandler }
            />
        </>
    );
}

export default InputField;