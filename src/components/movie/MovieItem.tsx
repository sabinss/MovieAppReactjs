import React, { useState } from 'react';
import { CustomModal } from '../../components/'
import { Button } from 'react-bootstrap';
import useRequest from '../../hooks/use-request';
import { apiConfig } from '../../config/api-config';
import axios from 'axios';

export const MovieItem = (
    { movie: { id, original_title, vote_average, video, poster_path, name } }:
        { movie: { id: number, original_title: string, name: string, vote_average: number, video: boolean, poster_path: string } }) => {

    const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const [showModal, setModal] = useState(false);

    const handleClick = async (id: number) => {

        fetchVideo(id);
        setModal(!showModal);
    }

    const fetchVideo = async (id: number) => {
        const videoApiUri = `${apiConfig.BASE_URI}movie/${id}/videos?api_key=${apiConfig.API_KEY}`;
        try {
            const result = await axios.get(videoApiUri);
            console.log('video result', result)
        } catch (e) {

        }

    }

    return (
        <div className="MovieItem">
            <div className="MovieItem_image">
                <img src={`${imageUrl}`} />
            </div>

            <div className="MovieItem_info">
                <p>{vote_average}/ 10</p>
                <h2>{original_title ?? name}</h2>
                <p>Playing on Netflix</p>
                {/* {showModal && <CustomModal show={showModal} handleClose={(flag) => setModal(!flag)} />} */}
                <Button variant="link" onClick={() => handleClick(id)} style={{ "textDecoration": 'none', "color": "white" }}>Watch Trailer</Button>
            </div>
        </div>
    )
}
