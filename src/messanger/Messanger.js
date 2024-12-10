import { useState } from "react";
export const Messanger = () => {
    const [user1Messages, setUser1Messages] = useState([]); 
    const [user2Messages, setUser2Messages] = useState([]);
    const [user1Message, setUser1Message] = useState('');
    const [user2Message, setUser2Message] = useState('');
  
    const setter = (sender) => {
      if (sender === 'User1' && user1Message.trim()) {
        setUser2Messages([...user2Messages, { sender: 'User1', text: user1Message }]);
        setUser1Message(''); 
      } else if (sender === 'User2' && user2Message.trim()) {
        setUser1Messages([...user1Messages, { sender: 'User2', text: user2Message }]);
        setUser2Message(''); 
      }
    };
  
    const handleKeyPress = (e, sender) => {
      if (e.key === 'Enter') {
        setter(sender);
      }
    };

    return (
   <div className="flex flex-col space-y-4 p-4">
    <div className="flex flex-col space-y-2 bg-gray-100 p-4 rounded-lg shadow-md">
   <div className="flex flex-col space-y-2 h-64 overflow-y-auto">
   <div className="bg-white p-2 rounded-lg">User1</div>
   <div className="bg-gray-300 p-2 rounded-lg self-end">
    {user1Messages.map((e) => (
      <div className="bg-blue-100 p-4 rounded shadow-md">
      {e.text}
      </div>
      ))}
      </div>
      </div>
        <div className="flex items-center space-x-2">
            <input type="text" value={user1Message} onChange={(e) => setUser1Message(e.target.value)} onKeyDown={(e) => handleKeyPress(e, 'User1')} placeholder="Type a message..." className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none" />
            <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none" onClick={() =>{setter('User1')}}>Send</button>
        </div>
    </div>


    <div className="flex flex-col space-y-2 bg-gray-100 p-4 rounded-lg shadow-md">
        <div className="flex flex-col space-y-2 h-64 overflow-y-auto">
            <div className="bg-white p-2 rounded-lg">User 2</div>
            <div className="bg-gray-300 p-2 rounded-lg self-end">
    {user2Messages.map((e) => (
      <div className="bg-blue-100 p-4 rounded shadow-md">
      {e.text}
      </div>
      ))}
      </div>
        </div>
        <div className="flex items-center space-x-2">
            <input type="text" value={user2Message} onChange={(e) => setUser2Message(e.target.value)}  onKeyDown={(e) => handleKeyPress(e, 'User2')} placeholder="Type a message..." className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none" />
            <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none" onClick={() => {setter('User2')}}>Send</button>
        </div>
    </div>
</div>
    );
}

export default Messanger;