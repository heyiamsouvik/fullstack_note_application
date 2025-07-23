import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const NoteCard = ({ note, onEdit, deleteNote }) => {
  return (
    <div className="bg-white p-3 md:p-4 m-2 border rounded-md shadow-sm hover:shadow-md transition duration-200">
      {/* title  */}
      <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">{note.title}</h3>
       {/* Description */}
      <p className="text-sm md:text-base text-gray-600 mb-2">
        {note.description}
      </p>


      <div className="flex gap-3">
        <button
          onClick={() => onEdit(note)}
          className="text-blue-500 hover:text-blue-700"
          title="Edit"
        >
          <FiEdit2 size={18} />
        </button>
        <button
          onClick={() => deleteNote(note._id)}
          className="text-red-500 hover:text-red-700"
          title="Delete"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
