/* eslint-disable react/prop-types */
import './OutputSection.css';

function OutputSection ({ cvState }) {
    function isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }

    function renderProp (prop) {
        if (!isBlank(cvState[prop])) {
            return (
                <>
                <h2>{prop}:{cvState[prop]}</h2>
                </>
            );
        }
    }

    return (
        <div id="outputSection">
            <h1>CV Application</h1>
            <div className='upper-left'>
                {renderProp("name")}
                {renderProp("email")}
                {renderProp("phone")}
                {cvState.imgSrc ? <img src={cvState.imgSrc}></img> : <></>}
            </div>
            {
            cvState.education.length > 0 ? (<h1>Education:</h1>) : <></>
            }
            <ul>
                {
                cvState.education.map(item => (
                    <li key={item.uuid}>
                        <ul>
                            <li>Degree : {item.degree}</li>
                            <li>School: {item.school}</li>
                            <li>Started {item.start} and Ended {item.end}</li>
                        </ul>
                    </li>
                ))
                }
            </ul>
            {
            cvState.experience.length > 0 ? (<h1>Experience:</h1>) : <></>
            }
            <ul>
                {cvState.experience.map(item => (
                    <li key={item.uuid}>
                        <ul>
                            <li>Title : {item.title}</li>
                            <li>Employer: {item.employer}</li>
                            <li>Started {item.start} and Ended {item.end}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default OutputSection;