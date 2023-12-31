import './Input.css';

// eslint-disable-next-line react/prop-types
function Input ({cvState,cvSetter,type,setParam,labelId,label}) {

    function handleChange (event) {
        const newState = {...cvState};
        if (setParam === "imgSrc") {
            newState[setParam] = URL.createObjectURL(event.target.files[0]);
        } else {
            newState[setParam] = event.target.value;
    }
        cvSetter(newState);
    }

    return (
        <div id="input">
            <label htmlFor={labelId}>{label}</label>
            <input value={setParam == "imgSrc" ? "" : cvState[setParam]} name={labelId} id={labelId} type={type} onChange={handleChange}/>
        </div>
    )
}

export default Input;