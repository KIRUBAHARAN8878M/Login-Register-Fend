import React from "react";
import { env } from "../config";
import { useFormik } from "formik";
import axios from "axios";

function Passwordreset() {
  let formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      let user = await axios.post(`${env.api}/resetpassword`, values);
      console.log(user.data.message);
      alert(user.data.message);
    },
  });
  return (
    <div className="container">
        <span className="row d-flex align-content-center justify-content-center ">
          <span className="col-lg-4 col-md-6 col-sm-9 pt-5 ">
            {/* <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9"> */}
            <div className="card o-hidden border-0 shadow-lg  mt-5 transp pt-2 d-flex align-content-center">
              <div className="card-body p-2">
                {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                  <div className="col-lg-9 mx-auto">
                    <div className="p-0">

                      
                      <div className=" card-header text-center">
                        <h1 className="h4  myname">
                          Welcome To Email verifycation Page!
                        </h1>
                      </div>

                    <form onSubmit={formik.handleSubmit}>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Enter mail address to confirm
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                        />
                      </div>

                      <button type="submit" class="btn btn-outline-primary myname">
                        Submit
                      </button>
                    </form>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </span>
        </span>
      </div>
  );
}

export default Passwordreset;
