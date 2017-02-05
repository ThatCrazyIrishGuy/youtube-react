import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import _ from 'lodash';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyBtGDcDYuQpR2cbtwhYaH2NtwhWdhBYNiU';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
     };

     this.videoSearch('cats');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term, maxResults: 6}, videos => {
      this.setState({
        videos
      });
      if(!this.state.selectedVideo){
        this.setState({
          selectedVideo: videos[0]
        });
      }
    });
  }

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300)

    return (
      <div className="row">
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
