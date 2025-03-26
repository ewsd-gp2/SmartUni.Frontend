const PageNotFound = () => {
    const userRole = localStorage.getItem('user_role')
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="text-xl text-gray-600 mt-2">Oops! Page not found.</p>
          <a
                href={`/${userRole}/dashboard`}
            className="mt-4 px-6 py-2 text-white bg-teal-500 rounded-lg shadow-md hover:bg-teal-600 transition"
          >
            Go Home
          </a>
        </div>
      );
    }

export default PageNotFound;