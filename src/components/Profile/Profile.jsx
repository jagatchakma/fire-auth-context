import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h3>Welcome to my profile</h3>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Profile;