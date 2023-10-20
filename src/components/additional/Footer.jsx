function Footer() {
  const footerList1 = ["Home", "Shop", "Sale"];
  const footerList2 = ["About", "Contact us", "Shipping"];

  const footerList1Mapped = footerList1.map((item, index) => {
    return (
      <li key={`footerList1 ${index}`} style={{ padding: "1rem" }}>
        {item}
      </li>
    );
  });

  const footerList2Mapped = footerList2.map((item, index) => {
    return (
      <li key={`footerList2 ${index}`} style={{ padding: "1rem" }}>
        {item}
      </li>
    );
  });

  return (
    <div
      className="footer-container"
      style={{
        backgroundColor: "var(--footer-background)",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <h2
        className="footer-title"
        style={{
          color: "var(--page-light)",
          fontSize: "3rem",
          marginLeft: "5rem",
          marginBottom: "0",
        }}
      >
        <strong>FRESH</strong>
      </h2>
      <div className="footer-options" style={{ display: "flex" }}>
        <ul
          className="footer-list-1"
          style={{
            color: "var(--footer-text)",
            listStyleType: "none",
            fontSize: "2rem",
            fontWeight: "500",
          }}
        >
          {footerList1Mapped}
        </ul>

        <ul
          className="footer-list-2"
          style={{
            color: "var(--footer-text)",
            listStyleType: "none",
            fontSize: "2rem",
            fontWeight: "500",
          }}
        >
          {footerList2Mapped}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
