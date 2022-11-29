import React from 'react';

const currentUser = sessionStorage.getItem("currentUser");

const Header = () => {
  const user = JSON.parse(currentUser).data.data
  return (
    <>
      <div className='bg-green-700 h-18 flex flex-row p-5 border-b-2 border-gray-100 relative'>
        <div className='justify-center block text-center mx-auto relative'>
          <div className='w-full'>
            <img
              className='w-1/3 m-auto rounded-full'
              src={
                user.image ? user.image : 'images/avatar.png'
              }
              alt='profil avatar'
            />
          </div>
          <div className='mt-6 text-gray-100 '>
            <h3 className='font-semibold text-xl'>{ user.name }</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
