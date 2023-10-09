import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const Login = () => {
const {signIn  } =useContext(AuthContext);
const location =useLocation();
const navigate =useNavigate();
console.log('location in the log in page',location);

const handleLogin  = e  => {
e.preventDefault();
console.log(e.currentTarget);
const form = new FormData(e.currentTarget);
const email =form.get('email');
const password =form.get('password');
console.log(email, password);
signIn(email, password)
.then(result => {
console.log(result.user);
// navigate after log in 
navigate (location?.state? location.state : '/');

})
.catch ( error => {
  console.error(error);
})
}

    return (
        <div>
            <Navbar></Navbar>
          


            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
  <h2 className="text-3xl font-extrabold my-10 text- text-center">Please Login</h2>
    <div className="card  w-full  shadow-2xl bg-base-100">
    
      <form onSubmit={handleLogin} className="card-body w-96 ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name="password" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center text-sm">Don not have an account ?  Please_<Link className="text-blue-600 font-bold" to="/register"> Register</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;