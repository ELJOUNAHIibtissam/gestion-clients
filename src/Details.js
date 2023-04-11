import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Detail = () => {
    const { clientid } = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/client/" + clientid).then((res) => {
            return res.json();
        }).then((resp) => {
            setData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row text-start ">
                <div className="card-title">
                    <h2>client details</h2>
                </div>
                <div className="card-body"></div>

                {data &&
                    <div>
                        <h2>The client name is : <b>{data.name}</b>  ({data.id})</h2>
                        <h3>Contact Details</h3>
                        <h5>Email is : {data.email}</h5>
                        <h5>Phone is : {data.tele}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default Detail;