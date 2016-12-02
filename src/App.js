import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search.js';
import Display from './components/display.js';
import $ from "jquery";
class App extends React.Component {
  constructor(props){
        super(props);
        this.state = {
            term:'',
            result: [],
          previous:'',
        };
        this.isClicked=false;
        this.change = this.change.bind(this);
        this.getWiki = this.getWiki.bind(this);
    }
    getWiki(e){
        e.preventDefault();
        this.isClicked=true;
        if(this.state.term!==''){
          $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+ this.state.term +"&format=json&callback=?",function(data) {
            this.setState({ result : data });
    }.bind(this));
        }
        
    }
    
    change(event){
        this.setState({
            term: event.target.value
        });
    }
    render(){
        return (
        <div className="container-fluid">
            <h1>Wikipedia Viewer</h1>
            <Search change={this.change} getWiki={this.getWiki} />
            <Display txt={this.state.term} wiki={this.state.result} isClicked={this.isClicked}/>
            </div>
        );
    }
}

export default App;
