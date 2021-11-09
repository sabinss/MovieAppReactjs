import React from 'react'
import { MovieItem } from './MovieItem';

export const MovieList = (props: any) => {
    const handleClick = (id: number) => {
        props.history.push(`/movie/detail/${id}?type=movie`);
    }
    return (
        <div className="MovieList">
            <div className="header_tvShows">
                <h2>Trending TV Shows</h2>
            </div>
            {
                props.data.slice(0, 13).map((movie: any) => {
                    return <MovieItem movie={movie} handleOnClick={handleClick} />
                })
            }
        </div>
    )
}

