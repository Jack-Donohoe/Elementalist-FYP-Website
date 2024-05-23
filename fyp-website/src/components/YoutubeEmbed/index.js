import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive" style={{width : "100%" , height : "100%", alignItems : "center"}}>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      style={{paddingTop: "1em",width: "100%", height: "90%"}}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Demo Video"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
