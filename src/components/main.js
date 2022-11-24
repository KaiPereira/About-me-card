import React from "react"

export default function Main() {
    return (
    <div className="information">
          <h1 className="name">Kai Pereira</h1>
          <p className="career">Frontend Developer</p>
          <p className="websiteUrl">KaiPereira.website</p>
          <a href="#" className="emailButton"><p className="buttonText"><i class="fas fa-envelope"></i>Email</p></a>
          <div className="aboutText informationText">
            <h2 className="textHeader">About</h2>
            <p className="textParagraph">I am a frontend developer with a particular interest in making everything dynamic and responsive. I am obsessed with UI/UX design and making every single one of my projects beautiful</p>
          </div>
          <div className="interestsText informationText">
            <h3 className="textHeader">Interests</h3>
            <p className="textParagraph">Web3 Developer, App Development, Entrepeneurship, Reader, Tech Guy, Science, Rocketry, Engineering, Designing, EXPLOSIONS</p>
        </div>
    </div>
    )
}