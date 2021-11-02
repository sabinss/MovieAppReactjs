import React from 'react'
import { MovieItem } from './MovieItem'

export const TvShowList = ({ data }: { data: any[] }) => {
    return (
        <div className="TvShowList">
            {
                data.slice(0, 13).map((tvShow: any) => {
                    return <MovieItem movie={tvShow} />
                })
            }
        </div>
    )
}
