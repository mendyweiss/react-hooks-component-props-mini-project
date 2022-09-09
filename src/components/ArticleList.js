import React from "react"
import Article from "./Article"
import blogData from "../data/blog";


function ArticleList() {
    const articles = blogData.posts.map(post => {return <Article key={post.title} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
})

    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList