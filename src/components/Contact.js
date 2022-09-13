import React from "react";

const Contact = (props) => {
  setTimeout(() => {
    props.history.push('/about')
  }, 2000);
  return (
    <div className="container">
      <h4 className="center">
        Contact
      </h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illum aut doloremque labore ullam, vero odit! Nostrum, non exercitationem maiores veniam cum minus autem! Fugit recusandae ipsa iure officiis quos!</p>
    </div>
  )
}

export default Contact