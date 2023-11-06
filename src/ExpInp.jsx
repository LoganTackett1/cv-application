/* eslint-disable react/prop-types */
import './ExpInp.css';

function ExpInp ({uuid,cvState,cvSetter}) {

    function handleBase (e,param) {
        const newState = {...cvState};
        for (let i = 0; i < newState.experience.length; i++) {
            if (newState.experience[i].uuid === uuid) {
                newState.experience[i][param] = e.target.value;
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

    function getExpItem () {
        for (let i = 0; i < cvState.experience.length; i++) {
            if (cvState.experience[i].uuid === uuid) {
                return cvState.experience[i];
            }
        }
    }

    function removeSelf () {
        const newState = {...cvState};
        newState.experience = newState.experience.filter(job => job.uuid !== uuid);
        cvSetter(newState);
    }

    const currExp = getExpItem();

    return (
        <div id="expInp">
            <div className='title'>
                <label htmlFor="title">Job Title:</label>
                <input value={currExp.title} id="title" type="text" onChange={handleChange("title")}/>
            </div>
            <div className='employer'>
                <label htmlFor="employer">Employer:</label>
                <input value={currExp.employer} id="employer" type="text" onChange={handleChange("employer")}/>
            </div>
            <div className='start-end'>
                <label htmlFor="start">Start Year:</label>
                <input value={currExp.start} id="start" type="tel" onChange={handleChange("start")}/>
                <label htmlFor="end">End Year:</label>
                <input value={currExp.end} id="end" type="tel" onChange={handleChange("end")}/>
            </div>
            <button onClick={removeSelf}>Delete</button>
        </div>
    )
}

export default ExpInp;