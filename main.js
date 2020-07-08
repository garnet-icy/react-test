import React from 'react'
import ReactDom from 'react-dom'
const div = React.createElement('div',{
  title:"hello world"
},'hello react')

ReactDom.render(div,document.getElementById('app'))