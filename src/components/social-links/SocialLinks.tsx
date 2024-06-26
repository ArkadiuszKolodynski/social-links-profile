import avatar from "../../assets/images/avatar-jessica.jpeg";
import Button from "../button/Button";
import "./SocialLinks.scss";

function SocialLinks() {
  const socialLinks = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  return (
    <div id="social-links">
      <img src={avatar} alt="avatar" width={88} />
      <div>
        <h1>Jessica Randall</h1>
        <h2>London, United Kingdom</h2>
      </div>
      <q>Front-end developer and avid reader.</q>
      <ul id="social-links-list">
        {socialLinks.map((link) => (
          <li key={link}>
            <Button socialLink={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
