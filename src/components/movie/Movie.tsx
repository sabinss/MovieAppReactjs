import React from 'react'
import { Header } from '..';
import { MovieList } from './MovieList';
import { TvShowList } from './TvShowList';

interface MovieProps {
    movieData: any[],
    tvShowData: any[]
}

export const Movie = ({ movieData, tvShowData, ...props }: MovieProps) => {
    return (
        <>
            <div className="Movie">
                <MovieList data={movieData} {...props} />
                <TvShowList data={tvShowData} {...props} />
            </div>
        </>
    )
}
