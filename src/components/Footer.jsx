import "../styles/_footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Birrul Walidain. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
