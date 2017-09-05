import React from 'react';

const NoMatch = ({ location }) => {
    return (
        <div>
            404
            can't find {location.pathname}
        </div>
    );
};

export default NoMatch;