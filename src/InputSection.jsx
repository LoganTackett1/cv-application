import './InputSection.css';
import Input from "./Input";
import InpBtn from './InpBtn';
import EduInp from './EduInp';
import ExpInp from './ExpInp';

// eslint-disable-next-line react/prop-types
function InputSection ({cvState,cvSetter}) {
    return (
        <div id="inputSection">
            <Input cvState={cvState} cvSetter={cvSetter} type="text" setParam="name" labelId="name" label="Name:" />
            <Input cvState={cvState} cvSetter={cvSetter} type="email" setParam="email" labelId="email" label="Email:" />
            <Input cvState={cvState} cvSetter={cvSetter} type="tel" setParam="phone" labelId="phone" label="Phone Number:" />
            <Input cvState={cvState} cvSetter={cvSetter} type="file" setParam="imgSrc" labelId="imgSrc" label="Profile Picture:" />
            {
            // eslint-disable-next-line react/prop-types
            cvState.education.map(education => (
                <EduInp key={education.uuid} uuid={education.uuid} cvState={cvState} cvSetter={cvSetter}/>
            ))
            }
            <InpBtn cvState={cvState} cvSetter={cvSetter} type="edu"/>
            {
            // eslint-disable-next-line react/prop-types
            cvState.experience.map(experience => (
                <ExpInp key={experience.uuid} uuid={experience.uuid} cvState={cvState} cvSetter={cvSetter}/>
            ))
            }
            <InpBtn cvState={cvState} cvSetter={cvSetter} type="exp"/>
        </div>
    )
}

export default InputSection;