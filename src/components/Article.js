import React from "react";
import MinutesToRead from "./MinutesToRead";
import {nanoid} from "nanoid"

function Article({title, date="January 1, 1970", preview, minutes}) {
    console.log(preview)
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <MinutesToRead key={nanoid()} minutes={minutes}/>
            <p>{preview}</p>
        </article>
    )
}

export default Article