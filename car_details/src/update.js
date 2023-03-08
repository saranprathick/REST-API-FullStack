import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './putstyle.css';

function Update1() {
  const [id, setId] = useState('');
  const [carName, setCarName] = useState('');
  const [speed, setSpeed] = useState('');
  const [yearModified, setYearModified] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [seater, setSeater] = useState('');
  const [fueltype, setFuelType] = useState('');
  const[mydata,setMyData]=useState([]);
  useEffect(() => {
    axios
        .get("http://localhost:8080/car")
        .then((response) => {
            console.log(response.data)
            setMyData(response.data)
        })
}, []);
 
  async function update(event) {
    let length=Object.keys(mydata).length;
    let f=0;
    event.preventDefault();
    for(let i=0;i<length;i++){
      if(Number(id)===mydata[i].id){
        f=1;

    try {
        await axios.put("http://localhost:8080/car",
            {

                id: id,
                carName:carName,
                speed: speed,
                yearModified:yearModified,
                brand: brand,
                price: price,
                seater: seater,
                fueltype: fueltype


            });
        alert("Car Details Successfully Updated");
        setId();
        setCarName();
        setSpeed();
        setYearModified();
        setBrand();
        setPrice();
        setSeater();
        setFuelType();


    }
    catch (err) {
        alert("update Failed");
    }
  }
  // else{
    
    // }
  }
  if(f===0){
    alert("Id Not Found");
  }
  }
  return (
    <><center>
    <form className="form" >
      <label className="label">
        Id : <br/>
        <input className="input" type="text" value={id} onChange={(event) => setId(event.target.value)} placeholder="Enter Id here"/><br/><br></br>
      </label><br></br>
      <label className="label">
        CarName : <br/>
        <input className="input" type="text" value={carName} onChange={(event) => setCarName(event.target.value)} placeholder="Enter CarName here" /><br/>
      </label>
      <br></br><br></br>
      <label className="label">
        Speed : <br/>
        <input className="input" type="text" value={speed} onChange={(event) => setSpeed(event.target.value)}placeholder="Enter Speed here" /><br/>
      </label><br></br><br></br>
      <label className="label">
      YearModified :<br/>
        <input className="input" type="text" value={yearModified} onChange={(event) => setYearModified(event.target.value)} placeholder="Enter yearModified here" /><br/>
      </label><br></br><br></br>
      <label className="label">
        Brand :<br/>
        <input className="input" type="text" value={brand} onChange={(event) => setBrand(event.target.value)}placeholder="Enter brand here" /><br/>
      </label><br></br><br></br>
      <label className="label">
        Price :<br/>
        <input className="input" type="text" value={price} onChange={(event) => setPrice(event.target.value)}placeholder="Enter price here" /><br/>
      </label>
      <br></br><br></br>
      <label className="label">
        Seater :<br/>
        <input className="input" type="text" value={seater} onChange={(event) => setSeater(event.target.value)}placeholder="Enter seater here" /><br/>
      </label>
      <br></br><br></br>
      <label className="label">
        FuelType :<br/>
        <input className="input" type="text" value={fueltype} onChange={(event) => setFuelType(event.target.value)}placeholder="Enter fueltype here" /><br/>
      </label>
      <br></br>
      <br></br>
      <center>
        <button className='btn btn-primary' onClick={update}>Update</button>
      </center>
    </form>
    </center></>
  );
}



function Update() {
  const [fit, setFit] = useState([]);

  function handleAddTelevision(fits) {
    setFit([...fit, fits]);
  }

  return (
    <div className='all'>
    <br/>
    <div className="container">
      <Update1 Form onAddTelevision={handleAddTelevision} />

    </div>
    <br/><br/>
    {/* <center>
    <Link to='/'>
                <button type="submit" class="btn btn-primary" style={{padding
                :'5px'}}
                >Back</button>
            </Link></center> */}
    </div>
    
  );
}

export default Update;