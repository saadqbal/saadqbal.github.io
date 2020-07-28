import React, { useEffect, useState } from 'react'
import { StackOverflowProfile } from 'react-stackoverflow-card'
import { config } from '../../config'
import 'react-stackoverflow-card/dist/index.css'

const { backgroundColor, backgroundColorDark, titleColor, titleColorDark } = config.footer

const Footer = ({ theme }) => {
  const [bg, setBg] = useState(theme.mode === 'light' ? backgroundColor : null)
  const [titleTextColor, setTitleTextColor] = useState(theme.mode === 'light' ? titleColor : null)
  console.log(bg)
  useEffect(() => {
    console.log('TEST', theme.mode, bg)
    setBg(theme.mode === 'light' ? backgroundColor : backgroundColorDark)
    setTitleTextColor(theme.mode === 'light' ? titleColor : titleColorDark)
  }, [theme])

  return (
    <footer className='footer-distributed' style={{ backgroundColor: bg }}>
      <div className='footer-left'>
        <h3 style={{ color: titleTextColor }}>Asad <span>Iqbal</span></h3>
        <p className='footer-links'>
          <a href='/'>Home</a>
          <a href='#'>Blog</a>
          <a href='#'>Pricing</a>
          <a href='#'>About</a>
          <a href='#'>Faq</a>
          <a href='#'>Contact</a>
        </p>
        <p className='footer-company-name'>saadqbal &copy; 2019</p>
      </div>

      <div className='footer-center'>

        <div>
          <i className='fa fa-map-marker' />
          <p><span>Hire Me</span></p>
        </div>

        <div>
          <i className='fa fa-phone' />
          <p>+92 334 8442426</p>
        </div>

        <div>
          <i className='fa fa-envelope' />
          <p><a href='mailto:asad.dsoft@gmail.com'>asad.dsoft@gmail.com</a></p>
        </div>
        <div>
          <div className='footer-icons'>
            <a href='#'><i className='fa fa-facebook' /></a>
            <a href='#'><i className='fa fa-twitter' /></a>
            <a href='#'><i className='fa fa-linkedin' /></a>
            <a href='#'><i className='fa fa-github' /></a>
          </div>
        </div>
      </div>

      <div className='footer-right'>

        <p className='footer-company-about'>
          <span>My Stackoverfow Profile</span>
        </p>
        <StackOverflowProfile id='840186' containerStyle={{ backgroundColor: 'white' }} />
        <p className='footer-company-about footer-links'>
                  What to use this baadge for your own Stackoverfow Profile?
          <span><a style={{ fontSize: 14 }} href='https://www.npmjs.com/package/react-stackoverflow-card'>click here</a></span>
        </p>
      </div>

    </footer>
  )
}

export default Footer
