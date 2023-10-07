import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase';

const DiscussionForum = () => {
  const [tasks, setTasks] = useState([]);
  const { id } = useParams(); // Get the id from the URL parameter

  useEffect(() => {
    const q = query(collection(db, 'forum'), orderBy('created', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setTasks(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  // Find the specific discussion topic by ID
  const discussionTopic = tasks.find((x) => x.id === id);

  if (!discussionTopic) {
    return (
      <div>
        <h2 className="text-3xl font-bold underline bg-red-500">Error 404</h2>
        <div>
          <Link to='/discussion-forum'>Back to all forums</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold underline bg-red-500">{discussionTopic.data.title}</h2>
      <p>{discussionTopic.data.description}</p>
      <div>
        <Link to='/discussion-forum'>Back to all forums</Link>
      </div>
    </div>
  );
};

export default DiscussionForum;
