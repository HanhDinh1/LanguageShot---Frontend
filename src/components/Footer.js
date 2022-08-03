function Footer() {
    const year = new Date().getFullYear();
    return (
  //     <footer className="mt-auto">
  // <div className="bottom-container">
  //   <a className="footer-link" href="https://www.linkedin.com/in/hanhdinhe/">LinkedIn</a>
  //   <a className="footer-link" href="https://twitter.com/HanhDinhE">Twitter</a>
  //   <a className="footer-link" href="https://www.hanhdinh.co/">Website</a>
  //   <p className="copyright">Copyright ⓒ {year} by Hanh Dinh</p>
  // </div>
  // </footer>
      <footer>
      <div className="footer">
       {/* <a className="footer-link" href="https://www.linkedin.com/in/hanhdinhe/">LinkedIn</a>
  //   <a className="footer-link" href="https://twitter.com/HanhDinhE">Twitter</a>
  //   <a className="footer-link" href="https://www.hanhdinh.co/">Website</a> */}
        <p> Copyright ⓒ {year} by Hanh Dinh</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  