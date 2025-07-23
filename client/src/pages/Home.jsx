import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


import Navbar from "../components/Navbar";
import Notemodel from "../components/Notemodel";
import NoteCard from "../components/NoteCard";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [query, setQuery] = useState("");
  const [filterNotes, setFilterNotes] = useState([]); //array

  

  
  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    setFilterNotes(
      notes.filter(
        (note) =>
          note.title.toLowerCase().includes(query.toLowerCase()) ||
          note.description.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  // Fetch all notes
  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/note", {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setNotes(data.notes);
    } catch (error) {
      toast.error("Failed to fetch notes");
      console.error(error);
    }
  };

  const closeModel = () => {
    setIsModalOpen(false);
    setCurrentNote(null);
  };

  const onEdit = (note) => {
    setCurrentNote(note);
    setIsModalOpen(true);
  };


    // Delete a note
  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/note/${id}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("note deleted");
        fetchNotes();
      }
      else{
        toast.error("Failed to delete note");
      }
    }catch (error) {
      console.log(error);
      toast.error("Error deleting note");
    }
  };

  //Add a note
  const addNote = async (title, description) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/note/add",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
     

      if (response.data.success) {

        closeModel();
        toast.success("Note added");
        fetchNotes();

      }
      else{
         toast.error("Failed to add note");
      }
    } catch (error) {
      console.log(error);
       toast.error("Error adding note");
    }
  };

  //Edit node: 
  const editNote = async (id, title, description) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/note/${id}`,
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    

      if (response.data.success) {
        closeModel();
        toast.success("Note updated");
        fetchNotes();
      }
      else{
         toast.error("Failed to update note");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error updating note");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar setQuery={setQuery} />
      <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filterNotes.length > 0 ? (
          filterNotes.map((note) => (
            <NoteCard
              key={note._id}
              deleteNote={deleteNote}
              note={note}
              onEdit={onEdit}
            />
          ))
        ) : (
          <p className="text-center col-span-full">No Notes Found </p>
        )}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed right-4 bottom-4 bg-teal-500 text-white text-3xl p-3 rounded-full shadow-md hover:bg-teal-600 transition"
        title="Add Note"
      >
        +
      </button>
      {isModalOpen && (
        <Notemodel
          closeModel={closeModel}
          addNote={addNote}
          currentNote={currentNote}
          editNote={editNote}
        />
      )}
    </div>
  );
};

export default Home;
