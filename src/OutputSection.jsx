/* eslint-disable react/prop-types */
import './OutputSection.css';

function OutputSection ({ cvState }) {
    return (
        <div id="outputSection">
            <h1>
                General Info:
            </h1>
            <ul>
                <li>{cvState.name}</li>
                <li>{cvState.email}</li>
                <li>{cvState.phone}</li>
            </ul>
            <h1>
                Education:
            </h1>
            <ul>
                {cvState.education.map(item => (
                    <li key={item.uuid}>
                        <ul>
                            <li>Degree : {item.degree}</li>
                            <li>School: {item.school}</li>
                            <li>Started {item.start} and Ended {item.end}</li>
                        </ul>
                    </li>
                ))}
            </ul>
            <h1>
                Experience:
            </h1>
            <ul>
                {cvState.experience.map(item => (
                    <li key={item.uuid}>
                        <ul>
                            <li>Title : {item.title}</li>
                            <li>Started {item.start} and Ended {item.end}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default OutputSection;