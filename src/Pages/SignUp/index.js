import { MyContext } from "../../App";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const context = useContext(MyContext);
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    context.setisHeaderFooterShow(false);

    return () => {
      context.setisHeaderFooterShow(true);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up attempt with:", fullName, mobileNumber, email, password);
  };

  return (
    <section
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "#F5F5DC",
        minHeight: "100vh",
        width: "100vw",
        padding: "20px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg border-0">
              <div className="card-body p-4">
                <h3 className="text-center mb-4">Sign Up</h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      id="mobileNumber"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                  </div>
                </form>

                <div className="divider d-flex align-items-center my-4">
                  <div className="border-bottom flex-grow-1"></div>
                  <span className="px-2 text-muted">OR</span>
                  <div className="border-bottom flex-grow-1"></div>
                </div>

                <div className="d-grid gap-3">
                  <button className="btn btn-lg" style={{ backgroundColor: "#4267B2", color: "white" }}>
                    <FaFacebook className="me-2" /> Continue with Facebook
                  </button>
                  <button className="btn btn-lg btn-outline-danger" style={{ backgroundColor: "white", color: "#DB4437", border: "1px solid #DB4437" }}>
                    <FaGoogle className="me-2" /> Continue with Google
                  </button>
                </div>

                <div className="text-center mt-4">
                  <p className="mb-0">
                    Already have an account?{" "}
                    <Link to="/signin" className="text-decoration-none fw-bold">Sign In</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
