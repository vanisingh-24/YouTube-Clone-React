import React from 'react';

import {Grid} from '@material-ui/core';

import {SearchBar, VideoDetail, VideoList} from './components';

import youtube from './api/youtube';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.handleSubmit('pdf generation with react and node');
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video});
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyCWfni-Sm6y5J8iYKQxLU_3Sd3uS5CMsAU',
                q: searchTerm
             }
        });

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    render() {
        const {selectedVideo, videos} = this.state;
        return (
           <Grid justify="center" container spacing={10}>
               <Grid item xs={12}>
                   <Grid container spacing={10}>
                       <Grid item xs={12}>
                           {/* SEARCH BAR */}
                           <SearchBar onFormSubmit={this.handleSubmit} />
                       </Grid>
                       <Grid item xs={8}>
                           {/* VIDEO DETAILS */}
                           <VideoDetail video={selectedVideo} />
                       </Grid>
                       <Grid item xs={4}>
                           {/* VIDEO LIST */}
                           <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                       </Grid>
                   </Grid>
               </Grid>
           </Grid>
        )
    }
}

export default App;