function Team() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center py-8">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div className="mb-6" key={i}>
          <div className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300 group">
            {/* Gambar dengan efek hover zoom */}
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={`https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D${i}`}
                alt={`Team ${i}`}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Konten */}
            <div className="p-4">
              <h5 className="text-xl font-semibold text-gray-800">Anggota {i}</h5>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
