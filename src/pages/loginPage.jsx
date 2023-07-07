import React from 'react';

const loginPage = () => {
  return (
    <div> 
        <form className=' flex flex-col justify-center w-full'>
            <span className='w-10/12 h-auto '>
            <input  type='email' placeholder='Email' label ='email'/>
            </span>
            <br />
            <span className=''> 
            <input  type='password' placeholder='Password' label ='password'/>
            </span>
        </form>
    </div>
  )
}

export default loginPage;