import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [age, setAge] = useState('')

  const formHandler = (e) => {
    e.preventDefault();
    setName("");
    setUserEmail("");
    setAge("");
  }

  return (
    <div className="parent flex items-center justify-center min-h-screen">
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
        className="inps flex flex-col gap-4 h-170 w-125 bg-amber-600 rounded-xl p-10 "
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">LIVE PROFILE 👤</h2>
          <h4>Name:</h4>
          <input
            className="border-2 rounded-lg h-10 p-3 text-black"
            type="text"
            value={name}
            placeholder="ENTER YOUR NAME "
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <h4>Email:</h4>
          <input
            className="border-2 rounded-lg h-10 p-3 text-black"
            type="text"
            value={userEmail}
            placeholder="ENTER YOUR EMAIL "
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <h4>AGE:</h4>
          <input
            className="border-2 rounded-lg h-10 p-3 text-black"
            type="text"
            value={age}
            placeholder="ENTER YOUR AGE "
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-black text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-800 active:scale-95 transition"
          >
            SUBMIT
          </button>
        </div>

        <div className="w-full h-px bg-gray-300 my-6"></div>

        <div className="bottom flex flex-col font-bold gap-3">
          <h3>Hello,{name}</h3>
          <h3>Email:{userEmail}</h3>
          <h3>Age:{age}</h3>
        </div>
      </form>
    </div>
  );
}

export default App
