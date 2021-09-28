import React,{useEffect} from 'react'

export default function postApi() {
    const title="Welcome to the new page"
    const likes=40
    const link="http://www.google.com"
    return (
        <div>
            <h1>{title}</h1>
            <p>liked {likes} times</p>
            <p>{10}</p>
            <p>"hello ninjas"</p>
            <p>{[1,2,3,4,5]}</p>
            <p>{Math.random() * 15}</p>
            <a href={link} target="blank">google</a>
        </div>
    )
}
