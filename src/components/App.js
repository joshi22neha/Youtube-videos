import React from 'react';
import Youtube from '../APIs/Youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';


class App extends React.Component{
    state = { videos: [], selectedVideo: null };
    componentDidMount(){
        this.onTermSubmit('trees');
    }
    onTermSubmit = async term => {
        const response = await Youtube.get('/search', {
            params:{
                q:term
            }
        } );

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0] });
    };
    onVideoSelect = (item) => {
        this.setState({selectedVideo:item});
    };
    render(){
        return(
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;