function SocialNetwork(props) {
  // const {social_image} = props
  return <>
    <div className="row">
      <div className="block">
          <i className="hovicon effect-1 sub-a"><b className="icon-camera-retro"></b>
          </i>
      </div>
    </div>
    <link rel="stylesheet" type="text/css" href={props.social_image} />
  </>
}

export { SocialNetwork }