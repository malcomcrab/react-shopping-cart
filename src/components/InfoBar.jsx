import SocialLinksBar from "./SocialLinksBar"

function InfoBar({ className }){



    return(

        <div id="infobar" className={className}>
            
            <div>
                <h4>
                    Clothing Brand Name
                </h4>
            </div>

            <div className="address-container">
                104 Toby Street<br/>
                Spoketone, Kent<br/>
                England
            </div>

            <div className="contact-container">
                 <p>Email</p>
                 <p>Phone</p>
                 <p>Returns</p>
                 <p>Sign Up</p>
            </div>

            <div className="news-container">
                <p>Subscribe to our newsletter to get updates on new products,<br/> 
                exclusive content, and all things Clothing Brand.</p>
            </div>
            
            <SocialLinksBar />
        </div>
    )
}

export default InfoBar