import React from 'react';

const Home = () => {

  const styleHomePage = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "200px"
  }

    return (
        <div className='home' style={styleHomePage} >
          
          <h1>
            Welcome
          </h1>
          <h3>
            Login to view products list
          </h3>


        </div>
    )
}

export default Home;
