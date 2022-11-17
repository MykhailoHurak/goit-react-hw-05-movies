import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../api/api';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        getReviews(movieId)
            .then(data => {
                if (data.length === 0) {
                    throw new Error('Data is empty');
                }
                setReviews(data);
            })
            .catch(error => {
                setError(error);
            });
        }, 
        [movieId]
    );

    return (
        <>
            {error ? (
                <p>We don`t have any reviews for this time</p>
            ) : (
                <ul>
                    {reviews.map(review => {
                        const { content, author, id } = review;
                        return (
                            <li key={id}>
                                <h3>Author: {author}</h3>
                                <p>{content}</p>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};

export default Reviews;