import React,{useState} from 'react'
import { db } from '../Firebase';
import { collection,addDoc,Timestamp } from 'firebase/firestore';

const CreateDiscussion = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [forumTitle, setIsForumTitle] = useState('')
    const [forumDescription, setForumDescription] = useState('')

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleTextareaChange = (event) => {
        setForumDescription(event.target.value);
      };

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            await addDoc(collection(db,'forum'),{
                title: forumTitle, 
                description : forumDescription,
                created: Timestamp.now(),
                completed: false
            })
        }
        catch(err){
            alert(err)
        }
    }

  return (
    <>
        <button onClick={toggleModal} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 col-span-3" type="button">
        Create Thread
        </button>


        <div aria-hidden={!isModalOpen} id="authentication-modal" tabIndex="-1" className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
          isModalOpen ? '' : 'hidden'
        }`}>
            <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={closeModal} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Write your discussion forum</h3>
                        <form className="space-y-6 addForum" name='addForum' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Forum Title</label>
                                <input onChange={(e)=>setIsForumTitle(e.target.value)} value={forumTitle} type="text" name="forum-title" id="forum-title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ex: Django" required></input>
                            </div>
                            <div>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Forum Description</label>
                                <textarea onChange={handleTextareaChange} value={forumDescription} className='p-2.5 rounded-lg' name="forum-description" id="forum-description" cols="43" rows="5"></textarea>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default CreateDiscussion
