import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='/videos/rot.mp4' autoPlay loop muted />
            <h1> WELCOME</h1>
            <p>We're happy you're here</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>READY?</Button>
                <Button className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large'>WATCH ME <i className='far fa-play-circle' /></Button>
            </div>

        </div >
    )
}

export default HeroSection
