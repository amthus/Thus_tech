export default function Carte2(props) {
    return (
      <>
        <div className={props.style}>
              <img
                src={props.img}
                alt=""
              />
              <div className="text-xl   font-bold py-3">
                {props.tile}
              </div>
              <div className=" pb-2">{props.date}</div>
              <div className="text-base">
                {props.text}
              </div>
            </div>
      </>
    );
  }
  