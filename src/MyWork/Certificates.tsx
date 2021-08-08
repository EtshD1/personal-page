import { MouseEventHandler } from 'react';
import images from '../images';

const Item = ({ title, image, link }: { title: string, image: string, link: string }) => {
  return (<div className="certificate">
    <h3>{title}</h3>
    <div>
      <img src={image} alt="" />
    </div>
    <div className="link">
      View Certificate: <a href={link} target="_blank" rel="noreferrer">{link}</a>
    </div>
  </div>);
}

const Certificates = ({ isOpen, close }: { isOpen: boolean, close: MouseEventHandler<HTMLDivElement> }) => {
  if (isOpen) {
    return (<div id="modal" onClick={close}>
      <div className="certificates">
        <Item title='Advanced Web Development' image={images.Certificates.AdvancedWebDevelopment} link="https://confirm.udacity.com/VHLJSKZE" />

        <Item title='Front End Libraries' image={images.Certificates.FrontendLibraries} link="https://www.freecodecamp.org/certification/etsh/front-end-libraries" />

        <Item title='Version Control with Git' image={images.Certificates.GitSourceControl} link="https://coursera.org/share/469be9d4d2fedc88d69c2f2aba368589" />

        <Item title='Introduction to Cloud Computing' image={images.Certificates.IntroToCloudComputing} link="https://coursera.org/share/b06fc356b8b3ce01ab887b989833c6b1" />

        <Item title='Web Development Professional' image={images.Certificates.ProfessionalWebDevelopment} link="https://confirm.udacity.com/ENSZLSKK" />

        <Item title='Responsive Web Design' image={images.Certificates.ResponsiveWebDesign} link="https://www.freecodecamp.org/certification/etsh/responsive-web-design" />

      </div>
    </div>);
  }
  return null;
}

export default Certificates;