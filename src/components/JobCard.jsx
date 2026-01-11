function JobCard({ title, company, loc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow w-72 shrink-0">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-500 mt-1">
        {company} • {loc}
      </p>
      <button className="mt-4 text-blue-600 font-semibold hover:underline">
        Apply
      </button>
    </div>
  );
}

export default JobCard;
