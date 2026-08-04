import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>© {new Date().getFullYear()} Priyanshu Chauhan</span>
        <span className="footer__prompt">$ exit 0</span>
      </div>
    </footer>
  )
}

export default Footer
