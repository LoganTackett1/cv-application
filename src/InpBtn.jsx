import './InpBtn.css';
import generateUUID from './UUIDgen';

// eslint-disable-next-line react/prop-types
function InpBtn ({cvState,cvSetter,type}) {
    function handleClick () {
        if (type==="edu") {
            const newState = {...cvState};
            const newEdu = {
                uuid: generateUUID(),
                degree:"",
                school:"",
                start:"",
                end:""
            };
            newState.education.push(newEdu);
            cvSetter(newState);
        } else if (type==="exp") {
            const newState = {...cvState};
            const newExp = {
                uuid: generateUUID(),
                title:"",
                start:"",
                end:""
            };
            newState.experience.push(newExp);
            cvSetter(newState);
        }
    }

    return (
        <button id="newInput" onClick={handleClick}>{type === "edu" ? "Add Education" : "Add Experience"}</button>
    );
}

export default InpBtn;