import { useState } from "react";
import images from "../images";

const EmailCopy = () => {
  const [banner, setBanner] = useState(false);
  const [bannerText, setBannerText] = useState("");

  const copyEvent = () => {
    if (!banner) {
      const text = document.createElement("textarea");
      text.value = "mohamed.h.abouelenin@gmail.com";
      if (window.navigator.clipboard) {
        window.navigator.clipboard.writeText(text.value);
        setBannerText("Email copied to clipboard.");
        setBanner(true);
        setTimeout(() => setBanner(false), 7000);
      } else {
        setBannerText("");
        setBanner(true);
        setTimeout(() => setBanner(false), 7000);
      }
      text.remove();
    } else {
      console.log("Why spam :(");
    }
  }

  return (<>
    <div data-email="mohamed.h.abouelenin@gmail.com" onClick={copyEvent}>
      <img src={images.Email} alt="" />
    </div>
    {banner ? <div className="banner">{bannerText}<a href="mailto:mohamed.h.abouelenin@gmail.com">Open in mail</a></div> : null}
  </>);
}

export default EmailCopy;