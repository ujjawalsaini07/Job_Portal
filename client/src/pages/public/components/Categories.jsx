function Categories() {
  const cats = ["Tech", "Design", "Marketing", "Sales", "Finance", "HR"];

  return (
    <section className="py-20 w-full bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Popular Categories</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {cats.map((c) => (
          <div
            key={c}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center font-semibold"
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;