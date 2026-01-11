function WhyChooseUs() {
  const points = ["Verified Recruiters", "Smart Matching", "Easy Apply", "Real-time Updates"];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 text-center">
        {points.map((p) => (
          <div key={p} className="p-4 font-semibold">{p}</div>
        ))}
      </div>
    </section>
  );
}


export default WhyChooseUs;