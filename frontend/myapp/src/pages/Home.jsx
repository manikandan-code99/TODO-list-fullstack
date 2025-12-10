// import Navbar from "../components/Navbar";
// import FeedbackForm from "../components/Feedbackform";
// import FeedbackList from "../components/Feedbacklist";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />
//       <main className="max-w-4xl mx-auto p-6">
//         <section className="mb-6">
//           <div className="bg-white p-6 rounded shadow text-center">
//             <h1 className="text-2xl font-bold">Welcome to your Feedback Dashboard</h1>
//             <p className="text-gray-600 mt-2">Add new feedback below. Each account sees only their own feedback.</p>
//           </div>
//         </section>

//         <section>
//           <FeedbackForm />
//         </section>

//         <section className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">Your Feedback</h2>
//           <FeedbackList />
//         </section>
//       </main>
//     </div>
//   );
// }
import { useState } from "react";
import Navbar from "../components/Navbar";
import FeedbackForm from "../components/Feedbackform";
import FeedbackList from "../components/Feedbacklist";
import { FiEdit } from "react-icons/fi";

export default function Home() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Navbar />

      <main className="max-w-4xl mx-auto p-6">
        <section className="mb-6">
          <div className="bg-white p-6 rounded shadow text-center">
            <h1 className="text-2xl font-bold"><span className="text-xl">👀</span>Hello...</h1>
            <p className="text-gray-600 mt-2">
              Add new Notes below in a secound <span className="text-xl">😉 </span>,<br />Each account sees only their own Notes.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-center">Your Notes</h2>
          <FeedbackList />
        </section>
      </main>

      {/* Floating Write Button */}
      <button
        onClick={() => setOpenForm(true)}
        className="fixed bottom-6 right-6 bg-gray-600 hover:bg-black text-white p-4 rounded-full shadow-lg transition-all"
      >
        <FiEdit size={24} />
      </button>

      {/* Center Modal (NO page blur) */}
 {openForm && (
  <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
    <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl animate-popup">

      <h2 className="text-xl font-bold mb-4 text-center">Write your Notes</h2>

      <FeedbackForm onClose={() => setOpenForm(false)} />

      <button
        onClick={() => setOpenForm(false)}
        className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded"
      >
        Close
      </button>

    </div>
  </div>
)}

    </div>
  );
}

