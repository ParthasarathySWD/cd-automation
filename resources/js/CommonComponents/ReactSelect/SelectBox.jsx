import React, { Component } from 'react'
import Select from 'react-select'

function SelectBox(props) {
    
    return (
        <>
            <Select options={props.options} defaultValue={props.selected}/>
        </>
    );
}

export default SelectBox;