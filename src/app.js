import { articles as articles } from './fixtures'
import ArticleList from './ArticleList'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

render(<Root />, document.getElementById('container'))
