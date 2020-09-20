import React from 'react'

function Nav({ page, changeBefore, changeAfter, after }) {


    return (
        <nav aria-label="Page navigation ">
            <ul className="pagination justify-content-center">
                <li className={page !== 1 ? "page-item " : "page-item disabled"}>
                    <a className="page-link" href="#" tabIndex="-1" onClick={changeBefore}  >Previous</a>
                </li>

                <li className="page-item">
                    <a className="page-link" href="#" onClick={changeAfter} disabled={after}>Next</a>
                </li>
            </ul>
        </nav >
    );
}

export default Nav;
