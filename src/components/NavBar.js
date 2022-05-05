import { React } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaHospitalAlt } from 'react-icons/fa';
import { RiBankFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className='fixed top-0 left-0 right-0 w-full flex justify-between items-center p-4'>
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
          <li>
            <Link to={'/hospital'}>
              <FaHospitalAlt />
            </Link>
          </li>
          <li>
            <Link to={'/blood_bank'}>
              <RiBankFill />
            </Link>
          </li>
          <li>
            <Link to={'/donor'}>
              <AiOutlineUser />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
