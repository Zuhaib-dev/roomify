import {
  Box,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand & Project Section */}
        <div className="footer-section">
          <div className="footer-brand">
            <Box className="footer-logo" />
            <span className="footer-brand-name">Roomify</span>
          </div>
          <p className="footer-description">
            AI-powered architectural visualization tool that transforms 2D floor
            plans into photorealistic 3D renders using state-of-the-art AI
            models.
          </p>
          <div className="footer-tech">
            <span className="tech-badge">React</span>
            <span className="tech-badge">TypeScript</span>
            <span className="tech-badge">Puter</span>
            <span className="tech-badge">AI</span>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#upload">Get Started</a>
            </li>
            <li>
              <a href="https://www.zuhaibrashid.com/#projects" target="_blank">Projects</a>
            </li>
            <li>
              <a
                href="https://puter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Puter <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/zuhaib-dev/Roomify"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code <ExternalLink size={12} />
              </a>
            </li>
          </ul>
        </div>

        {/* Developer & Social Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Developer</h3>
          <p className="footer-dev-name">Zuhaib Rashid</p>
          <p className="footer-bio">
            Full-stack developer passionate about AI, web technologies, and
            creating innovative solutions that push the boundaries of what's
            possible.
          </p>
          <div className="footer-social">
            <a
              href="https://github.com/zuhaib-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/zuhaib-rashid-661345318/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/xuhaib_x9"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="mailto:zuhaibrashid01@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} Roomify. Built with ❤️ by Zuhaib Rashid
        </p>
      </div>
    </footer>
  );
};

export default Footer;
