import classNames from "./SocialLinkButton.module.scss";

function SocialLinkButton({ socialLink }: { socialLink: string }) {
  return (
    <a href="#" className={classNames.socialLinkButton}>
      {socialLink}
    </a>
  );
}

export default SocialLinkButton;
