export const Footer = () => {
    return (
        <footer class="section-footer">
            <div class="footer-container container">
                <div class="content_1">
                    <img src="./logo.png" alt="logo" style={{ borderRadius: "40px", height: "120px" }} />
                    <p>
                        Welcome to Ultimate Moviestore, <br />
                        your ultimate destination for
                        <br />
                        latest Movies!
                    </p>
                    <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
                </div>
                <div class="content_2">
                    <h4>SHOPPING</h4>
                    <a href="#">7 days free trial</a>
                    <a href="#">1 month membership</a>
                    <a href="#">3 months membership</a>
                    <a href="#">1 year membership</a>
                </div>
                <div class="content_3">
                    <h4>Experience</h4>
                    <a href="./contact.html">Contact Us</a>
                    <a href="" target="_blank"> Payment Method </a>
                    <a href="" target="_blank"> Watch Now </a>
                    <a href="" target="_blank"> Watch Later </a>
                </div>
                <div class="content_4">
                    <h4>NEWSLETTER</h4>
                    <p>
                        Be the first to know about new
                        <br />
                        upcoming Movies & Webseries
                    </p>
                    <div class="f-mail">
                        <input type="email" placeholder="Your Email" />
                        <i class="bx bx-envelope"></i>
                    </div>
                    <hr />
                </div>
            </div>
            <div class="f-design">
                <div class="f-design-txt">
                    <p>Design and Code by Rohit Yadav</p>
                </div>
            </div>
        </footer>
    )
};