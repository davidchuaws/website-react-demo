import React, {Component} from "react";
import Header from "../Common/Header";
import image from '../assets/img/about.jpg'
import AboutTimeline from "../Common/AboutTimeline";

class About extends Component {
    render() {
        return (
            <div>
                <Header 
                    title="About Us"
                    subtitle="It's really a great story"
                    showButton={false}
                    image={image}
                />
                <AboutTimeline />
            </div>
        )
    }
}

export default About;