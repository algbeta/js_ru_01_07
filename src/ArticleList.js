import React  from 'react'
import Article from './Article'
import toggleSingleOpen from './decorators/toggleSingleOpen'

function ArticleList(props){
        const { articles} = props;

        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {article.id == this.state.openItemId}
                toggleSingleOpen = {this.toggleSingleOpen(article.id)}
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