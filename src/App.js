import React from 'react';

import {Grid, MuiThemeProvider, createMuiTheme} from '@material-ui/core';

import {SearchBar, VideoDetail, VideoList, DarkMode} from './components';

import youtube from './api/youtube';
import './style.css';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        darkMode: false
    }

    componentDidMount() {
        this.handleSubmit('React JS Traversy Media');
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video});
    }

    handleChange = () => {
        this.setState({darkMode: !this.state.darkMode});
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyCWfni-Sm6y5J8iYKQxLU_3Sd3uS5CMsAU',
                type: 'video',
                q: searchTerm
             }
        });

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    render() {
        const {selectedVideo, videos, darkMode} = this.state;
        const {handleChange} = this.props;

        const theme = createMuiTheme({
            palette: {
                type: 'dark',
            }
        });

        return (
           <MuiThemeProvider theme={darkMode ? theme : null}>

           <Grid container spacing={4} className={darkMode ? "darkBackground" : null}>
               <Grid className="videoContainer" item xs={12}>
                   <Grid container spacing={2} alignItems="center">
                       <Grid item xs={8}>
                           {/* SEARCH BAR */}
                           <SearchBar onFormSubmit={this.handleSubmit} />
                       </Grid>
                       <Grid item xs={4}>
                            {/* DARK MODE */}
                            <DarkMode onChange={this.handleChange} /> 
                       </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                       <Grid item xs={8}>
                           {/* VIDEO DETAILS */}
                           <VideoDetail video={selectedVideo} />
                       </Grid>
                       <Grid className="videoCard" item xs={4}>
                           {/* VIDEO LIST */}
                           <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                       </Grid>
                   </Grid>
               </Grid>
           </Grid>
        </MuiThemeProvider>
        )
    }
}

export default App;