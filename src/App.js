import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.mobileMenuIcon = React.createRef();
    this.navOptionsRowCont = React.createRef();
  }

  componentDidMount(){
    this.triggerMobileMenu();
    this.triggerNavRowOptions();
  }

  triggerMobileMenu = () => {
    let {current} = this.mobileMenuIcon;
    if(window.innerWidth >= 992){
      current.classList.add("hideMobileIconCont");
      current.classList.remove("showMobileIconCont");
    }else{
      current.classList.add("showMobileIconCont");
      current.classList.remove("hideMobileIconCont")
    }
  }
  triggerNavRowOptions = () => {
    let {current} = this.navOptionsRowCont;
    if(window.innerWidth <= 992){
      current.classList.add("hideNavOptionsCont");
      current.classList.remove("showNavOptionsCont");
    }else{
      current.classList.add("showNavOptionsCont");
      current.classList.remove("hideNavOptionsCont")
    }
  }

  render(){
    return (
      <div className="App">
        <section className="mainNavCont">
          <h2 onClick={()=>{this.triggerMobileMenu()}} className="logoTitle">Start Bootstrap</h2>
          <div className="navOptionsCont" ref={this.navOptionsRowCont}>
            <div className="navLinkOption">SERVICES</div>
            <div className="navLinkOption">PORTFOLIO</div>
            <div className="navLinkOption">ABOUT</div>
            <div className="navLinkOption">TEAM</div>
            <div className="navLinkOption">CONTACT</div>
          </div>
          <div className="showMobileIconCont" ref={this.mobileMenuIcon}>
            <i className="fas fa-bars"/>
          </div>
          <div className="hideMobileIconCont" ref={this.mobileMenuIcon}>
            <i className="fas fa-bars"/>
          </div>
          
        </section>
        <header className="mainHeroSection">
          <h3 className="heroIntroText">Welcome to Our Studio!</h3>
          <h3 className="heroMainText">IT'S NICE TO MEET YOU</h3>
          <button className="heroButton">TELL ME MORE</button>
        </header>
      </div>
    );
  };

}

export default App;
