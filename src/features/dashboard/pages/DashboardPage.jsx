function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-gray-500">
            Total Tasks
          </h3>

          <p className="text-3xl font-bold mt-2">
            12
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-gray-500">
            Completed
          </h3>

          <p className="text-3xl font-bold mt-2">
            8
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-gray-500">
            Pending
          </h3>

          <p className="text-3xl font-bold mt-2">
            4
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;