import React from 'react';

import {Grid, Paper, Typography} from '@material-ui/core';

const VideoDetail = ({video, darkMode}) => {
    if(!video) return <Typography variant="h6">Loading...</Typography>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    const {title, channelTitle, publishedAt, description} = video.snippet;

    return (
        <React.Fragment>
            <Paper elevation={6} className="videoContainer">
               <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} className="iframe" />
               <Grid item xs={12}>
                   <Typography variant="h6">{title}</Typography>
               </Grid>
            </Paper>
            <Paper elevation={6} style={{padding: '15px', marginTop: '10px'}}>
               <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
               <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
               <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail;