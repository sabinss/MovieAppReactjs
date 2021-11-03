import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { apiConfig } from '../../config/api-config';
import axios from "axios";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const Detail = () => {
    const [movieData, setMovieData] = useState<any>({});
    const [tvShowData, setTvShowData] = useState<any>({});
    const [imageUrl, setImageUrl] = useState('data:image/png;base64,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');
    const [videoUrl, setVideoUrl] = useState<any>(null);
    const param: any = useParams();
    const query = useQuery();
    console.log('query', query.get('type'))
    const movieDetailUri = `${apiConfig.BASE_URI}movie/${param.id}?api_key=${apiConfig.API_KEY}`;
    const tvShowUrl = `${apiConfig.BASE_URI}tv/${param.id}?api_key=${apiConfig.API_KEY}`;

    useEffect(() => {
        (async function () {
            query.get('type') == 'movie' ? constructMovieData() : constructTvShowData();
            fetchMovieTrailer(query.get('type'));
        })()
    }, [param.id])

    const constructMovieData = async () => {
        const movieDetail: any = await axios.get(movieDetailUri);
        const { belongs_to_collection } = movieDetail.data;
        if (belongs_to_collection && belongs_to_collection.poster_path != null) {
            setImageUrl(getImageUrl(belongs_to_collection.poster_path));
        }

        setMovieData(movieDetail.data ?? {});
    }

    const constructTvShowData = async () => {
        const tvShowDetail: any = await axios.get(tvShowUrl);
        const { poster_path } = tvShowDetail.data;
        setImageUrl(getImageUrl(poster_path));
        setTvShowData(tvShowDetail.data);
    }

    const getImageUrl = (name: string) => {
        const imageUrl: any = `https://image.tmdb.org/t/p/w500/${name}`;
        return imageUrl;

    }

    const fetchMovieTrailer = async (name: any) => {
        if (name) {
            const type = name == 'movie' ? 'movie' : 'tv';
            const trailorUrl = `${apiConfig.BASE_URI}${type}/${param.id}/videos?api_key=${apiConfig.API_KEY}`;

            const response: any = await axios.get(trailorUrl);
            const videoKeys = response?.data?.results.map((data: any) => data.key);
            if (videoKeys.length > 0) {
                setVideoUrl(`https://www.youtube.com/embed/${videoKeys[0]}`);
            }
        }
    }

    const renderMovieInfo = () => {
        return <div className="Movie_detail_info">
            <p>Average Rating:{movieData.vote_average}/ 10</p>
            <h2>{movieData.original_title}</h2>
            <p>Playing on Netflix</p>
        </div>
    }
    const renderTvShowInfo = () => {
        return <div className="Movie_detail_info">
            <p>Averate Rating: {tvShowData.vote_average}/ 10</p>
            <h2>{tvShowData.name}</h2>
            {
                (tvShowData?.networks && tvShowData?.networks.length > 0) && <p>Playing on {tvShowData?.networks[0].name}</p>
            }

        </div>
    }
    return (
        <>
            <div className="Wrapper">
                <h1 style={{ 'textAlign': 'center' }}>{query.get('type') == 'movie' ? 'Trending Movies' : 'Trending Tv Shows'}</h1>
                <div className="Movie_detail">
                    <div className="Movie_detail_image">
                        {imageUrl && <img src={`${imageUrl}`} style={{ "objectFit": "cover" }} alt="No Preview Image" />}
                    </div>
                    {
                        query.get('type') == 'movie' ? renderMovieInfo() : renderTvShowInfo()
                    }
                </div>
                <div className="Movie_trailer">
                    {
                        videoUrl && <iframe
                            width="820"
                            height="480"
                            src={`${videoUrl}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    }
                </div>
            </div>

        </>
    )
}
