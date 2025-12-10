import { useState } from "react";
import { useDispatch } from "react-redux";
import { createFeedback } from "../store/Feedbackslice";

export default function FeedbackForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    message: "",
    date: new Date().toISOString().slice(0,10) 
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await dispatch(createFeedback(form)).unwrap(); 
      
      setForm({ title: "", message: "", date: new Date().toISOString().slice(0,10) });
    } catch (err) {
      alert("Save failed: " + JSON.stringify(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow max-w-xl mx-auto">
      <h3 className="text-lg font-semibold mb-3">Add</h3>

      <label className="block mb-2">
        <span className="text-sm text-gray-700">Date</span>
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full p-2 border rounded mt-1"
          required
        />
      </label>

      <label className="block mb-2">
        <span className="text-sm text-gray-700">Title</span>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-2 border rounded mt-1"
          placeholder="Short title"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-sm text-gray-700">Message</span>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full p-2 border rounded mt-1 h-28"
          placeholder="Your Notes..."
        />
      </label>

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded disabled:opacity-60"
        disabled={saving}
      >
        {saving ? "Saving..." : "Save Notes"}
      </button>
    </form>
  );
}
