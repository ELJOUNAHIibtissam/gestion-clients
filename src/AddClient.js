import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddClient = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tele, setTele] = useState("");
  const [validation, setVal] = useState(false);
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    const data = { id, name, email, tele };

    fetch("http://localhost:8000/client", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        alert("saved sucessfully.");
        navigate("/");
      })

      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6 ">
          <form onSubmit={handelSubmit} className="container">
            <div className="card text-start ">
              <div className="card-title">
                <h2 className="text-center mt-2 " >
                <img src="/add.png" ></img>
                  add client
                </h2>
              </div>
              <div className="card-body">
                <div className="row gap-3 ">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID#</label>
                      <input
                        value={id}
                        className="form-control"
                        disabled
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        name<span className="text-danger">*</span>{" "}
                      </label>
                      <input
                        required
                        value={name}
                        onMouseDown={(e) => setVal(true)}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      ></input>
                      {name.length === 0 && validation && (
                        <span className="text-danger">Entrer le nom</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>phone</label>
                      <input
                        value={tele}
                        onChange={(e) => setTele(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-2">
                    <div className="form-group">
                      <button type="submit" className="btn btn-danger">
                        save
                      </button>
                      <Link to="/" className="btn btn-primary">
                        back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClient;
