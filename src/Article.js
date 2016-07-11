import React, { Component } from 'react';
import CommentList from './CommentList';

function Article(props){
        const { isOpen, toggleSingleOpen, article: { title, text, comments } } = props
        const body = isOpen ? <section>{ text } <CommentList comments = {comments} /></section> : null

        return (
            <div>
               <h1 onClick = {toggleSingleOpen}>{ title }</h1>
                  {body}
            </div>
        )
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