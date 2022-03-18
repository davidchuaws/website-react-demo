import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

//Re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Team from '../Common/Team';
import AboutTimeline from '../Common/AboutTimeline';

class Home extends Component {
    render() {
        return (
            <div>
                <Header 
                    title="Welcome to Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />

                <Services />
                <Portfolio />
                <AboutTimeline />
                <Team />
            </div>
        )
    }
}

export default Home;