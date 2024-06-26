import { useEffect, useState } from "react";
import Character from "./Character/Character";

function List() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        async function fetchData () {
            const data = await fetch('https://rickandmortyapi.com/api/character');
            const { results } = await data.json();
            setCharacters(results);
            setLoading(false);
        }
        fetchData();
    }, [characters.length]);
    
    return (
        <div>
            <h2>Characters</h2>
            
            {loading ? (<div>Loading...</div>) : (characters.map((character) => {
                    <Character key={character.id} name={character.origin} image={character.image} />
                })
            )}
        </div>
    )
};

export default List;