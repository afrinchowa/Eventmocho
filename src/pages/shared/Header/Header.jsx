
import logo from '../../../assets/logo.jpeg';
import moment from 'moment';
const Header = () => {
    return (
      <div className='text-center'>
          <div className='flex gap-4 mx-auto '>
           <img className=' w-15 h-12 rounded-full' src={logo} alt="" />
        
        <h2 className="text-4xl font-bold">Eventmocho</h2>
        </div>
        <div>
            <p className='text-xl'> {moment().format("dddd, MMMM D ,YYYY, h:mm:ss a") }</p>
        </div>
      </div>
    );
};

export default Header;