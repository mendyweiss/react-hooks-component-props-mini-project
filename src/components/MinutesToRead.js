import React from "react";

function MinutesToRead(props){
    let emoji = "☕️"
    let emoji2 = "🍱"
    if (props.minutes > 30) {
        return(
            <small> {emoji2 +  " " + props.minutes + " min read"}</small>
        )} else {
            return <small> {emoji + " " + props.minutes + " min read"}</small>
        }
}

export default MinutesToRead;
