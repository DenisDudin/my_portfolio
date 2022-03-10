function SocialNetwork(props) {
  const { social_image, social_link } = props;

  return (
    <>
      <div className="row">
        <div className="block">
          <a href={social_link} className="hovicon effect-1 sub-a" alt="social network" target="_blank">
            <img src={social_image}></img>
          </a>
        </div>
      </div>
      <link rel="stylesheet" type="text/css" href="#" />
    </>
  );
}

export { SocialNetwork };
