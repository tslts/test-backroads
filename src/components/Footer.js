import { pageLinks, socialLinks } from "../data";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
      {pageLinks.map((link)=>{
            return (
              <li key={link.id}>
            <a href={link.href} className="footer-link">
              {link.text}
            </a>
          </li>
            )
          })}
        
      </ul>
      <ul className="footer-icons">
      {socialLinks.map((social)=>{
            return (
              <li key={social.id}>
            <a
              href={social.href}
              target="_blank" 
              rel="noreferrer"
              className="nav-icon"
            >
              <i className={social.icon}></i>
            </a>
          </li>
            )
          })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
