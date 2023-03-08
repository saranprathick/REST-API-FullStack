import React,{useState} from 'react';
import './Poststyle.css';
// import { useNavigate } from 'react-router-dom';


function Register() {
    // const navigate=useNavigate();
    const [id, setId] = useState('');
    const [carName, setCarName] = useState('');
    const [speed, setSpeed] = useState('');
    const [yearModified, setYearModified] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [seater, setSeater] = useState('');
    const [fueltype, setFuelType] = useState('');
   
    const save = (e) => {
        e.preventDefault();
        const object = {
            id,carName,speed,yearModified,brand,price,seater,fueltype
        }
        fetch("http://localhost:8080/car",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(object)}).then(console.log("New Car Details Added"));
        alert("car details added");
    }

    return ( 
    <>
     <div className='container' style={{paddingTop:40}}>
        <div style={{border:'5px sold black',backgroundColor:"white",borderRadius:5,backgroundColor:"Lightpink"}}>
            <center>
                <h1>Car Details Enter form</h1>
                <form>
                    
                    <div className='row' style={{padding:10,width:400}}>
                        <label>ID</label>
                        <input type="text" value={id} onChange={(event) => setId(event.target.value)} placeholder='Type id here'/> 
                    </div>
                    
                    <div className='row' style={{padding:10,width:400}}>
                        <label>CARNAME</label>
                        <input type="text"  value={carName} onChange={(event) => setCarName(event.target.value)} placeholder='Type carname  here'/> 
                    </div>
                    
                    <div className='row' style={{padding:10,width:400}}>
                        <label>SPEED</label>
                        <input type="text"  value={speed} onChange={(event) => setSpeed(event.target.value)} placeholder='Type speed  here' /> 
                    </div>
                    <div className='row' style={{padding:10,width:400}}>
                        <label>YEARMODIFIED</label>
                        <input type="text"  value={yearModified} onChange={(event) => setYearModified(event.target.value)} placeholder='Type yearModified  here' /> 
                    </div>
                    
                    <div className='row' style={{padding:10,width:400}}>
                        <label>BRAND</label>
                        <input type="text"  value={brand} onChange={(event) => setBrand(event.target.value)} placeholder='Type brand  here' /> 
                    </div>
                    
                    <div className='row' style={{padding:10,width:400}}>
                         <label>PRICE</label>
                         <input type="text"  value={price} onChange={(event) => setPrice(event.target.value)} placeholder='Type price  here' /> 
                    </div>
                    
                    <div className='row' style={{padding:10,width:400}}>
                        <label>SEATER</label>
                        <input type="text"  value={seater} onChange={(event) => setSeater(event.target.value)} placeholder='Type seater  here' /> 
                    </div>
                    
                    <div className='row' style={{padding:10,width:400}}>
                        <label>FUELTYPE</label>
                        <input type="text"  value={fueltype} onChange={(event) => setFuelType(event.target.value)} placeholder='Type fueltype  here' /> 
                    </div>
                    
                    {/* <div className='Postb'> */}
                        <button className='btn btn-primary' onClick={save}>POST</button>

                    {/* <button  class="btn btn-primary">GET</button>
                    <button  class="btn btn-primary">DELETE</button>
                    <button   class="btn btn-primary">PUT</button> */}
    </form>
    </center>
    </div>
    </div>
    </>
     );
}

export default Register;