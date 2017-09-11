import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import './APagination.css';

const APagination = ({
    pagination,
    paginate
}) => {
    const { page, limit, total } = pagination;
    const pItems = [];
    const pages = Math.ceil(+total/+limit);
    for (let i = 1; i <= pages; i += 1) {
        pItems.push(
            <PaginationItem key={i} className={page === i ? 'active' : ''}>
                <PaginationLink onClick={() => paginate(i)}>{i}</PaginationLink>
            </PaginationItem>
        );
    }
    return (
        <Pagination>
            <PaginationItem>
                <PaginationLink onClick={() => paginate(page, 'prev')}>Prev</PaginationLink>
            </PaginationItem>
            {pItems}
            <PaginationItem>
                <PaginationLink onClick={() => paginate(page, 'next')}>Next</PaginationLink>
            </PaginationItem>
        </Pagination>
    );
};

Pagination.propTypes = {
    pagination: PropTypes.object,
    paginate: PropTypes.func
}

export default APagination;