import React, { Component } from "react";
import { Grid, Cell, List, ListItemContent, ListItem } from "react-mdl";
import "./style.css";
import { FaPhoneSquare,FaEnvelopeSquare,FaMapMarkerAlt, FaSkype } from "react-icons/fa";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Contact Details</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:"Segoe UI"}}><span><FaPhoneSquare/></span>+00 400 899 799</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:"Segoe UI"}}><FaEnvelopeSquare/>Admin@admin.com</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:"Segoe UI"}}><FaMapMarkerAlt/>Washington, DC, USA</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:"Segoe UI"}}><FaSkype/>Admin@skype.com</ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Contact;
