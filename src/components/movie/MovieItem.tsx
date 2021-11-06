import React, { useState } from 'react';
import { CustomModal } from '../../components/'
import { Button } from 'react-bootstrap';
import useRequest from '../../hooks/use-request';
import { apiConfig } from '../../config/api-config';
import axios from 'axios';

import { withRouter } from 'react-router-dom'

interface MovieItemProps {
    movie: any,
    handleOnClick: (id: number) => any
}

export const MovieItem = (
    { movie, handleOnClick }: MovieItemProps
) => {
    const { id, original_title,
        vote_average,
        video,
        poster_path,
        name } = movie;
    const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const [showModal, setModal] = useState(false);

    const fetchVideo = async (id: number) => {
        const videoApiUri = `${apiConfig.BASE_URI}movie/${id}/videos?api_key=${apiConfig.API_KEY}`;
        try {
            const result = await axios.get(videoApiUri);
        } catch (e) {

        }

    }

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
