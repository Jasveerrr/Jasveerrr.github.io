import React, { useState } from 'react'
const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');  
  const [allUsers, setAllUsers] = useState([])
  
  const formHandler = (e) => {
    e.preventDefault();

    const oldUsers = [...allUsers]
    console.log(oldUsers)
    oldUsers.push({ name, email, age })
    setAllUsers(oldUsers)
    setName('');
    setEmail('');
    setAge('');
  }
  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers]
    copyUsers.splice(idx, 1)
    setAllUsers(copyUsers)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <form 
        onSubmit={(e) => {
          formHandler(e);
        }}
        className="bg-white p-6 rounded-lg shadow-md w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center">Simple Form</h2>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border p-2 rounded"
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Submit
        </button>
      </form>
      <div className="mt-8 w-100 bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        {allUsers.map((user, idx) => {
          return (
            <div key={idx} className="flex items-center justify-center  flex-col border rounded-md p-3 mb-3 bg-gray-50">
              <h3 className="font-semibold text-lg">Name : {user.name}</h3>
              <p className="text-gray-600">Email : {user.email}</p>
              <p className="text-gray-500">Age : {user.age}</p>
              <button onClick={() => {
                deleteHandler(idx);
              }} className="mt-3 bg-red-500 text-white px-2 py-2 rounded hover:bg-red-600 cursor-pointer active:scale-95">
                Delete
              </button>
            </div>
          );       
        })}
      </div>
    </div>
  );
}

export default App
