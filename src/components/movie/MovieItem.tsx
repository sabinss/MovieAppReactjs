import { Button } from 'react-bootstrap';

interface MovieItemProps {
    movie: any,
    handleOnClick: (id: number) => any
}

export const MovieItem = (
    { movie, handleOnClick }: MovieItemProps
) => {
    const { id, original_title,
        vote_average,
        poster_path,
        name } = movie;
    const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    return (
        <div className="MovieItem" key={id} onClick={() => handleOnClick(id)}>
            <div className="MovieItem_image">
                <img src={`${imageUrl}`} />
            </div>

            <div className="MovieItem_info">
                <p>Average Rating:{vote_average}/ 10</p>
                <h2>{original_title ?? name}</h2>
                <Button variant="link" onClick={() => handleOnClick(id)} style={{ "textDecoration": 'none', "color": "white", "padding": 0 }}>Watch Trailer</Button>
            </div>
        </div>
    )
}
