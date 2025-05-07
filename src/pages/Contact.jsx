function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-35">
    
      <div className="flex justify-center md:justify-start">
        <iframe
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7905.697855943306!2d113.963688!3d-7.805813000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6d7657a3c82e9%3A0x572aeb1a15986a42!2sCV.CITRA%20DAYA%20INSANI%20PROJECT!5e0!3m2!1sid!2sid!4v1746593042833!5m2!1sid!2sid"
          width="100%" 
          height="400" 
          className="border-0"
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>

      <div className="md:col-span-1">
        <form className="space-y-4">
          <div className="mb-3">
            <label className="block text-lg font-semibold text-gray-700">Nama</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" required />
          </div>
          
          <div className="mb-3">
            <label className="block text-lg font-semibold text-gray-700">Email</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" required />
          </div>

          <div className="mb-3">
            <label className="block text-lg font-semibold text-gray-700">Pesan</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-lg" rows="4" required></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
