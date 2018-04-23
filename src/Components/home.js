import React from 'react';
import {Link} from 'react-router-dom';
class Home extends React.Component {
    render()  {
        return(
            <div className="home-container">
                <h1>
                    GitHub Battle
                </h1>

                <Link className="button" to="/battle">Click Here </Link>
            </div>
        )
    }
}

export default Home;