import "../index.css";
import signupImg from "../assets/signup.svg"
import signinImg from "../assets/signin.svg"

const Login = () => {

    const signupBtn = () => {
        const container = document.querySelector(".container")
        container.classList.add("sign-up-mode")
    }

    const signinBtn = () => {
        const container = document.querySelector(".container")
        container.classList.remove("sign-up-mode")
    }

    return (
        <div className="w-[100vw] overflow-hidden">
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="" className="sign-in-form">
                            <p className="title">Sign In</p>
                            <div className="input-field">
                                <span className="i"><ion-icon name="person-outline"></ion-icon></span>
                                <input type="text" placeholder="Username"/>
                            </div>
                            <div className="input-field">
                                <span className="i"><ion-icon name="lock-closed-outline"></ion-icon></span>
                                <input type="password" placeholder="Password"/>
                            </div>
                            <input type="submit" value="Login" className="btn solid"/>
                        </form>
                        <form action="" className="sign-up-form">
                            <p className="title">Sign Up</p>
                            <div className="input-field">
                                <span className="i"><ion-icon name="person-outline"></ion-icon></span>
                                <input type="text" placeholder="Username"/>
                            </div>
                            <div className="input-field">
                                <span className="i"><ion-icon name="mail-outline"></ion-icon></span>
                                <input type="email" placeholder="Email"/>
                            </div>
                            <div className="input-field">
                                <span className="i"><ion-icon name="lock-closed-outline"></ion-icon></span>
                                <input type="password" placeholder="Password"/>
                            </div>
                            <input type="submit" value="Login" className="btn solid"/>
                        </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3 className="">New Here?</h3>
                            <p className="">Register with your personal details to use all of the site features</p>
                            <button className="btn transparent" id="sign-up-btn" onClick={signupBtn}>Sign Up</button>
                        </div>
                        <img src={signupImg} className="image" alt=""/>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3 className="">One of us?</h3>
                            <p className="">Enter your personal details to use all of the site features</p>
                            <button className="btn transparent" id="sign-in-btn" onClick={signinBtn}>Sign In</button>
                        </div>
                        <img src={signinImg} className="image" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
