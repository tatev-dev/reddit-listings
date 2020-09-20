import React, { useState, useEffect } from 'react'
import '../components/style.css'
import Listing from '../components/Listing'
import Comments from '../components/Comments'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Input from '../components/Input'

function Listings() {

    const [listings, setListings] = useState([]);
    const [response, setResponse] = useState({});
    const [hideFlag, setHideFlag] = useState(false);
    const [selectedListing, setSelectedListing] = useState(false);
    const [limit, setLimit] = useState(25);
    const [after, setAfter] = useState('');
    const [before, setBefore] = useState('');
    const [page, setPage] = useState(1);
    const [feed, setFeed] = useState('pics');
    const [reditName, setReditName] = useState('');
    const [sorry, setSorry] = useState(false);



    const formatDate = (date) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let x = new Date(date * 1000);

        if (!isNaN(date)) {
            let finalDate = ('0' + x.getHours()).slice(-2) + ":" +
                ('0' + x.getMinutes()).slice(-2) + " " +
                monthNames[x.getMonth()].slice(0, 3) + " " +
                x.getDate() + " "
            return finalDate;
        }

    }

    const hideAll = (item) => {
        if (!hideFlag) {
            setHideFlag(true);
            setSelectedListing(item)
        }
        else
            setHideFlag(false)
    }

    const changeAmount = (e) => {
        setLimit(e.target.getAttribute('value'))
    }

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${feed}.json?limit=${limit}&after=${after}&before=${before}&count=${limit}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setSorry(false)
                    setListings(result.data.children)
                    setResponse(result.data)
                })
            .catch(err => {
                setSorry(true)

                console.log(err)
            })

    }, [limit, after, before, feed]);

    const changeAfter = () => {
        setAfter(response.after)
        setBefore('')
        setPage(page + 1)


    }

    const changeBefore = () => {
        setBefore(response.before)
        setAfter('')
        setPage(page - 1)

    }

    const changeFeed = (e) => {
        e.preventDefault()
        setFeed(reditName)

    }

    return (
        <div>
            <div>
                <Hero />
                <div className="listings-main">
                    {
                        !hideFlag ? <Input changeFeed={changeFeed} reditName={reditName} setReditName={setReditName} changeAmount={changeAmount} /> : ""}
                    {!sorry ?
                        (!hideFlag ? <ul className="listings-list">
                            {listings.map((item, index) =>
                                <div onClick={() => hideAll(item)} key={index}>
                                    <Listing thumbnail={item.data.thumbnail}
                                        title={item.data.title}
                                        author={item.data.author}
                                        score={item.data.score}
                                        created={formatDate(item.data.created)}
                                        permalink={item.data.permalink}
                                        num_comments={item.data.num_comments}
                                    />
                                </div>)}

                            <Nav page={page} changeBefore={changeBefore} changeAfter={changeAfter} after={response.after} />
                        </ul> : <div className="single-listing">
                                <button onClick={hideAll} type="button" className="btn btn-secondary  btn-lg ">All Listings</button>

                                <Listing thumbnail={selectedListing.data.thumbnail}
                                    title={selectedListing.data.title}
                                    author={selectedListing.data.author}
                                    score={selectedListing.data.score}
                                    created={formatDate(selectedListing.data.created)}
                                    selftext={selectedListing.data.selftext}
                                    permalink={selectedListing.data.permalink}
                                    num_comments={selectedListing.data.num_comments}
                                />
                                <Comments url={selectedListing.data.permalink} formatDate={formatDate} commentAmount={selectedListing.data.num_comments} />
                            </div>) : <h2>Something the feed is not found. Try something else</h2>
                    }
                </div >
            </div>
        </div>
    )
}

export default Listings;
