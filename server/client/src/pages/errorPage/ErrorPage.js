import React from 'react';

const ErrorPage = () => {

    const styleErrorPage = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '200px'
    }

    return (
        <div style={styleErrorPage}>
            <h1>
                Error 404. Page does not exist.
            </h1>
        </div>
    )
}

export default ErrorPage
