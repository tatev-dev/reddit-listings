import React, { useState } from 'react'
import Comment from './Comment'

function Comments({ url, formatDate, commentAmount }) {

    const [commentFlag, setCommentFlag] = useState(false);
    const [comments, setComments] = useState([]);

    const showComments = () => {

        fetch(`https://www.reddit.com${url}.json`)

            .then(res => res.json())
            .then(
                (result) => {
                    setComments(result[1].data.children)
                    setCommentFlag(true)
                })
    }



    return (
        <div >
            {commentAmount != 0 ? (!commentFlag ? <button onClick={showComments} className="btn btn-primary  btn-lg "><i className="fa fa-comment"></i> Show comments</button> :

                comments.map((item, index) =>
                    < Comment item={item.data} key={index} formatDate={formatDate} />
                )) : ""
            }
        </div>
    );
}

export default Comments;
