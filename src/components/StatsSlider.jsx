import { useEffect, useState } from "react";

function StatsSlider() {
  const stats = [
    { text: "Jobs posted last month", value: "2 Lakhs+" },
    { text: "Jobs applied", value: "4000+" },
    { text: "Candidates", value: "3 Lakhs+" },
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % stats.length);
        setAnimate(true);
      }, 200);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 h-12 overflow-hidden">
      <h3
        className={`text-2xl md:text-4xl font-bold transition-all duration-500 ${
          animate ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <span className="bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          {stats[index].value}
        </span>{" "}
        {stats[index].text}
      </h3>
    </div>
  );
}

export default StatsSlider;
