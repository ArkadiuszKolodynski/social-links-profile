import avatar from "../../assets/images/avatar-jessica.jpeg";
import SocialLinkButton from "../social-link-button/SocialLinkButton";
import classNames from "./SocialLinks.module.scss";

const SocialLinks = () => {
  const socialLinks = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  return (
    <div className={classNames.socialLinks}>
      <img src={avatar} alt="avatar" className={classNames.avatarImage} />
      <div className={classNames.headlines}>
        <h1 className={classNames.headline1}>Jessica Randall</h1>
        <h2 className={classNames.headline2}>London, United Kingdom</h2>
      </div>
      <q className={classNames.quote}>Front-end developer and avid reader.</q>
      <ul className={classNames.socialLinksList}>
        {socialLinks.map((link) => (
          <li key={link}>
            <SocialLinkButton socialLink={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
