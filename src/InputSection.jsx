import './InputSection.css';
import Input from "./Input";

function isPrime (num) {
    if (num % 2 === 0) {
        return false;
    }

    let temp = 3;
    while (temp < num) {
        if (num % temp === 0) {
            return false;
        }
        temp += 2;
    }

    return true;
}

function generateUUID () {
    let curr = 1;
    let attempts = 0;
    let log10 = Math.log(10);
    while (Math.ceil(Math.log(curr)/log10) < 10 && attempts < 10000) {
        attempts += 1;
        const randomInt = Math.ceil(Math.random()*100);
        if (isPrime(randomInt)) {
            curr *= randomInt;
        }
    }
    
    if (Math.ceil(Math.log(curr)/log10) < 10) {
        return curr * (10 ** (10-Math.ceil(Math.log(curr)/log10) < 10));
    } else if (Math.ceil(Math.log(curr)/log10) > 10) {
        return Math.floor(curr/(10 ** (Math.ceil(Math.log(curr)/log10)-10)));
    } else {
        return curr;
    }
}

// eslint-disable-next-line react/prop-types
function InputSection ({dataSetter}) {
    return (
        <div>
            <Input dataSetter={dataSetter("name")} labelId="name" label="Name:" />
            <Input dataSetter={dataSetter("email")} labelId="email" label="Email:" />
            <Input dataSetter={dataSetter("phone")} labelId="phone" label="Phone Number:" />
        </div>
    )
}

export default InputSection;