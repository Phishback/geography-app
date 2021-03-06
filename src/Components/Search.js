import React, {Component} from 'react';
import '../App.css';

class Search extends Component {

  render() {
    return(
      <div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Type a country to begin" aria-label="" aria-describedby="basic-addon1" value={this.props.searchText} onChange={this.props.passInput}/>
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">Search</button>
            </div>
          </div>
          <div className="alert alert-info" role="alert">
            Can't find what you're looking for? Create an entry <a href=""> here. </a>
          </div>
        </div>  
    );
  }
}

export default Search;