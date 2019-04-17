import React from 'react'
import { RouteComponentProps } from 'react-router';
import { HomeProps } from './Home.types';
import { Link } from 'react-router-dom';

const Home = (props:HomeProps & RouteComponentProps) => {
    return (
        <div className="home">
            Home page
            <Link to={"/settings"}>Settings</Link>
        </div>
    );
};

export default Home;
