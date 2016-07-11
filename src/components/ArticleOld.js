import React from 'react'
import CommentList from './CommentList'

const ArticleOld = React.createClass({
    render() {
        const { article: { title, text, comments }, isOpen, toggleSingleOpen } = this.props
        const body = isOpen ? <section>{ text } <CommentList comments = {comments} /></section> : null

        return (
            <div>
                <h1 onClick = {toggleSingleOpen(this.id)}>{ title }</h1>
                {body}
            </div>
        )
    }
})

export default ArticleOld