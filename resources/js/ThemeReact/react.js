import React, { Component, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import ThemeReact from '../ThemeLayouts/Main';

function App(props){
return (
		<ThemeReact/>
	)
}
export default App;
ReactDOM.render(<App />, document.getElementById('ReactBody'));