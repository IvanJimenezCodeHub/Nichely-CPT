import React from 'react';
import './css/about.css';
import lilyImage from './images/lilyPic.jpg';
import ivanImage from './images/ivanPic.jpeg';
import matinImage from './images/matinPic.jpeg';
import ensarImage from './images/ensarPic.jpeg';

function AboutUsPage(props) {
  return (
    <div className="container">
        <div className="heading">
          <h2>About Team Ruby</h2>
        </div>
        <div className="container-team">
          <div class="row justify-content-lg-center">
            <div class="col-lg-3">
              <img src={lilyImage} className="headshot" alt="A headshot of Lily Deng, an Asian college student with glasses"/>
            </div>
            <div class="col-lg-5">
            <h4 className="left red">Lily Deng</h4>
                <p className="left">
                <a href="https://lilysashad.github.io/" target="_blank" className="left">https://lilysashad.github.io/</a><br></br>
                  Currently a senior at CUNY Queens 
                  College pursuing her Computer Science 
                  degree. Her interests include video editing, 
                  dancing, and watching movies.</p>
            </div>
          </div>
          <div class="row justify-content-lg-center">
            <div class="col-lg-5">
            <h4 className="right green">Ivan Jimenez</h4>
                <p className="right">Currently a Computer Science 
                major pursuing his Bachelors Degree at Queens 
                College. Ultimately his goal is to become a 
                Software Engineer, and on his free time he loves 
                to play video games and draw.</p>
            </div>
            <div class="col-lg-3">
              <img src={ivanImage} className="headshot" alt="A headshot of Ivan Jimenez, a Hispanic college student wearing a white hoodie with a yellow shirt underneath"/>
            </div>
          </div>
        </div>
        <div class="row justify-content-lg-center">
            <div class="col-lg-3">
              <img src={matinImage} className="headshot" alt="A headshot of Matin Nazamy, an Afghan college student with curly hair"/>
            </div>
            <div class="col-lg-5">
            <h4 className="left red">Matin Nazamy</h4>
                <p className="left">
                <a href="http://nazamy.com" target="_blank" className="left">nazamy.com</a><br></br>
                An aspiring software engineer that is 
                studying Computer Science at Queens 
                College. Outside of professional work, 
                my interests are in game theory, machine 
                learning, blockchain tech, and soccer 
                (football).</p>
            </div>
          </div>

          <div class="row justify-content-lg-center">
            <div class="col-lg-5">
            <h4 className="right green">Ensar Dogrusoz</h4>
                <p className="right">An aspiring software engineer 
                that is studying Computer Science at Queens College. 
                In his free time he likes to play soccer, workout, 
                and read.</p>
            </div>
            <div class="col-lg-3">
              <img src={ensarImage} className="headshot" alt="A headshot of Ensar Dogrusoz, a Turkish college student wearing a soccer jersey"/>
            </div>
          </div>

    </div>

  );
}

export default AboutUsPage;