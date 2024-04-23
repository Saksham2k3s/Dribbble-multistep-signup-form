import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { add_avatar } from '../redux/userSlice';
import dribbble_image from '../Images/dribbble.png';
import { useNavigate } from 'react-router-dom';

function ProfileImg() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  const handleNext = () => {
    dispatch(add_avatar({ image, location }));
    if (user.signup_step.second_complete) {
      navigate('/register/role');
    }
  };

  return (
    <div className='w-screen min-h-screen pt-10'>
      <div className='px-15'>
        <div className='lg:ml-20 font-poppins text-[#ea4b8b]'>
          <img src={dribbble_image} alt='dribbble_logo' className='w-24 h-15' />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='w-full md:w-1/2 px-5'>
          <div className='text-start lg:px-5 md:px-5'>
            <h1 className='font-bold text-2xl md:text-2xl lg:text-4xl'>Welcome, let's create your profile</h1>
            <p className='mt-3 md:mt-4 lg:mt-5 text-sm md:text-md lg:text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-20 pt-10'>
            <div className={`overflow-hidden h-36 w-36 md:h-36 md:w-36 lg:h-50 lg:w-50 xl:h-48 xl:w-48 rounded-full flex items-center justify-center ${image ? '' : 'border-dashed border-gray-500 border-2'}`}>
              {image === '' ? (
                <>
                  <label htmlFor='fileInput' className='absolute cursor-pointer'>
                    <FontAwesomeIcon icon={faCamera} size='xl' color='gray' />
                  </label>
                  <input
                    id='fileInput'
                    type='file'
                    className='hidden'
                    onChange={handleImageChange}
                  />
                </>
              ) : (
                <img src={image} className='w-full h-full object-cover rounded-full' alt='profile_image' />
              )}
            </div>
            <div className='flex flex-col'>
              <label htmlFor='fileInput' className='border border-gray-400 cursor-pointer rounded-lg p-3 text-center w-30 md:w-full lg:w-40'>
                <input
                  id='fileInput'
                  type='file'
                  className='hidden'
                  onChange={handleImageChange}
                />
                <div className='text-black font-bold mt-0'>Choose image</div>
              </label>
              <div className='text-gray-400 font-bold text-sm md:text-md lg:text-lg mt-5 lg:mt-8'>
                <FontAwesomeIcon icon={faChevronRight} size='sm' color='gray' /> or choose one of our default
              </div>
            </div>
          </div>
          <div className='mt-20 w-full px-5 md:px-5 lg:px-0'>
            <div className='font-bold text-lg md:text-2xl'>Add your Location</div>
            <div className='border-0 border-b-2 border-gray-400 py-4'>
              <input
                type='text'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className='text-black font-bold text-2xl border-none outline-none'
                placeholder='Enter your Location'
              />
            </div>
          </div>
          <div className='text-start sm:px-5 md:px-5 lg:px-0'>
            <button onClick={handleNext} className='mt-10 bg-[#ea4b8b] rounded-lg px-8 py-3 text-white font-bold w-full md:w-1/2 xl:w-1/3'>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileImg;
