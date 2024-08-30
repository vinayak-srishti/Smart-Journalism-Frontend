
import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';

function Newss(newsData) {

    const jid=localStorage.getItem('journal')
    console.log(jid);
    
    const [data, setData] = useState({
        Journalist: "",
        Textitle: "",
        Date: "",
        Location: "",
        image: null,
        content: "",
        JournalistId:jid
    });
// useEffect(()=>{
//     if(newsData&&newsData.JouranalistId){
//         setData(prevData=>({
//             ...prevData,JouranalistId:newsData.JouranalistId
//         }));  
//     }
// },[newsData])

    const example = (a) => {
        if (a.target.type === "file") {
            setData({ ...data, [a.target.name]: a.target.files[0] });
        } else {
            setData({ ...data, [a.target.name]: a.target.value });
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });

        axios.post('http://localhost:4033/newsadd', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((result) => {
            console.log(result);
            alert("News updated");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style={{ width: "500px", border: "1px solid #000", backgroundColor: "transparent" }}>
                        <div className="card-body p-5">
                            <h2 className="text-uppercase text-center mb-5" style={{ color: "#726e6e", fontSize: "32px", fontFamily: "fantasy" }}>
                                UPLOAD NEWS
                            </h2>
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        id="journalist"
                                        className="form-control form-control-lg"
                                        style={{
                                            border: "1px solid #000",
                                            borderRadius: "3px",
                                            padding: "10px",
                                            fontSize: "16px",
                                            backgroundColor: "transparent",
                                            outline: "none",
                                            boxShadow: "none"
                                        }}
                                        placeholder="Journalist"
                                        onChange={example}
                                        name="Journalist"
                                        value={data.Journalist}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        id="title"
                                        className="form-control form-control-lg"
                                        style={{
                                            border: "1px solid #000",
                                            borderRadius: "3px",
                                            padding: "10px",
                                            fontSize: "16px",
                                            backgroundColor: "transparent",
                                            outline: "none",
                                            boxShadow: "none"
                                        }}
                                        placeholder="Title"
                                        onChange={example}
                                        name="Title"
                                        value={data.Title}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="date"
                                        id="date"
                                        className="form-control form-control-lg"
                                        style={{
                                            border: "1px solid #000",
                                            borderRadius: "3px",
                                            padding: "10px",
                                            fontSize: "16px",
                                            backgroundColor: "transparent",
                                            outline: "none",
                                            boxShadow: "none"
                                        }}
                                        placeholder="Date"
                                        onChange={example}
                                        name="Date"
                                        value={data.Date}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        id="location"
                                        className="form-control form-control-lg"
                                        style={{
                                            border: "1px solid #000",
                                            borderRadius: "3px",
                                            padding: "10px",
                                            fontSize: "16px",
                                            backgroundColor: "transparent",
                                            outline: "none",
                                            boxShadow: "none"
                                        }}
                                        placeholder="Location"
                                        onChange={example}
                                        name="Location"
                                        value={data.Location}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="file"
                                        id="image"
                                        className="form-control form-control-lg"
                                        style={{
                                            border: "1px solid #000",
                                            borderRadius: "3px",
                                            padding: "10px",
                                            fontSize: "16px",
                                            backgroundColor: "transparent",
                                            outline: "none",
                                            boxShadow: "none"
                                        }}
                                        onChange={example}
                                        name="image"
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        id="content"
                                        className="form-control form-control-lg"
                                        style={{
                                            border: "1px solid #000",
                                            borderRadius: "3px",
                                            padding: "10px",
                                            fontSize: "16px",
                                            backgroundColor: "transparent",
                                            outline: "none",
                                            boxShadow: "none"
                                        }}
                                        placeholder="Content"
                                        rows="4"
                                        onChange={example}
                                        name="Content"
                                        value={data.Content}
                                    ></textarea>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{
                                            width: "450px",
                                            border: "none",
                                            backgroundColor: "#05192c",
                                            borderRadius: "0px"
                                        }}
                                    >
                                        Upload
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newss;

