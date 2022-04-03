import axios from 'axios';
import { useEffect, useState } from 'react';

const DOG_API = 'https://dog.ceo/api/breeds/image/random';

export const Dogs = () => {

    const [dogImages, setDogImages] = useState([]);
    const [isLoadingDog, setIsLoadingDog] = useState(false);

    const fetchDog = async () => {
        setIsLoadingDog(true);
        try {
            const res = await axios.get(DOG_API);
            setDogImages([...dogImages, res.data.message]);
        } catch (error) {
            alert('API error')
        } finally {
            setIsLoadingDog(false);
        }
    };

    useEffect(() => {
        fetchDog();
    }, [])

    return <div>
        <div>Dogs</div>
        <button onClick={fetchDog} disabled={isLoadingDog}>Fetch dog</button>
            {
                isLoadingDog && <p>Loading...</p>
            }
        <div>
            {
                dogImages.map(imageUrl => <img key={imageUrl} width="400" height="400" src={imageUrl} />)
            }
        </div>
    </div>
}