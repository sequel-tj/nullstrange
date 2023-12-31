import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
// import Footer from "../components/Footer";

const Contact = () => {
    const [nameSelected, setNameSelected] = useState('none');
    const [emailSelected, setEmailSelected] = useState('none');
    const [messageSelected, setMessageSelected] = useState('none');
    const [submitBtnClicked, setSubmitBtnClicked] = useState('3px solid var(--danger)');
    const [submitBtnColor, setSubmitBtnColor] = useState('var(--danger)');
    const [submitBtnbackgroundColor, setSubmitBtnbackgroundColor] = useState('rgb( 0 0 0 / 0%)');

    const formSection: React.CSSProperties = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgb(17 17 17 / 30%)',
    };

    const formContainer: React.CSSProperties = {
        background: 'rgb(17 17 17 / 90%)',
        width: '40%',
        height: '75%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: '10px',
        boxShadow: 'rgb(255 255 255 / 50%) 5px 5px 15px 2px',
    };

    const contactInput: React.CSSProperties = {
        width: '80%',
        fontSize: '16px',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '2px 4px',
        border: 'none'
    };

    const submitBtn: React.CSSProperties = {
        width: '90px',
        height: '40px',
        background: '#ffffff',
        fontWeight: '500',
        fontSize: '20px',
        borderRadius: '5px',
        border: 'none', 
        boxShadow: 'var(--danger) 0px 0px 15px',
        outline: `${submitBtnClicked}`,
        color: `${submitBtnColor}`,
        backgroundColor: `${submitBtnbackgroundColor}`,
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('serviceidGmail', 'template_serviceidGmail', form.current, '8de9hVHIH-akTanbG')
        emailjs.sendForm('', '', form.current, '')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        // <div style={{width: '100%', height: '100vh',}}>
        <div style={formSection}>
            <form style={formContainer} ref={form} onSubmit={sendEmail}>
                <h2 style={{ color: 'white', fontSize: '31px', }} >CONTACT ME <span>😀</span></h2>

                <input style={{ ...contactInput, height: '40px', outline: `${nameSelected}`, }} onFocus={() => { setNameSelected('3px solid var(--primary)'); setEmailSelected('none'); setMessageSelected('none');}} placeholder="Name" type="text" autoComplete='off' name="user_name" />

                <input style={{ ...contactInput, height: '40px', outline: `${emailSelected}`, }} onFocus={() => { setEmailSelected('3px solid var(--primary)'); setNameSelected('none'); setMessageSelected('none');}} autoComplete='off' placeholder="Email" type="email" name="user_email" />

                <textarea style={{ ...contactInput, height: '150px', overflow: 'auto', overflowX: 'hidden', outline: `${messageSelected}`, }} onFocus={() => { setMessageSelected('3px solid var(--primary)'); setEmailSelected('none'); setNameSelected('none');}} placeholder="Message" name="message" />

                <input style={{ ...submitBtn, }} onMouseEnter={() => { setSubmitBtnClicked('3px solid white'); setNameSelected('none'); setEmailSelected('none'); setMessageSelected('none'); setSubmitBtnColor('white'); setSubmitBtnbackgroundColor('var(--danger)'); }} onMouseLeave={() => { setSubmitBtnClicked('3px solid var(--danger)'); setSubmitBtnColor('var(--danger)'); setSubmitBtnbackgroundColor('rgb( 0 0 0 / 0%)');}} type="submit" value="Send" />
            </form>
        </div>
        // </div>
    );
};

export default Contact;