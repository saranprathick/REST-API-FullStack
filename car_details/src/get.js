import { useState, useEffect } from "react";
// import "../style/Main.css";
import axios from "axios";

const Get = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    useEffect(() => {
        axios
            .get("http://localhost:8080/car")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            .catch((error) => setIsError(error.message));
    }, []);
    return (<>
            {/* {isError !== "" && <h2>{isError}</h2>} */}
              
            <div className="grid">
            <center><h1>GET ALL CAR DETAILS</h1></center>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>CarName</th>
                            <th>Speed</th>
                            <th>YearModified</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Seater</th>
                            <th>FuelType</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myData.map((data, index) => {
                                return (
                                    <tr>
                                        {/* <td>{index + 1}</td> */}
                                        <td>{data.id}</td>
                                        <td>{data.carName}</td>
                                        <td>{data.speed}</td>
                                        <td>{data.yearModified}</td>
                                        <td>{data.brand}</td>
                                        <td>{data.price}</td>
                                        <td>{data.seater}</td>
                                        <td>{data.fueltype}</td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Get;