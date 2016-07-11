import React, { Component } from 'react';
import CommentList from './CommentList';

class Article extends Component {
    state = {
        isOpen: false
    }


    render() {
        const { isOpen, toggleSingleOpen, article: { title, text, comments } } = this.props
        const body = isOpen ? <section>{ text } <CommentList comments = {comments} /></section> : null

        return (
            <div>
               <h1 onClick = {toggleSingleOpen}>{ title }</h1>
                  {body}
            </div>
        )
    }
}



/*
function Article(props) {
    const article = props.article
//    const { article: { title, text } } = props

    return (
        <div>
            <h1>{ article.title }</h1>
            <section>{ article.text }</section>
        </div>
    )
}
*/

export default Article