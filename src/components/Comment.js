import React, { useState } from 'react'


function Comment({ item, formatDate }) {

    const [replyFlag, setReplyFlag] = useState(false);

    const showReplies = () => {
        setReplyFlag(true)
    }


    return (
        <div className="card text-left">
            <div className="card-header">
                {item.author}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{item.body}</p>
                    <footer className="blockquote-footer">{formatDate(item.created)}</footer>
                </blockquote>

                {item.replies && item.replies.data.children ?
                    !replyFlag ? <button onClick={showReplies} className="btn btn-outline-dark"><i className="fa fa-comment"></i> Show replies</button>
                        :
                        <div className="card-replies">   {item.replies && item.replies.data.children ?
                            item.replies.data.children.map((obj, index) =>
                                <Comment item={obj.data} key={index} formatDate={formatDate} />) : ''}</div>
                    : ''
                }
            </div>
        </div>
    );
}

export default Comment;
