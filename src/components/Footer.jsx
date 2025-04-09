import "../styles/_footer.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} Birrul Walidain. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
