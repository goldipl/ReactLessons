import axios from 'axios';
import { useState } from 'react';

const DOG_API = 'https://dog.ceo/api/breeds/image/random';

export const Dogs = () => {

    const [dogImage, setDogImage] = useState('');

    const fetchDog = async () => {
        const res = await axios.get(DOG_API);
        setDogImage(res.data.message);
    }

    return <div>
        <div>Dogs</div>
        <button onClick={fetchDog}>Fetch dog</button>
        <div>
            <img width="400" src={dogImage} />
        </div>
    </div>
}