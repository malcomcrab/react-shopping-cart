import SocialLinksBar from "./SocialLinksBar"

function InfoBar({ className }){



    return(

        <div id={"infobar"} className={className}>
            
            <div className="address-container">
                
            </div>

            <div className="contact-container">
                
            </div>

            <div className="help-container">
                
            </div>
            
            <SocialLinksBar />
        </div>
    )
}

export default InfoBar