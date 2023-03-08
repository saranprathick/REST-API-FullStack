import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
// import Find from './Find';
function Delete() {
    const [id, setId] = useState('');
    const [error, setError] = useState('');
    const[mydata,setMyData]=useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/car")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
    }, []);
    function del() {
        let length=Object.keys(mydata).length;
    let f=0;
    // event.preventDefault();
    for(let i=0;i<length;i++){
      if(Number(id)===mydata[i].id){
        f=1;

    try {
       
        axios
            .delete('http://localhost:8080/car?id=' + id)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => setError(error.message));
        alert("Car Details Deleted");
    }
    catch(err){
        alert("Registration failed");
    }
}

}
if(f===0){
    alert("ID not found");
}
    
    }
    //  []);
    // }
    return (
        <>
        <center>
            <h2>Delete method</h2>
            <br></br>
            <div>
                <input type="number" placeholder='Enter Id' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}/>
            </div>
            <br></br>
            <button type="submit" class="btn btn-primary" onClick
                ={del}>Delete</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <Link to='/'>
                <button type="submit" class="btn btn-primary"
                >Back</button>
            </Link> */}
            <h2>
                {error}
            </h2>
            {/* <div className='Find'>

                <Find />
            </div> */}
            </center>
        </>
    );
}

export default Delete;