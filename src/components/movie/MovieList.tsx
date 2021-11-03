import React from 'react'
import { MovieItem } from './MovieItem';

export const MovieList = (props: any) => {
    const handleClick = (id: number) => {
        console.log('moviewLIst', props, id);
        props.history.push(`/movie/detail/${id}?type=movie`);
    }
    return (
        <div className="MovieList">
            {
                props.data.slice(0, 13).map((movie: any) => {
                    return <MovieItem movie={movie} handleOnClick={handleClick} />
                })
            }
        </div>
    )
}

