import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ClientListing = () => {
  const [clientData, setClientData] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/client/detail/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/client/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  const LoadEdit = (id) => {
    navigate("/client/edit/" + id);
  };
  useEffect(() => {
    fetch("http://localhost:8000/client")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setClientData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title ">
          <h2 className="text-decoration-underline" >
            <img src="/list.png" className="img" ></img>
            clients listing</h2>
        </div>
        <div className="card-body">
          <div className="text-end">
            <Link className="btn btn-primary" to="client/add">
              add client (+) 
            </Link>
          </div>

          <table className="table table-bordered border-info table-hover">
            <thead className="bg-light text-black fw-bold ">
              <tr>
                <td>#</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {clientData &&
                clientData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.tele}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                        className="btn btn-info"
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientListing;
