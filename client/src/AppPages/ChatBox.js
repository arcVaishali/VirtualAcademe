import { QuerySnapshot, collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import React,{useState,useRef,useEffect} from 'react'
import { db } from '../Firebase';
import PrivateMessaging from './PrivateMessaging';
import Message from './Message';

const ChatBox = () => {
    const [message,setMessage] = useState([]);
    const scroll = useRef();
    useEffect(()=>{
        const q = query(
            collection(db,'messages'),
            orderBy('createdAt','desc'),
            limit(100)
        )
        const unsubscribe = onSnapshot(q,(QuerySnapshot)=>{
            const fetchedMessages = [];
            QuerySnapshot.forEach((doc)=>{
                fetchedMessages.push({...doc.data(),id: doc.id});
            });
            const sortedMessages = fetchedMessages.sort(
                (a, b) => a.createdAt - b.createdAt
            );
            setMessage(sortedMessages)
        });
        return()=> unsubscribe
    },[])
  return (
    <main>
      <div>
        {message?.map((message)=>(
            <Message key={message.id} message={message}/>
        ))}
      </div>
      <span ref={scroll}></span>
      <PrivateMessaging scroll={scroll}/>
    </main>
  )
}

export default ChatBox
