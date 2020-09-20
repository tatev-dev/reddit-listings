import React from 'react';


function Listing({ thumbnail, author, title, score, created, selftext, permalink, num_comments }) {
    return (
        <div >

            <li className="listings-list">


                <div className="jumbotron d-flex">
                    <img src={thumbnail} className="listing-img" alt="..."></img>
                    <div className="listing-info">
                        <div className="d-flex  align-items-center listing-score">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <span>{score}</span>
                        </div>
                        <div className=" d-flex align-items-baseline justify-content-between">
                            <div className="d-flex align-items-baseline">
                                <span><i>author</i></span>
                                <h1 className="display-5">{author}</h1>
                            </div>

                            <p>{created}</p>

                        </div>
                        <hr className="my-4" />
                        <div className="listing-text">
                            <p className="lead">{title}</p>
                            <p>{selftext}</p>
                            <a className="btn btn-link " href="#" role="button">{permalink}</a>
                            <div>
                                <i className="fa fa-comment"></i>
                                <span>{num_comments}</span>
                            </div>
                        </div>

                    </div>

                </div>
            </li>
        </div>
    );
}

export default Listing;
