import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


export default function Contact(){
  return (
      <div id="contact-me">
          <h1>Contact Me</h1>
          <ul id="contact-list">
          <li>
       <a
          href="https://www.linkedin.com/in/lloyd-ting-82b316182/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/llting592"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
          <a
              href="mailto:llting592@gmail.com"
              target="_blank"
              rel="noreferrer"
              >
                  <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
              </a>
      </li>
          </ul>
      </div>
  )
}

