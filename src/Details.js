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
                
            <div className="card w-75 m-auto my-5 py-4 px-3 row text-start ">
                <div className="card-title">
                <h2 className="text-decoration-underline" >
            <img src="/list.png" className="img" ></img>
            Client Details</h2>
                </div>
                <div className="card-body"></div>

                {data &&
                    <div>
                        <h2 className="border-bottom my-4 " >Name client : <b className="text-info" >{data.name}</b></h2>
                        <h3 className="border-bottom my-4" >Contact Details</h3>
                        <h5 className="border-bottom my-4">Email : <span className="text-decoration-underline text-primary" >{data.email}</span></h5>
                        <h5 className="border-bottom my-4">Phone : {data.tele}</h5>
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