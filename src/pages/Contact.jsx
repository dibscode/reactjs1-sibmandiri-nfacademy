function Contact() {
    return (
      <div className="row">
        <div className="col-md-6 mb-3">
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%" height="300" style={{ border: 0 }}
            allowFullScreen="" loading="lazy"
          ></iframe>
        </div>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Nama</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Pesan</label>
              <textarea className="form-control" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Kirim</button>
          </form>
        </div>
      </div>
    )
  }
  export default Contact
  