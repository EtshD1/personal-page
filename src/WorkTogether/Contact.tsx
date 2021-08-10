const Contact = ({ image, url }: { image: string, url: string }) => (<a href={url} target="_blank" rel="noreferrer">
  <div>
    <img src={image} alt="" />
  </div>
</a>);

export default Contact;