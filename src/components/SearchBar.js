import React from 'react';

import {Paper, TextField} from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }
    
    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value});
    }

    handleSubmit = (event) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }

    render() {
        return(
           <Paper elevation={6} >
               <form onSubmit={this.handleSubmit} className="searchBar">
                   <TextField 
                      fullWidth 
                      placeholder="Search..."
                      name="searchTerm"
                      value={this.state.searchTerm}
                      onChange={this.handleChange} />
               </form>
           </Paper>
        )
    }
}

export default SearchBar;