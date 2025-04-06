import "../styles/_footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
