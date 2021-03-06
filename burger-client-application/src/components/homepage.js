/*
Homepage for Counter Burger
 */

import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../index.css';
import burger from '../images/burgerImage.png';
import Header from './header';

class Homepage extends Component{

    constructor(props) {
        super(props);
        // let userState = this.props.loginStateProp;
        this.state={
            zipcode: "",
        };
    }

    render(){
        console.log("home page render");
        return (
            <div className="outerdiv">
                <Header showCart={{status:true}}/>
                <div className="content">
                    <div id="left">
                        <h3>1. Find your location</h3>
                        <h3>2. Place your order</h3>
                        <h3>3. Grab the keys</h3>

                        <span style={{fontSize:20}}>Enter your zipcode</span> <br></br>
                        <input className = "home-page-textbox" type="text" id="fname" name="firstname" placeholder="Enter Zipcode e.g. 95134"
                               onChange={(event) => {
                                this.setState({
                                        zipcode: event.target.value
                                });
                            }}/>
                        <input className = "home-page-button" type="submit" value="Go" onClick={() => {
                            this.props.history.push(`/restaurant/zipcode/${this.state.zipcode}`);
                        }}/>

                    </div>

                    <div id="right">
                        <img style={{"width": "400px"}} src={burger}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Homepage);
