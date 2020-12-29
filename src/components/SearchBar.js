import React from 'react';

class SearchBar extends React.Component{
    state={term:''};
    onValChange = event =>{
        this.setState({term:event.target.value});
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };
    render(){
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form' >
                    <div className='field'>
                        <label>Search for video</label>
                    </div>
                    <input type='text' value={this.state.term} onChange={this.onValChange} />
                </form>
            </div>
        );
    }
}

export default SearchBar;