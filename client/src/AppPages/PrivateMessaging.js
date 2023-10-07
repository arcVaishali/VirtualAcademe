import React from 'react'

const PrivateMessaging = () => {
    const navigation = [ "Chats" , "Groups" ]
  return (
    <div className="grid grid-cols-12 justify-center items-center px-8 py-8">
        <div className="flex">
            <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            className='w-[50px] h-[50px] object-cover rounded-[25px]'
            />
        </div>
        <div className="grid grid-cols-12 col-span-10 col-start-3">
            
        </div>
    </div>
  )
}

export default PrivateMessaging