import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeedback } from "../store/Feedbackslice";

export default function FeedbackList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((s) => s.feedback);

  useEffect(() => {
    dispatch(fetchFeedback());
  }, [dispatch]);

  if (loading) return <div className="text-center p-6">Loading...</div>;
  if (!items.length) return <div className="text-center p-6 text-gray-600">No feedback yet.</div>;

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-6">
      {items.map((f) => (
        <div key={f.id} className="bg-yellow-100 p-4 rounded shadow">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold">{f.title}</h4>
              {/* <p className="text-sm text-gray-600">{f.user}</p> */}
            </div>
            <div className="text-xs text-gray-500">{new Date(f.date).toLocaleDateString()}</div>
          </div>
          <p className="mt-2">{f.message}</p>
          <small className="text-gray-500 block mt-3">{new Date(f.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
