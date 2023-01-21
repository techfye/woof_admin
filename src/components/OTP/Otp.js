import {React, useRef, useState } from 'react'
import './otp.css'
const Otp = () => {
const [otp, setOtp] = useState({
        first: '',
        second: '',
        third: '',
        fourth: '',
        fifth: '',
        sixth: ''
    })

    const first = useRef(null)
    const second = useRef(null)
    const third = useRef(null)
    const fourth = useRef(null)
    const fifth = useRef(null)
    const sixth = useRef(null)
    const handleOtp = (e) => {
        if (e.target.value.length === 1) {
            switch (e.target.name) {
                case 'first':
                    second.current.focus()
                    break;
                case 'second':
                    third.current.focus()
                    break;
                case 'third':
                    fourth.current.focus()
                    break;
                case 'fourth':
                    fifth.current.focus()
                    break;
                case 'fifth':
                    sixth.current.focus()
                    break;
                case 'sixth':
                    sixth.current.blur()
                    break;
                default:
                    break;
            }

        }
        handleBackspace(e);
        setOtp({ ...otp, [e.target.name]: e.target.value })
    }

    const handleBackspace = (e) => {
        if (e.target.value.length === 0) {
            switch (e.target.name) {
                case 'first':
                    first.current.focus()
                    break;
                case 'second':
                    first.current.focus()

                    break;
                case 'third':
                    second.current.focus()
                    break;
                case 'fourth':
                    third.current.focus()
                    break;
                case 'fifth':
                    fourth.current.focus()
                    break;
                case 'sixth':
                    fifth.current.focus()
                    break;
                default:
                    break;
            }
        }

    }
    


    return (
        <>
            <div className="container height-100 d-flex justify-content-center align-items-center">
                <div className="position-relative">
                    <div className="otp_card card p-2 text-center">
                        <h6>Please enter the one time password <br /> to verify your account</h6>
                        <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
                            <input className="m-2 text-center form-control rounded" type="text" ref={first} onChange={handleOtp} name="first" maxLength="1" />
                            <input className="m-2 text-center form-control rounded" type="text" ref={second} onChange={handleOtp} name="second" maxLength="1" />
                            <input className="m-2 text-center form-control rounded" type="text" ref={third} onChange={handleOtp} name="third" maxLength="1" />
                            <input className="m-2 text-center form-control rounded" type="text" ref={fourth} onChange={handleOtp} name="fourth" maxLength="1" />
                            <input className="m-2 text-center form-control rounded" type="text" ref={fifth} onChange={handleOtp} name="fifth" maxLength="1" />
                            <input className="m-2 text-center form-control rounded" type="text" ref={sixth} onChange={handleOtp} name="sixth" maxLength="1" />
                        </div>
                        <div className="mt-4"> <button className="btn btn-primary px-4">Validate</button> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Otp