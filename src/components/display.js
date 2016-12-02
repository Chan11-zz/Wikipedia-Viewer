/* eslint-disable */
import React from 'react';
import WikiListItem from './wikiList.js';
//Display Component
class Display extends React.Component {
    render() {
        var updatedTerm= this.props.txt;
        var a,test; 
        updatedTerm!='' ? a=updatedTerm : a="_______";
        var steam = this.props.wiki ; 
        if(this.props.isClicked){
           var wikiItems = steam[1].map(function(item,index){
       return <WikiListItem title={steam[1][index]} description={steam[2][index]} url={steam[3][index]} key={index}/>   
    });
         }
       return(
        <div>
           <p>You are searching for "{a}"</p>
           <div>{wikiItems}</div>
           <div className="footer text-center">desinged & coded by <a href="http://codepen.io/Chan11/" target="_blank"><strong>Chandrahas</strong></a></div>
       </div>
       );
    }
    }
    
    
export default Display;