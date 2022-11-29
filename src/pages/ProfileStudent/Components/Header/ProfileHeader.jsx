import React from 'react';
const currentUser = sessionStorage.getItem("currentUser");
const ProfileHeader = ()=>{
    return(
        <>
            <div className='bg-green-700 border-b-2 border-gray-50 py-5 px-10 h-auto'>
                <div className=' block relative'>
                    <div className='w-full rounded-full border-4 border-gray-50'>
                        <img
                        className='w-full rounded-full '
                        src={
                            JSON.parse(currentUser).data.data.image ? JSON.parse(currentUser).data.data.image : 'images/avatar.png'
                        }
                        alt='profil avatar'
                        />
                    </div>
                    <div className='w-full text-center mt-5 bottom-0 text-gray-50 '>
                        <h3 className='font-semibold bottom-0 text-xl' >{ JSON.parse(currentUser).data.data.name }</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileHeader