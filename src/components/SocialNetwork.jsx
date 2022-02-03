function SocialNetwork(props) {
  const { social_image } = props;

  return (
    <>
      <div className="row">
        <div className="block">
          <i className="hovicon effect-1 sub-a" alt="">
            <img src={social_image}></img>
          </i>
        </div>
      </div>
      <link rel="stylesheet" type="text/css" href="#" />
    </>
  );
}

export { SocialNetwork };
