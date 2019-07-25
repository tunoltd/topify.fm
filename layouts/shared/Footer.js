const footerStyle = {
  backgroundColor: '#ddd',
};

const footerContentStyle = {
  maxWidth: 1140,
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <p>&copy; 2019 Tuno Ltd</p>
      </div>
    </footer>
  );
}

export default Footer;
