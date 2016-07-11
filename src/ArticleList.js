import React  from 'react'
import Article from './Article'
import toggleSingleOpen from './decorators/toggleSingleOpen'

function ArticleList(props){
        const { articles, openItemId, isOpen, toggleSingleOpen } = props;

        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {article.id == openItemId && isOpen}
                toggleSingleOpen = {toggleSingleOpen(article.id)}
            />
        </li>)
        return (
            <div>
                <h1>Article list</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
}

export default toggleSingleOpen(ArticleList)