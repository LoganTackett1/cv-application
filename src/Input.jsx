import './Input.css';

// eslint-disable-next-line react/prop-types
function Input ({dataSetter,labelId,label}) {

    function handleChange (event) {
        dataSetter(event.target.value);
    }

    return (
        <>
            <label htmlFor={labelId}>{label}</label>
            <input name={labelId} id={labelId} type="text" onChange={handleChange}/>
        </>
    )
}

export default Input;