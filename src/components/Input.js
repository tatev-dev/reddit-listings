import React from 'react'

function Input({ changeFeed, reditName, setReditName, changeAmount }) {
    return (
        <div className="listings-input">
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Search   <i className="fa fa-search"></i></span>
                </div>
                <form onSubmit={changeFeed}>
                    <input type="text"
                        value={reditName}
                        onChange={e => setReditName(e.target.value)} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </form>

            </div>


            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle btn-lg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#" onClick={(e) => changeAmount(e)} value="5">5</a>
                    <a className="dropdown-item" href="#" onClick={(e) => changeAmount(e)} value="10">10</a>
                    <a className="dropdown-item" href="#" onClick={(e) => changeAmount(e)} value="25">25</a>
                </div>
            </div>
        </div>
    );
}

export default Input;
