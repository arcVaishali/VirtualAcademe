import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CreateDiscussion from './CreateDiscussion'
import { collection, doc, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore'
import { db } from '../Firebase';

const DiscussionLanding = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const q = query(collection(db, 'forum'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setTasks(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])
  
  return (
    <div>
      <h1 className='text-center text-3xl'>Discussion Forum</h1>
      <CreateDiscussion/>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Discussion Topic</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((val) => (
            <tr key={val.id}>
              <td className="border px-4 py-2">
                <Link to={`/discussion-forum/${val.id}`}>{val.data.title}</Link>
              </td>
              <td className="border px-4 py-2">
                <p>{val.data.description}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DiscussionLanding
