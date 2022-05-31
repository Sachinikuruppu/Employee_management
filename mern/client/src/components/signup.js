import React, {useState} from "react";
import { useNavigate } from "react-router";
export default function SignUp() {
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        email: "",
        password:"",
      });
      const navigate = useNavigate();
      
      // These methods will update the state properties.
      function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }
      
      // This function will handle the submission.
      async function onSubmit(e) {
        e.preventDefault();
      
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };
      
        await fetch("http://localhost:5000/user/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPerson),
        })
        .catch(error => {
            window.alert(error);
            return;
          });
        
          setForm({ fname: "",  lname: "", email: "", password: "" });
          navigate("/");
        }
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form  onSubmit={onSubmit}>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label className="x">First name</label>
                    <input type="text" className="form-control" placeholder="First name"
                    id="fname" value={form.fname}
                    onChange={(e) => updateForm({ fname: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label className="x">Last name</label>
                    <input type="text" className="form-control" placeholder="Last name"
                        id="lname" value={form.lname}
                        onChange={(e) => updateForm({ lname: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label className="x">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                      id="email" value={form.email}
                      onChange={(e) => updateForm({ email: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label className="x">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                      id="password" value={form.password}
                      onChange={(e) => updateForm({ password: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div>
    </div>
        );
    }
