const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer>
            <p>Endalklemon.abate@gmail.com</p>
            <small>© {currentYear} Lemon</small>
        </footer>
    )
}
export default Footer;