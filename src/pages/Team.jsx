function Team() {
    return (
      <div className="row text-center">
        {[1, 2, 3].map(i => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card">
              <img src={`https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D${i}`} className="card-img-top" alt={`Team ${i}`} />
              <div className="card-body">
                <h5 className="card-title">Anggota {i}</h5>
                <a href="https://wa.me/6281234567890" className="btn btn-success mb-2">Hubungi via WA</a>
                <div>
                  <a href="https://github.com/" className="me-2" target="_blank">🐙 GitHub</a>
                  <a href="https://instagram.com/" target="_blank">📸 Instagram</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  export default Team
  