import React from 'react'

const pagination=({postPerpage,totalPost,paginate})=> {
    const pageNumbers=[]

    for(let i=1;i<=Math.ceil(totalPost/postPerpage);i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className="paginate">
                {pageNumbers.map(number=>(
                    <li key={number} className="page-item">
                        <a onClick={()=>paginate(number)} href='!#' className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default pagination;