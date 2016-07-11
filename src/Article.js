import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

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

export default Article