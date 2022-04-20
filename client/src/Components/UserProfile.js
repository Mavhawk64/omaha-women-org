import * as React from "react";
import userIcon from "../Images/user.png";

export default function UserProfile({ userInfo }) {
  const [showUser, toggleUser] = React.useState(false);
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      toggleUser(false);
    }
  };

  return (
    <>
      <div onClick={() => toggleUser(!showUser)} style={{ marginLeft: "15px" }} ref={wrapperRef}>
        <img
          src={userIcon}
          alt="user icon"
          height="40"
          width="40"
          style={{
            borderRadius: "20px",
            background: "transparent",
            cursor: "pointer",
          }}
        />
      </div>
      {showUser && (
        <div
          className="card mb-3"
          style={{
            position: "fixed",
            top: "60px",
            zIndex: "999",
            right: "10px",
          }}
        >
          <div className="card-body">
            <div className="small text-muted">{`${userInfo.User_First} ${userInfo.User_Last}`}</div>
            <h5 classNAme="card-title h4">{userInfo.User_Email}</h5>
            <hr />
            <div className="d-flex justify-content-center">
              <button className="btn bg-pink btn-block btn-sm">Log out</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
