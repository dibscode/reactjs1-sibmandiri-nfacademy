import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container py-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-4 fw-bold">Selamat Datang di Web Kami</h1>
          <p className="col-md-8 fs-5">
            Ini adalah halaman utama website kami yang dibuat dengan React JS dan Bootstrap.
          </p>
          <button className='btn btn-primary'>Beli</button>
          <img
            src="https://www.gamelab.id/uploads/news/berita-897-front-end-dalam-web-development-20210824-154525.jpg"
            className="img-fluid rounded mt-3"
            alt="Welcome"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
