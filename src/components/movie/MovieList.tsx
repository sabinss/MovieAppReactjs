import React from 'react'
import { MovieItem } from './MovieItem';

export const MovieList = ({ data }: { data: any[] }) => {
    return (
        <div className="MovieList">
            {
                data.slice(0, 13).map((movie: any) => {
                    return <MovieItem movie={movie} />
                })
            }
        </div>
    )
}
