function About ({ image, about }) {
  return (
      <Aside>
      <img src={image} alt="blog logo" ></img>
        <p>{about}</p>
      </Aside>
  );
}
export default About;
