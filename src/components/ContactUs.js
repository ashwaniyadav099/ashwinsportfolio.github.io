import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h2>Contact US</h2>
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
              <div className="contact-box">
                <ul className="contact-list-wraper">
                  {
                    resumeData.contact.map((item)=>{
                     return <li>
                      <a href={item.url}>
                       <div className="contact-card">
                        <div className="icon-box">
                          <img src={item.logo} alt="" />
                        </div>
                        <h2>{item.type}</h2>
                       <h3>{item.details}</h3>
                       </div>
                       </a>
                    </li>
                    })
                  }
                 
                </ul>
              </div>
          </div>
        </section>
        );
  }
}