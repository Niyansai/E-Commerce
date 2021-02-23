import React, { Component, useState} from 'react'
import "./ScrollUpButton.css";
import Arrow from "./Images/upArrow.png";

class ScrollUpButton extends Component {
   
   constructor (props) {
super(props)
this.state={
    is_visible: false
}
   }

   componentDidMount () {

const scrollComponent = this;
document.addEventListener("scroll", function(e) {
    scrollComponent.toggleVisibility();
})
   }
   
   toggleVisibility() {
    if (window.pageYOffset > 2000) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
   
  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top">
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <img className="arrow_size" src={Arrow} width="40" height="80" alt=" "/>
          </div>
        )}
      </div>
    );
  }
}
export default ScrollUpButton;
