function Button({classNames, buttonType, onClickFunction, children}) {
    return (
        <button
            className={ classNames }
            type={ buttonType }
            onClick={ onClickFunction }
        >
            { children }
        </button>
    );
}

export default Button;