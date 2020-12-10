import React from 'react'

const Pagination = props => {
    const numberOfPages = props.numberOfPages;
    const activePage = props.activePage;
    
    let pagesToShow = numberOfPages > 5 ? Array.from(Array(5).keys()) : Array.from(Array(numberOfPages).keys());
    if(numberOfPages > 5) pagesToShow = [...pagesToShow, "...", numberOfPages-1];

    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
                </li>

                {
                    pagesToShow.map(element => 
                        element === "..." 
                        ? <li class="page-item"><a class="page-link" href="#">{element}</a></li>
                        : <li class={element+1 === activePage ? "page-item active" : "page-item"}><a class="page-link" href="#">{element+1}</a></li>
                    )

                    
                }

                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
                </li>
            </ul>
            </nav>
    )
}

export default Pagination
