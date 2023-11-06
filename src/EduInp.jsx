/* eslint-disable react/prop-types */
import './EduInp.css';

function EduInp ({uuid,cvState,cvSetter}) {

    function handleBase (e,param) {
        const newState = {...cvState};
        for (let i = 0; i < newState.education.length; i++) {
            if (newState.education[i].uuid === uuid) {
                newState.education[i][param] = e.target.value;
                break;
            }
        }
        cvSetter(newState);
    }

    function handleChange (param) {
        return (
            function (event) {
                return handleBase(event,param);
            }
        );
    }

    function getEduItem () {
        for (let i = 0; i < cvState.education.length; i++) {
            if (cvState.education[i].uuid === uuid) {
                return cvState.education[i];
            }
        }
    }

    function removeSelf () {
        const newState = {...cvState};
        newState.education = newState.education.filter(edu => edu.uuid !== uuid);
        cvSetter(newState);
    }

    const currEdu = getEduItem();

    return (
        <div id="eduInp">
            <div className='degree'>
                <label htmlFor="degree">Degree/Certification:</label>
                <input value={currEdu.degree} id="degree" type="text" onChange={handleChange("degree")}/>
            </div>
            <div className='school'>
                <label htmlFor="school">School:</label>
                <input value={currEdu.school} id="school" type="text" onChange={handleChange("school")}/>
            </div>
            <div className='start-end'>
                <label htmlFor="start">Start Year:</label>
                <input value={currEdu.start} id="start" type="tel" onChange={handleChange("start")}/>
                <label htmlFor="end">End Year:</label>
            <input value={currEdu.end} id="end" type="tel" onChange={handleChange("end")}/>
            </div>
            <button onClick={removeSelf}>Delete</button>
        </div>
    )
}

export default EduInp;