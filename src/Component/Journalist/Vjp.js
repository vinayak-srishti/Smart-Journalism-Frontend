// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom'; 
// import axios from 'axios'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// // import "/Admin/Jprofile.css"


// function Vjp() {
//     const [journalist, setJournalist] = useState(null); 
//   const  id  =localStorage.getItem("journal")
  

//   useEffect(() => {
//     console.log("ygyygyg",id);
    
//     axios.post(`http://localhost:4033/viewjournalistid/${id}`)
//       .then(result => {
//         console.log(result);
//         setJournalist(result.data.msg);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data', error);
//       });
//   }, [id]);
//   return (
    
   

//     <div className="user-profile">
        
//       <div className="profile-header">
//         <div className="card-body">
          
//           <h1>{journalist?.Name}</h1>
       
//         <div className="profile-details">
//           <p className="card-text"><b>Password:</b> {journalist?.Password}</p>
//           <p className="card-text"><b>Contact:</b> {journalist?.Contact}</p>
//           <p className="card-text"><b>Email:</b> {journalist?.Email}</p>
//           <p className="card-text"><b>Gender:</b> {journalist?.Gender}</p>
//           <p className="card-text"><b>DOB:</b> {journalist?.DOB}</p>
//           <p className="card-text"><b>Age:</b> {journalist?.Age}</p>
//           <p className="card-text"><b>Blood Group:</b> {journalist?.Bloodgroup}</p>
//           <p className="card-text"><b>Qualification:</b> {journalist?.Qulification}</p>
//           <p className="card-text"><b>Address: </b>{journalist?.Address}</p>
//           <div className="d-flex justify-content-center">
//                                     <button type="submit" className="btn btn-primary" style={{ width: "250px", border: "none", backgroundColor: "#05192c" }}>
//                                         Edit Profile
//                                     </button>
//                                 </div>
//           </div>
//         </div>
//       </div>
//       </div>
    
//   )
// }

// export default Vjp
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Vjp() {
    const [journalist, setJournalist] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        contact: '',
        email: '',
        gender: '',
        dob: '',
        age: '',
        bloodgroup: '',
        qualification: '',
        address: '',
        image: null  
    });
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); 
    const id = localStorage.getItem("journal");

    useEffect(() => {
        axios.post(`http://localhost:4033/viewjournalistid/${id}`)
            .then(result => {
                setJournalist(result.data.msg);
                setFormData({
                    name: result.data.msg.Name,
                    password: result.data.msg.Password,
                    contact: result.data.msg.Contact,
                    email: result.data.msg.Email,
                    gender: result.data.msg.Gender,
                    dob: result.data.msg.DOB,
                    age: result.data.msg.Age,
                    
                    qualification: result.data.msg.Qualification,
                    address: result.data.msg.Address,
                    image: null  
                });
            })
            .catch(error => {
                console.error('There was an error fetching the data', error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] }); 
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        axios.post(`http://localhost:4033/editjournalist/${id}`, formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(result => {
            setJournalist(result.data.msg);
            setIsEditing(false);
            setMessage('Profile updated successfully!');
            setMessageType('success');
        })
        .catch(error => {
            console.error('There was an error updating the profile', error);
            setMessage('Failed to update profile. Please try again.');
            setMessageType('error');
        });
    };

    return (
        <div className="user-profile">
            <div className="profile-header">
                <div className="card-body">
                    {isEditing ? (
                       <form onSubmit={handleSubmit}>
                           <div className="row mb-3">
                               <div className="col-md-3">
                                   <label>Name:</label>
                               </div>
                               <div className="col-md-9">
                                   <input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange} />
                               </div>
                           </div>
                           
                           <div className="row mb-3">
                               <div className="col-md-3">
                                   <label>Password:</label>
                               </div>
                               <div className="col-md-9">
                                   <input type="password" className="form-control" name="password" value={formData.password} onChange={handleInputChange} />
                               </div>
                           </div>
                       
                           <div className="row mb-3">
                               <div className="col-md-3">
                                   <label>Contact:</label>
                               </div>
                               <div className="col-md-9">
                                   <input type="text" className="form-control" name="contact" value={formData.contact} onChange={handleInputChange} />
                               </div>
                           </div>
                       
                           <div className="row mb-3">
                               <div className="col-md-3">
                                   <label>Email:</label>
                               </div>
                               <div className="col-md-9">
                                   <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} />
                               </div>
                           </div>
                       
                           <div className="row mb-3">
                               <div className="col-md-3">
                                   <label>Gender:</label>
                               </div>
                               <div className="col-md-9">
                                   <input type="text" className="form-control" name="gender" value={formData.gender} onChange={handleInputChange} />
                               </div>
                           </div>
                       
                           <div className="row mb-3">
                               <div className="col-md-3">
                                   <label>DOB:</label>
                               </div>
                               <div className="col-md-9">
                                   <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleInputChange} />
                               </div>
                           </div>
                       
                           <div className="row mb-3">
                               <div className="col-md-3">
                                   <label>Age:</label>
                               </div>
                               <div className="col-md-9">
                                   <input type="number" className="form-control" name="age" value={formData.age} onChange={handleInputChange} />
                               </div>
                           </div>
                       
                           
                       
                           <div className="row mb-3">
                               <div className="col-md-3">
                                   <label>Qualification:</label>
                               </div>
                               <div className="col-md-9">
                                   <input type="text" className="form-control" name="qualification" value={formData.qualification} onChange={handleInputChange} />
                               </div>
                           </div>
                       
                           <div className="row mb-3">
                               <div className="col-md-3">
                                   <label>Address:</label>
                               </div>
                               <div className="col-md-9">
                                   <textarea className="form-control" name="address" value={formData.address} onChange={handleInputChange} />
                               </div>
                           </div>
                       
                           <div className="row mb-3">
                               <div className="col-md-3">
                                   <label>Upload Image:</label>
                               </div>
                               <div className="col-md-9">
                                   <input type="file" className="form-control-file" name="image" onChange={handleInputChange} />
                               </div>
                           </div>
                       
                           <div className="d-flex justify-content-center">
                               <button type="submit" className="btn btn-primary" style={{ width: "250px", border: "none", backgroundColor: "#05192c" }}>
                                   Save Changes
                               </button>
                           </div>
                       </form>
                    ) : (
                        <>
                            <h1>{journalist?.Name}</h1>
                            <div className="profile-details">
                                <p className="card-text"><b>Password:</b> {journalist?.Password}</p>
                                <p className="card-text"><b>Contact:</b> {journalist?.Contact}</p>
                                <p className="card-text"><b>Email:</b> {journalist?.Email}</p>
                                <p className="card-text"><b>Gender:</b> {journalist?.Gender}</p>
                                <p className="card-text"><b>DOB:</b> {journalist?.DOB}</p>
                                <p className="card-text"><b>Age:</b> {journalist?.Age}</p>
                                
                                <p className="card-text"><b>Qualification:</b> {journalist?.Qualification}</p>
                                <p className="card-text"><b>Address: </b>{journalist?.Address}</p>
                                <div className="d-flex justify-content-center">
                                    <button onClick={() => setIsEditing(true)} className="btn btn-primary" style={{ width: "250px", border: "none", backgroundColor: "#05192c" }}>
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        </>
                    )}

                    
                    {message && (
                        <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">
                            {message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Vjp;