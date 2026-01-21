import JobCard from "./JobCard";

function FeaturedJobs() {
  const jobs = [
    { title: "Frontend Developer", company: "Google", loc: "Remote" },
    { title: "Backend Developer", company: "Amazon", loc: "Bangalore" },
    { title: "UI Designer", company: "Startup", loc: "Delhi" },
    { title: "Full Stack Dev", company: "Microsoft", loc: "Hyderabad" },
    { title: "Data Analyst", company: "Flipkart", loc: "Pune" },
    { title: "ML Engineer", company: "OpenAI", loc: "Remote" },
    { title: "DevOps Engineer", company: "Adobe", loc: "Noida" },
  ];

  return (
    <section className="py-20 bg-gray-50 w-full">
      <h2 className="text-5xl font-bold text-center mb-10">Featured Jobs</h2>

      <div className="max-w-7xl mx-auto px-6">
        <div
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4
                     scrollbar-hide"
        >
          {jobs.map((job, i) => (
            <JobCard key={i} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedJobs;
