import React from "react";
function Title() {
  return (
    <div
      style={{ paddingTop: "70px" }}
      className="container-fluid pb-5 webtitle"
    >
      <div className="row text-center align-items-center ">
        <div className="col-12 col-md-6">
          <img
            tabIndex={"0"}
            className="img-fluid w-75 rounded-circle prof "
            src="https://i.imgur.com/xgw9tvR.jpg"
            alt=""
          />
        </div>

        <div className="col-12 col-md-6 pt-5 pl-0">
          <div className="pl-2 font-weight-light " style={{ fontSize: "30px" }}>
            <h2 className="font-weight-light pt-2 ">
              Hi, I am{" "}
              <span style={{ color: "darkblue" }}>
                <b>Kushagra Agrawal</b>
              </span>
            </h2>
          </div>
          <h4 className="font-weight-light  pt-2">I am a freelancer</h4>
          <div>
            <img className="gif" src="https://i.imgur.com/BFeuUGv.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
