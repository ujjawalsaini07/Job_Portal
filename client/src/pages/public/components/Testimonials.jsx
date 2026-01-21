function Testimonials() {
  const reviews = [
    "Got my first job in 2 weeks!",
    "Hired 5 devs in one month.",
    "Best job portal I used.",
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-6 shadow rounded-xl text-center">
            “{r}”
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;