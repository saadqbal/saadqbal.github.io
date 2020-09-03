import React, { useEffect, useState } from 'react'
import { StackOverflowProfile } from 'react-stackoverflow-card'
import 'react-stackoverflow-card/dist/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { config } from '../../config'

const { backgroundColor, backgroundColorDark, titleColor, titleColorDark, stackOverflowId, contact, copyright } = config.footer
const { phone, email, facebook, twitter, linkedin, github } = contact

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
        <h3 style={{ color: titleTextColor }}>{config.title}</h3>
        <h5>{config.subtitle}</h5>
        <p className='footer-company-about'>{config.aboutMe}</p>

        <p className='footer-links'>
          <a href='/'>Home</a>
          <a href='#'>Blog</a>
          <a href='#'>Pricing</a>
          <a href='#'>About</a>
          <a href='#'>Faq</a>
          <a href='#'>Contact</a>
        </p>

      </div>

      <div className='footer-center'>
        <div>
          <p><FontAwesomeIcon icon={faAddressCard} /> {contact.title}</p>
        </div>

        {phone ? <div>
          <p><FontAwesomeIcon icon={faPhoneAlt} /> <a href={`tel:${phone}`}>{phone}</a></p>
        </div> : null }
        {email ? <div>
          <p><FontAwesomeIcon icon={faEnvelope} /> <a href={`mailto:${email}`}>{email}</a></p>
        </div> : null }
        <div>
          <div className='footer-icons'>
            { facebook ? <a target='_blank' href={`https://facebook.com/${facebook}`}><FontAwesomeIcon icon={faFacebookF} /></a> : null }
            { twitter ? <a target='_blank' href={`https://twitter.com/${twitter}`}><FontAwesomeIcon icon={faTwitter} /></a> : null }
            { linkedin ? <a target='_blank' href={`https://www.linkedin.com/in/${linkedin}`}><FontAwesomeIcon icon={faLinkedinIn} /></a> : null }
            { github ? <a target='_blank' href={`http://github.com/${github}`}><FontAwesomeIcon icon={faGithubAlt} /></a> : null }
          </div>
        </div>
      </div>

      <div className='footer-right'>
        <p className='footer-company-about'>
          <span>My Stackoverfow Profile</span>
        </p>
        <StackOverflowProfile id={stackOverflowId} containerStyle={{ backgroundColor: 'white' }} />
        <p className='footer-company-about footer-links'>
                  Want to use this badge for your own Stackoverfow Profile?
          <span><a style={{ fontSize: 14 }} href='https://www.npmjs.com/package/react-stackoverflow-card'>click here</a></span>
        </p>
      </div>
      <div style={{ borderTop: '1px solid #ccc', padding: '8px' }}>
        <p className='footer-company-name'>{copyright}</p>
      </div>
    </footer>

  )
}

export default Footer
