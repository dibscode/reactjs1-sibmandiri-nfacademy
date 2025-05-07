import React from 'react';

function Home() {
  return (
    <div className="py-5">
      <div className="p-5 mb-4 bg-gray-100 rounded-lg">
        <div className="container mx-auto py-5">
          <h1 className="text-4xl font-bold text-gray-800">Selamat Datang di Web Kami</h1>
          <p className="text-xl text-gray-600 mt-3">
            Ini adalah halaman utama website kami yang dibuat dengan React JS dan Tailwind CSS.
          </p>
          <a href="/book" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Beli
          </a>
          <img
            src="https://www.gamelab.id/uploads/news/berita-897-front-end-dalam-web-development-20210824-154525.jpg"
            className="mt-3 w-full rounded-lg"
            alt="Welcome"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
