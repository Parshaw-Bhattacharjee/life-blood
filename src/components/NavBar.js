import { React } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaHospitalAlt } from 'react-icons/fa';
import { RiBankFill } from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div
      className={`fixed top-0 left-0 right-0  w-full flex justify-between items-center p-4 ${
        location.pathname !== '/' ? 'bg-white' : ''
      }`}
    >
      <div className=''>
        <img
          onClick={() => navigate('/')}
          className='h-20 rounded-lg cursor-pointer'
          src='https://res.cloudinary.com/donqbxlnc/image/upload/v1651724100/Life_Blood_tr_cropped_gvqcyj.png'
          alt=''
        />
      </div>
      <nav>
        <ul className='flex gap-8 p-4 bg-black/50 text-white rounded-3xl md:text-2xl'>
          <li title='hospital'>
            <Link to={'/login/hospital'}>
              <FaHospitalAlt />
            </Link>
          </li>
          <li title='blood bank'>
            <Link to={'/login/blood_bank'}>
              <RiBankFill />
            </Link>
          </li>
          <li title='donor'>
            <Link to={'/login/donor'}>
              <AiOutlineUser />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
