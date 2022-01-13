

function PriceSlider() {
  return <>
    
    <div className="box">
      <div className="values">
          <div>$<span id="first"></span></div> - <div>$<span id="second"></span></div>
      </div>
      <small>
          Current Range:
          <div>$<span id="third"></span></div>
      </small>

      <div className="slider" data-value-0="#first" data-value-1="#second" data-range="#third"></div>

    </div>


    {/* <a className="dribbble" href="https://dribbble.com/shots/7268454-Rubber-Slider" target="_blank"><img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt="" /></a> */}
  </>
}

export { PriceSlider }