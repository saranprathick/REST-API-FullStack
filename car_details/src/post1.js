import React,{useState} from 'react';
import './post1.css';
// import { useNavigate } from 'react-router-dom';
// import * from 'react-bootstrap';
import * as i from 'react-bootstrap-icons';



function Register1() {
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
         <section className="vh-100" >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Car Details</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                      <label className="form-label" htmlFor="form3Example1c">Id</label>
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" value={id} onChange={(event) => setId(event.target.value)}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                      <label className="form-label" htmlFor="form3Example3c">CarName</label>
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example3c" className="form-control" value={carName} onChange={(event) => setCarName(event.target.value)}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                      <label className="form-label" htmlFor="form3Example4c">Speed</label>
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example4c" className="form-control" value={speed} onChange={(event) => setSpeed(event.target.value)}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                      <label className="form-label" htmlFor="form3Example4cd">YearModified</label>
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example4cd" className="form-control" value={yearModified} onChange={(event) => setYearModified(event.target.value)}/>
                    </div>
                  </div>
                  

                  <div className="d-flex flex-row align-items-center mb-4">
                      <label className="form-label" htmlFor="form3Example4cd">Brand</label>
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example4cd" className="form-control" value={brand} onChange={(event) => setBrand(event.target.value)}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                      <label className="form-label" htmlFor="form3Example4cd">Price</label>
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example4cd" className="form-control" value={price} onChange={(event) => setPrice(event.target.value)}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                      <label className="form-label" htmlFor="form3Example4cd">Seater</label>
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example4cd" className="form-control" value={seater} onChange={(event) => setSeater(event.target.value)}/>
                    </div>
                  </div>
                  
                  <div className="d-flex flex-row align-items-center mb-4">
                      <label className="form-label" htmlFor="form3Example4cd">Fueltype</label>
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example4cd" className="form-control" value={fueltype} onChange={(event) => setFuelType(event.target.value)}/>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={save}>POST</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
     );
}

export default Register1;