import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../api/api';

export const Cast = () => {
    const [cast, setCast] = useState([]);
    const imgUrl = 'https://image.tmdb.org/t/p/w400';
    const { movieId } = useParams();

    useEffect(() => {
        getCast(movieId)
        .then(data => {
            setCast(data);
        })
        .catch(error => console.log(error));
    }, [movieId]);

    return (
        <>
            <ul>
                {cast?.map(author => {
                    const { id, original_name, character, profile_path } = author;
                    return (
                            <li key={id}>
                                <img
                                    src={profile_path && imgUrl + profile_path}
                                    alt=""
                                    width="100px"
                                />
                                <p>{original_name}</p>
                                <p>Character: {character}</p>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
};