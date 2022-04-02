import { useState } from "react";

export const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onGetSearchHandler = () => {
        console.log(searchTerm);
    }


    return (
    <div>
        <input value={searchTerm} onChange={event => setSearchTerm(event.target.value)}></input>
        <button onClick={onGetSearchHandler}>Get search</button>
    </div>
    )
    
};