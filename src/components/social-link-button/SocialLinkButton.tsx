import classNames from "./SocialLinkButton.module.scss";

interface Props {
  socialLink: string;
}

const SocialLinkButton = ({ socialLink }: Props) => {
  return (
    <a href="#" className={classNames.socialLinkButton}>
      {socialLink}
    </a>
  );
};

export default SocialLinkButton;
