
import React, { useEffect, useState } from 'react'


const Notemodel = ({closeModel,addNote,currentNote,editNote}) => {
 const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
 
  useEffect(()=>{
    if(currentNote){
      setTitle(currentNote.title)
      setDescription(currentNote.description)
    }
    
  },[currentNote])



  const handleSubmit = async (e) => {
    e.preventDefault();
    if(currentNote){
      editNote(currentNote._id, title,description)

    }else{
       addNote(title,description)
    }
   
    
  };
  return (

    <div className=" fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 space-y-4 animate-fade-in"
      >
        <h2 className="text-xl font-semibold text-gray-800 text-center">{ currentNote ? "Edit Note" : " Add New Note" }</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter note title"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter note description"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:ring-blue-300"
            rows="4"
          ></textarea>
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={closeModel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            {currentNote ? "Update Note" : "Add note"}
          </button>
        </div>
      </form>
    </div>
   
  );
};


export default Notemodel
