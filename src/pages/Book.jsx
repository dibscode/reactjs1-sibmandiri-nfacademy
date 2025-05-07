import React, { useState } from 'react';
import books from '../Utils/books';

function Book() {
  const [bookList, setBookList] = useState(books);

  const addBook = () => {
    const newBook = {
      id: 10,
      title: "TypeScript untuk Pemula",
      author: "John Doe",
      year: 2023,
      description: "Belajar TypeScript dari dasar hingga tingkat lanjut.",
      image: "https://assets.visme.co/templates/banners/thumbnails/i_Programming-Book-Cover_full.jpg"
    };
    setBookList([...bookList, newBook]);
  };

  return (
    <div className="py-5">
      <button onClick={addBook} className="mb-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
        Tambah Buku
      </button>
      <div className="bg-gray-100 py-5" dir="rtl">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bookList.map((book, index) => (
              <div className="flex justify-center" key={index}>
                <div className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300">

                <img src={book.image} className="w-[350px] h-[250px] object-cover" alt={book.title} />
                  <div className="p-4">
                    <h5 className="text-xl font-semibold text-gray-800">{book.title}</h5>
                    <div className="flex justify-between items-center mt-3">
                      <div className="space-x-2">
                        <button className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                          Beli
                        </button>
                        <button className="px-4 py-1 bg-gray-200 text-sm text-gray-700 rounded hover:bg-gray-300">
                          Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
