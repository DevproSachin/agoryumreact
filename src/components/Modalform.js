import React, { useState } from 'react'

function Modalform() {
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
      }
  return (
    <div>
          <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-md-6">
                                <input type="text" className="form-control rajdhani-semibold ps-0" id="inputtext4" Value ={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"/>
                            </div>
                            <div className="col-md-6">
                                <input type="tel" className="form-control rajdhani-semibold ps-0" id="email4" placeholder="Telephone" />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control rajdhani-semibold ps-0" id="inputtext4" placeholder="Your email"/>
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control rajdhani-semibold ps-0" id="email4" placeholder="Company" />
                            </div>
                            <div className="col-md-12">
                                <select id="inputState" className="form-select my-3 rajdhani-semibold ps-0">
                                    <option selected className="rajdhani-semibold">Services</option>
                                    <option className="rajdhani-semibold">1</option>
                                    <option className="rajdhani-semibold">2</option>
                                    <option className="rajdhani-semibold">3</option>
                                </select>
                            </div>
                            <div className="mb-3 ai-poppins">
                                <textarea className="form-control rajdhani-semibold ps-0" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
                            </div>

                            <div className="col-12 text-end">
                                <button type="submit" className="ai-form-submit ai-btn btn btn-danger btn-lg ai-rajdhani-medium">Send</button>
                            </div>
                        </form>
    </div>
  )
}

export default Modalform
