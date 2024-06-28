import "./Button.scss";

function Button({ socialLink }: { socialLink: string }) {
  return (
    <a href="#" className="button">
      {socialLink}
    </a>
  );
}

export default Button;
