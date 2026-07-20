import React from 'react'

const LoginForm = () => {
  return (
    <div className='w-full max-w-md p-6'>
        <form className='w-full flex flex-col gap-5'>
    
            <h1 className='text-3xl font-black text-gray-900 text-center mb-2'>Sign In</h1>            
  
            <div className='w-full'>
                <label htmlFor="username" className='text-sm font-semibold text-gray-700'>
                    Username
                </label>
                <input 
                    className='w-full mt-2 px-4 py-3 border border-gray-200 bg-gray-50 rounded-xl outline-none text-sm text-gray-800'  type="text"  name="username"  id="username" placeholder="Enter your username"
                />
            </div>
                      
            <div className='w-full'>
                <label htmlFor="password" className='text-sm font-semibold text-gray-700'>
                    Password
                </label>
                <input 
                    className='w-full mt-2 px-4 py-3 border border-gray-200 bg-gray-50 rounded-xl outline-none text-sm text-gray-800' type="password"             name="password" id="password"    placeholder="Enter your password"   />
            </div>          
            <button type="submit" className='w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl font-bold text-sm mt-2 transition-colors'>
                Sign In
            </button>
        </form>
    </div>
  )
}

export default LoginForm