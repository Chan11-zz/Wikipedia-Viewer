import React from 'react';

class Search extends React.Component {
    constructor(props){
    super(props); 
     this.state = {
            val:"Seach Here"
        };
}
    
    render(){
        return (
        <div>
            <form onSubmit={this.props.getWiki}>
            <div className="search-bar">
          <input  type="text" onChange={this.props.change}/>
              </div>
            <button className="hit btn" onClick={this.props.getWiki }><span className="searchText glyphicon glyphicon-search">Search</span></button>
         </form>
            </div>
        );
    }
}

export default Search;