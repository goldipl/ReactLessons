import axios from 'axios';
import { useState } from 'react';

const DOG_API = 'https://dog.ceo/api/breeds/image/random';

export const Dogs = () => {

    const [dogImage, setDogImage] = useState('');
    const [isLoadingDog, setIsLoadingDog] = useState(false);

    const fetchDog = async () => {
        setIsLoadingDog(true);
        try {
            const res = await axios.get(DOG_API);
            setDogImage(res.data.message);
        } catch (error) {
            alert('API error')
        } finally {
            setIsLoadingDog(false);
        }
    };

    return <div>
        <div>Dogs</div>
        <button onClick={fetchDog} disabled={isLoadingDog}>Fetch dog</button>
        {
            isLoadingDog && <p>Loading...</p>
        }
        <div>
            <img width="400" src={dogImage} />
        </div>
    </div>
}