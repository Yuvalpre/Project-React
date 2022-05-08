const Footer = () => {
  return (
    <p className="border-top pt-3 text-center">
      <span>
        <i className="bi bi-geo-fill"></i>My App!<i className="bi bi-geo-fill"></i>
      </span>
      <span className="mx-1">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </p>
  );
};

export default Footer;
