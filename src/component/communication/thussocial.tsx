
export default function Thussocial(props) {
  return (
    <>
      <div className="">
                  <img
                    src={props.img}
                    alt=""
                  />
                </div>
                <div>
                  <div className="my-2 text-purple-600">{props.title}</div>
                  <div className="text-2xl font-bold mb-3">{props.head}</div>
                  <div className="text-lg mb-1">
                    {props.text}
                  </div>
                  <div>
                    <span className="mr-2 ">
                      <i className="bx bxs-user"></i>Thus_artistry
                    </span>
                    <span>
                      <i className="bx bxs-calendar"></i> november 26, 2024
                    </span>
                  </div>
                </div>
    </>
  );
}
