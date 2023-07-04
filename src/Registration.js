import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Registration = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [pass, passchange] = useState("");
  const [email, emailchange] = useState("");
  const [mobile, mobilechange] = useState("");
  const [country, countrychange] = useState("India");
  const [address, addresschange] = useState("");
  const [gender, genderchange] = useState("male");

  const nav = useNavigate();

  const IsValid = () => {
    let isproceed = true;
    let errormsg = "Please Enter the Value In";
    if (id === null || id === "") {
      isproceed = false;
      errormsg += "  UserName";
    }
    if (pass === null || pass === "") {
      isproceed = false;
      errormsg += " Password";
    }

    if (name === null || name === "") {
      isproceed = false;
      errormsg += " FullName";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormsg += " Email";
    }
    if (!isproceed) {
      toast.warning(errormsg);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A_Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please Enter the Valid Email");
      }
    }
    return isproceed;
  };

  //const [id,idchange]=useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, pass, email, mobile, country, address, gender };
    //console.log(regobj);
    if (IsValid()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Registered successfully.");
          nav("/Login");
        })
        .catch((err) => {
          toast.error("Failed:" + err.message);
        });
    }
  };
  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              <h3 style={{textAlign: "center"}}>Registration</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name<span className="errmsg">*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => idchange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password<span className="errmsg">*</span>
                    </label>
                    <input
                      type="password"
                      value={pass}
                      onChange={(e) => passchange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      FullName<span className="errmsg">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => namechange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email<span className="errmsg">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => emailchange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Mobile<span className="errmsg">*</span>
                    </label>
                    <input
                      value={mobile}
                      onChange={(e) => mobilechange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Country<span className="errmsg">*</span>
                    </label>

                    <select
                      value={country}
                      onChange={(e) => countrychange(e.target.value)}
                      className="form-control"
                    >
                      <option>India</option>
                      <option>USA</option>
                      <option>Singapore</option>
                      <option>China</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>
                    Address<span className="errmsg">*</span>
                  </label>
                  <textarea
                    value={address}
                    onChange={(e) => addresschange(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Gender</label>
                  <br></br>
                  <input
                    checked={gender === "male"}
                    onChange={(e) => genderchange(e.target.value)}
                    type="radio"
                    name="Gender"
                    value={"male"}
                    className="app-check"
                  ></input>
                  <label>male</label>
                  <input
                    checked={gender === "female"}
                    onChange={(e) => genderchange(e.target.value)}
                    type="radio"
                    name="Gender"
                    value={"female"}
                    className="app-check"
                  ></input>
                  <label>female</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-success">
              Register
            </button>

            <a className="btn btn-danger" onClick={()=>nav(-1)}>Back</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
