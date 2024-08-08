import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => { e.message })
    }

    return (
        <div>
            {/* <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>LogIn</Link> */}

            <div className="navbar bg-primary text-primary-content">
                <button className="btn btn-ghost text-xl">Auth-Master</button>
                <Link to='/' className="btn btn-ghost text-xl">Home</Link>
                

                {
                    user ?
                        <>
                            {/* <span>{user.email}</span> */}
                            {/* <Link className="btn btn-ghost text-xl">SignOut</Link> */}
                            <Link to='/profile' className="btn btn-ghost text-xl">Profile</Link>
                            <button onClick={handleLogOut} className="btn btn-ghost text-xl">SignOut</button>
                        </>
                        :
                        <>
                            <Link to='/register' className="btn btn-ghost text-xl">Register</Link>
                            <Link to='/login' className="btn btn-ghost text-xl">LogIn</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;