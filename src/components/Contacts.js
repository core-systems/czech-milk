import React from 'react'
import Link from 'gatsby-link'

const Contacts = (props) => (
  <section className="section section-contact-us" role="contacts-us">
    <div className="container ">
      <div className="columns">
        <div className="column is-5 is-offset-1">

          <div className="field is-grouped">
            <div className="control has-icons-left has-icons-right is-expanded">
              <input className="input" type="name" placeholder="Full name..." />
              <span className="icon is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>

            <div className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="E-mail..." />
              <span className="icon is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field has-addons">
            <div className="control is-expanded">
              <textarea className="textarea" placeholder="Zpráva..."></textarea>
            </div>
          </div>

        </div>
        <div className="column is-3 has-dotted-right-border has-dotted-bottom-border-mobile">
          <div className="content has-text-centered">
            <p>
              xxx
            </p>
          </div>
        </div>
        <div className="column is-3">
          <div className="content has-text-centered">
            <p>
              xxx
            </p>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  </section>
)

export default Contacts
