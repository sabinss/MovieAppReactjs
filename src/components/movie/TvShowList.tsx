import React from 'react'
import { MovieItem } from './MovieItem'

export const TvShowList = (props: any) => {
    const handleClick = (id: number) => {
        props.history.push(`/movie/detail/${id}?type=tv_show`);
    }

    return (
        <div className="TvShowList">
            <div className="Header_movies">
                <h2>Trending Movies</h2>
            </div>
            {
                props.data.slice(0, 13).map((tvShow: any) => {
                    return <MovieItem movie={tvShow} handleOnClick={handleClick} />
                })
            }
        </div>
    )
}
