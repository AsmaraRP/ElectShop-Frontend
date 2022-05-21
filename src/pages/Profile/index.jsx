import "./index.css";
// import logo from "../../assets/images/logo.png";
import photo from "../../assets/images/profile__photo.png";
import line from "../../assets/images/profile__line.png";
import uploadIcon from "../../assets/images/profile__upload.png";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
// import photoProfile from "../../assets/siluetprofil.png";
// import { updateUser, getUserById, updatePasswod } from "../../stores/actions/user";

function Profile() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleNavigate = (nav) => {
//     navigate(`/${nav}`);
//   };
    const [gender, setGender] = useState(0);
    const [seePass, setSeePass] = useState(1)
//   const user = useSelector((state) => state.user);
//   const idUser = localStorage.getItem("id");
    const [formUser, setFormUser] = useState({
        name: "",
        address: "",
        phoneNumber: "",
        date: "",
        gender: gender,
        password: ""
    });
//   const [formPassword, setFormPassword] = useState({ newPassword: "", confirmPassword: "" });
    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormUser({ ...formUser, [name]: value});
    };
//   const handleSubmitDetail = async (e) => {
//     try {
//       e.preventDefault();
//       setFormUser({ ...formUser });
//       const sendData = { id: idUser, ...formUser };
//       console.log(sendData);
//       await dispatch(updateUser(idUser, formUser));
//     } catch (error) {
//       console.log(error.response);
//     }
//   };
//   const handleSubmitPassword = async (e) => {
//     try {
//       e.preventDefault();
//       setFormPassword({ ...formPassword });
//       const sendDataPassword = { id: idUser, ...formPassword };
//       console.log(sendDataPassword);
//       await dispatch(updatePasswod(idUser, formPassword));
//     } catch (error) {
//       console.log(error.response);
//     }
//   };
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("refreshToken");
//     localStorage.removeItem("id");
//     navigate("/profile");
//   };
    const handleGender = (e) => {
        e.preventDefault();
        setGender(!gender);
        setFormUser({ ...formUser, gender:gender ? "female" : "male"});
    }
    const handleChangePassword = (e) => {
        e.preventDefault();
        setSeePass(!seePass);
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(formUser) 
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
      <div className="profile__mainPage">
          <div className="container">
              <div className="profile__photoSetting">
                <img src={photo} className="profile__photoProfile" alt=""/>
                <div className="profile__uploadIcon">
                    <img src={uploadIcon} alt="" className="profile__uploadIcon" />
                </div>
              </div>
              <div className="profile__des">
                  <h1 className="profile__info">Edit your personal bio</h1>
                  <p className="profile__infoDetail">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                  <img src={line} alt="" className="profile__boundary"/>
              </div>
              <form action="" className="profile__form">
                  <div className="row">
                      <div className="col-md-auto">
                      <div className="profile__cardForm">
                        <label className="form-label profile__labelForm">Name</label>
                        <div className="row profile__formatForm">
                            <div className="col-2 profile__icon">
                                <i className="bi bi-person"></i>
                            </div>
                            <div className="col-10">
                                <input
                                className="profile__inputForm d-flex"
                                type="text"
                                placeholder="What is Your Name"
                                name="name"
                                onChange={handleChangeForm}
                                value={formUser.name}
                                />
                            </div>
                        </div>
                      </div>
                      <div className="profile__cardForm">
                        <label className="form-label profile__labelForm">Address</label>
                        <div className="row profile__formatForm">
                            <div className="col-2 profile__icon">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="col-10">
                                <input
                                className="profile__inputForm d-flex"
                                type="text"
                                placeholder="Where is your house address"
                                name="address"
                                onChange={handleChangeForm}
                                value={formUser.address}
                                />
                            </div>
                        </div>
                      </div>
                      <div className="profile__cardForm">
                        <label className="form-label profile__labelForm">Phone Number</label>
                        <div className="row profile__formatForm">
                            <div className="col-2">
                                <select
                                    name="codePhone"
                                    className="profile__codePhone"
                                    >
                                        <option value="0">+62</option>
                                        <option value="1">+63</option>
                                        <option value="2">+64</option>
                                </select>
                            </div>
                            <div className="col-10">
                                <input
                                className="profile__inputForm d-flex"
                                type="text"
                                placeholder="Enter your phone number"
                                name="phoneNumber"
                                onChange={handleChangeForm}
                                value={formUser.phoneNumber}
                                />
                            </div>
                        </div>
                      </div>
                      </div>
                      <div className="col-md-auto">
                      <div className="profile__cardForm">
                        <label className="form-label profile__labelForm">Date of Birth</label>
                        <div className="row profile__formatForm">
                            <div className="col-2 profile__icon">
                            <i className="bi bi-calendar"></i>
                            </div>
                            <div className="col-10">
                                <input
                                className="profile__inputForm d-flex"
                                type="text"
                                placeholder="When were you born"
                                name="date"
                                onChange={handleChangeForm}
                                value={formUser.date}
                                />
                            </div>
                        </div>
                      </div>
                      <div className="profile__cardForm">
                        <label className="form-label profile__labelForm">Gender</label>
                        <div className="row profile__genderForm">
                            <div className={gender ? "col-6 profile__iconGenderActive" : "col-6 profile__iconGender"}>
                                <div className="row">
                                    <div className="col-3">
                                        <i className="bi bi-gender-male"></i>
                                    </div>
                                    <div className="col-9">
                                        <button className={gender ? "col-6 profile__genderButtonActive" : "col-6 profile__genderButton"} onClick={handleGender}>Male</button>
                                    </div>
                                </div>
                            </div>   
                            <div className={!gender ? "col-6 profile__iconGenderActive" : "col-6 profile__iconGender"}>
                                <div className="row">
                                        <div className="col-3">
                                            <i className="bi bi-gender-female"></i>
                                        </div>
                                        <div className="col-9">
                                            <button className={!gender ? "col-6 profile__genderButtonActive" : "col-6 profile__genderButton"} onClick={handleGender}>Female</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                      </div>
                      <div className="profile__cardForm">
                        <label className="form-label profile__labelForm">Password</label>
                        <div className="row profile__formatForm">
                            <div className="col-2 profile__icon">
                            <i className="bi bi-key"></i>
                            </div>
                            <div className="col-7">
                                <input
                                className="profile__inputForm d-flex"
                                type={seePass ? "password" : "text"}
                                placeholder="Your password"
                                name="password"
                                onChange={handleChangeForm}
                                value={formUser.password}
                                />
                            </div>
                            <div className="col-3">
                                <button className="profile__changePassword" onClick={handleChangePassword}>Change</button>
                            </div>
                        </div>
                      </div>
                      </div>
                  </div>
                  <button className="profile__submitButton" onClick={handleSubmit}>Submit</button>
              </form>

          </div>
      </div>
    </>
  );
}
export default Profile;