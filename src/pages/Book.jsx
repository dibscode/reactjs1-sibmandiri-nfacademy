import React from 'react';
import 'bootstrap/dist/css/bootstrap.rtl.min.css'; // RTL Bootstrap

function Book() {
  const books = [
    {
      title: 'Buku 1',
      img: 'https://ruangmenulis.id/wp-content/uploads/2021/04/Ayatayatcinta.jpg',
      link: '#',
    },
    {
      title: 'Buku 2',
      img: 'https://ebooks.gramedia.com/ebook-covers/52555/image_highres/ID_AYAYCI22020MTH05.jpg',
      link: '#',
    },
    {
      title: 'Buku 3',
      img: 'https://kubuku.id/api/generic/showCover/BK46696',
      link: '#',
    },
  ];

  return (
    <div className="album py-5 bg-light" dir="rtl">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {books.map((book, index) => (
            <div className="col" key={index}>
              <div className="card shadow-sm">
                <img src={book.img} className="bd-placeholder-img card-img-top" alt={book.title} />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary">Beli</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Book;
