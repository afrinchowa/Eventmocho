import  say1 from '../../../assets/say-1.jpg';
import  say2 from '../../../assets/say-2.jpg';



import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
const RightSideNav = () => {
  return (
    <div>
      <div className=" p-4 space-y-3 mb-6">
        <h2 className="text-2xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>Login With Github
        </button>
      </div>

      <div className=" p-4  mb-6">
        <h2 className="text-xl mb-4">Find Us On</h2>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3">
            <span className="">Facebook</span>
          </FaFacebook>
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          href=""
        >
          <FaTwitter className="mr-3">
            <span className="">Twitter</span>
          </FaTwitter>
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          href=""
        >
          <FaInstagram className="mr-3">
            <span className=""> Instagram</span>
          </FaInstagram>
        </a>
      </div>


 { /**WHAT THE CLIENTS SAY   */}

 <div className=" p-4 space-y-3 mb-6">
      <h2 className="text-2xl">WHAT THE CLIENTS SAY</h2>
      <img src={say1} alt="" />
      <p>An elegant evening of fine dining and networking for professionals. A corporate networking mixer</p>
      <img src={say2} alt="" />
      <p>An elegant evening of fine dining and networking for professionals. A corporate networking mixer is an informal gathering where professionals from various industries come together to build and stre</p>
   
    </div>

    </div>
  );
};

export default RightSideNav;
