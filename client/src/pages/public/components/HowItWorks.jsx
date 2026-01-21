function HowItWorks() {
  const steps = [
    "Create Profile",
    "Apply to Jobs",
    "Get Hired",
  ];

  return (
    <section className="py-20 w-full">
      <h2 className="text-5xl font-bold text-center mb-12">How It Works</h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 px-6">
        {steps.map((s, i) => (
          <div key={i} className="flex-1 text-center">
            <div className="w-20 h-20 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              {i + 1}
            </div>
            <p className="mt-4 font-semibold text-2xl">{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;