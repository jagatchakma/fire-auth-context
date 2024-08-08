import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const {userA, createUser} = useContext(AuthContext);
    // console.log(userA);

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;
        // const pass = form.password2.value;

        // console.log(name + email + pass)

        createUser(email, pass)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(e=>{
            console.log(e.message);
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        {/* <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p> */}
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Yout name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password2' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Already have an account please login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;