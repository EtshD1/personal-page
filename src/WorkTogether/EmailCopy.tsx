import images from "../images";

const EmailCopy = () => {
  const copyEvent = () => {
    const text = document.createElement("textarea");
    text.value = "mohamed.h.abouelenin@gmail.com";
    if (window.navigator.clipboard) {
      window.navigator.clipboard.writeText(text.value);
      alert("Email copied to clipboard");
    } else {

    }
  }

  return (<div data-email="mohamed.h.abouelenin@gmail.com" onClick={copyEvent}>
    <img src={images.Email} alt="" />
  </div>);
}

export default EmailCopy;