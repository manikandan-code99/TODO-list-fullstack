import Navbar from "../components/Navbar";
import FeedbackForm from "../components/Feedbackform";
import FeedbackList from "../components/Feedbacklist";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <section className="mb-6">
          <div className="bg-white p-6 rounded shadow text-center">
            <h1 className="text-2xl font-bold">Welcome to your Feedback Dashboard</h1>
            <p className="text-gray-600 mt-2">Add new feedback below. Each account sees only their own feedback.</p>
          </div>
        </section>

        <section>
          <FeedbackForm />
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Your Feedback</h2>
          <FeedbackList />
        </section>
      </main>
    </div>
  );
}
