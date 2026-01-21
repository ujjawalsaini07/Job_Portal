function Stats() {
  const stats = [
    ["3L+", "Candidates"],
    ["50k+", "Recruiters"],
    ["1M+", "Applications"],
    ["100k+", "Jobs Post"],
  ];

  return (
    <section className="py-20 bg-gray-50 w-full">
      <div className="max-w-5xl mx-auto grid grid-cols-4 gap-6 text-center">
        {stats.map(([n, t]) => (
          <div key={t}>
            <h3 className="text-5xl font-bold text-blue-600">{n}</h3>
            <p className="text-gray-600 text-xl">{t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;