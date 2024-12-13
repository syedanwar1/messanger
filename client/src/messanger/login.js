import { useState } from "react"
import { io } from "socket.io-client";
import Messanger from "./Messanger";
const socket = io.connect('http://localhost:3001');


const Login = () => {
    const [name,setName] = useState('');
    const[room,setRoom] = useState('');
    const[loginScreen,setlogin] = useState(true);

    function login() {
        if(name !== '' && room !== ''){
            console.log('in',room);
            socket.emit('join_room', room);
            setlogin(false);
        }
    }

    
return(
<div>
{loginScreen ? 
(<div className="min-h-screen bg-gray-100 flex justify-center items-center">
     <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
       <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
         <div className="mb-4">
           <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Room</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={login}
            >
            Login
          </button>
      </div>
    </div>)
    :(<Messanger name={name} room={room} socket={socket} />)}
    </div>

    );
}
    



// return
// (<><h1>hello</h1></>);

// }
//     <>
//     <h1>

//     </h1>
//     {/* <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Username</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700">Room</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={room}
//               onChange={(e) => setRoom(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onClick={login}
//             >
//             Login
//           </button>
//       </div>
//     </div> */}
//   </>  

   


export default Login;