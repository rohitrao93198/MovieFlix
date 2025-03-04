export const About = () => {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
    };

    const headingStyle = {
        fontSize: "7rem",
        color: "#333",
        marginBottom: "10px",
    };

    const paragraphStyle = {
        fontSize: "2rem",
        color: "#555",
        lineHeight: "1.6",
        textAlign: "center",
        maxWidth: "600px",
    };

    const linkStyle = {
        color: "#007BFF",
        textDecoration: "none",
        fontWeight: "bold",
    };

    const footerStyle = {
        marginTop: "20px",
        fontSize: "2rem",
        color: "#888",
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>About Us</h1>
            <p style={paragraphStyle}>
                Welcome to our website! Movie Flix We are passionate about delivering high-quality
                content and exceptional user experiences. Our team is dedicated to
                continuous innovation and improving our services for our valued
                community.
            </p>
            <p style={paragraphStyle}>
                Learn more about our mission and values{" "}
                <a href="/mission" style={linkStyle}>
                    here
                </a>
                .
            </p>
            <footer style={footerStyle}>
                &copy; {new Date().getFullYear()} MovieFlix. All rights reserved.
            </footer>
        </div>
    );
};