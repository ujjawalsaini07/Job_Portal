import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import SearchBar from "./SearchBar";
import StatsSlider from "./StatsSlider";

function Hero() {
  const words = ["Job", "Talent", "Career"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, 120);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, 80);
    } else if (!isDeleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="w-full flex flex-col items-center justify-center text-center px-4 pt-25 bg-gray-50">
      <h1 className="mt-8 text-4xl font-extrabold text-gray-900 md:text-8xl">
        Find The Right {" "}
        <span className="text-blue-600">
          {text}
        </span>
      </h1>
      <StatsSlider/>

      <p className="mt-4 text-gray-600 text-lg max-w-xl md:text-xl">
        Connecting Talented people with the Right <span className="text-blue-600">Opportunities</span> and Companies with the right <span className="text-blue-600">Candidates</span>.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        {/* Find Jobs -> Register as Candidate */}
        <Link 
          to="/register/candidate"
          className="px-12 py-4 border-2 text-xl border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition"
        >
          Find Jobs
        </Link>
        
        {/* Find Talent -> Register as Recruiter */}
        <Link 
          to="/register/recruiter"
          className="px-12 py-4 border-2 text-xl border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
        >
          Find Talent
        </Link>
      </div>
      <SearchBar/>
      
     </section>
  );
}

export default Hero;