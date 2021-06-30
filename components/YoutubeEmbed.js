import React from 'react';
import PropTypes from 'prop-types';


const YoutubeEmbed = ({embedId}) => {
    return(
        <iframe
            width='1600px'
            height='900px'
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    )
}

YoutubeEmbed.propTypes={
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed

