import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/account.js';

function Login() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const form = document.getElementById("form_login");
        const user = document.getElementById("login_user");
        const password = document.getElementById("login_password");

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();
            setLoading(true);

            const userValue = user.value.trim();
            const passwordValue = password.value.trim();

            if (userValue === "") {
                setError(user, "User can't be blank");
                setLoading(false);
            } else {
                setSuccess(user);
            }

            if (passwordValue === "") {
                setError(password, "Password can't be blank");
                setLoading(false);
            } else {
                setSuccess(password);
            }

            if (userValue && passwordValue) {
                const data = {
                    username: userValue,
                    password: passwordValue,
                    
                };

                const username = 'your-username'; // Replace with your WordPress username
                const password = 'your-password'; // Replace with your WordPress password
                const base64Credentials = "&BZd]N-ghz|hbH`=%~a5z(`mR=n%7#8-Iz@KoqtDhQ6(8h$og%-IbI#>N*T`s9Dg";

                fetch("https://www.admin.neocompany.org/index.php/wp-json/jwt-auth/v1/token", {
                    method: 'POST',
                    // headers: {
                    //     'Authorization': `Basic ${base64Credentials}`,
                    //     'Content-Type': 'application/json'
                    // },
                    body: JSON.stringify(data),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log('Response data:', data);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error('Error sending data:', error);
                        setLoading(false);
                    });
            }
        }

        function setError(input, message) {
            const formControl = input.parentElement;
            const errorMsg = formControl.querySelector(".login_input-msg");
            formControl.className = "form-control text-left error";
            errorMsg.innerText = message;
        }

        function setSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";
        }
    }, []);

    return (
        <Styles>
            <div className="main-wrapper login-page">
                <section className="login-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="login-box">
                                    <div className="login-title text-center">
                                        <h3>Connectez-vous</h3>
                                    </div>
                                    <form id="form_login" className="form">
                                        <p className="form-control">
                                            <label htmlFor="login_user">Nom</label>
                                            <input type="text" placeholder="Username" id="login_user" />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="login_password">Mot de passe</label>
                                            <input type="password" placeholder="*******" id="login_password" />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        <button disabled={loading}>
                                            {loading ? 'Sending...' : 'Log In'}
                                        </button>
                                        <div className="save-forget-password d-flex justify-content-between">
                                            <div className="save-passowrd">
                                                <label htmlFor="save_password"><input type="checkbox" id="save_password" className="check-box" />Save Password</label>
                                            </div>
                                            <div className="forget-password">
                                                <Link to={process.env.PUBLIC_URL + "/"}>Forget Password?</Link>
                                            </div>
                                        </div>
                                        <div className="not_account-btn text-center">
                                            <p>Haven't Any Account Yet? <Link to={process.env.PUBLIC_URL + "/registration"}>Click Here</Link></p>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </Styles>
    )
}

export default Login;
