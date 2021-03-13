import React, { Component } from 'react';
import createReactClass  from "create-react-class";
var ContentEditable = createReactClass({
    render: function(){
        return <div 
            onInput={this.emitChange} 
            onBlur={this.emitChange}
            contentEditable
            dangerouslySetInnerHTML={{__html: this.props.html}}></div>;
    },
    shouldComponentUpdate: function(nextProps){
        return nextProps.html !== this.lastHtml;
    },
    emitChange: function(e){
        var html = e.target.innerHTML;
        if (this.props.onChange && html !== this.lastHtml) {

            this.props.onChange({
                target: {
                    value: html
                }
            });
        }
        this.lastHtml = html;
    }
});
export default ContentEditable;

