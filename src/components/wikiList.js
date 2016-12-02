import React from 'react';

class WikiListItem extends React.Component {
        render(){
    return (
       <div>
       <a href={this.props.url} className="single-result" target="_blank">
        <h3>{this.props.title}</h3>
         </a>
          <p>{this.props.description}</p>
       </div>    
    );   
    }
}

export default WikiListItem;