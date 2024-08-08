import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {

    const authUuser = useContext(AuthContext);

    return (
        <div>
            <h3>Home page</h3>
            <p>name: {authUuser && <span>{authUuser.displayName}</span>}</p>

            <p>name: {authUuser.displayName}</p>
        </div>
    );
};

export default Home;