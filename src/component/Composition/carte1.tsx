export default function Carte1(props) {
  return (
    <>
      <div
        className=" relative flex flex-[3] h-[420px] w-full bg-cover bg-center  items-end"
        style={{ backgroundImage: `url(${props.bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className=" flex flex-col justify-between p-5 text-white relative z-10">
          <div> {props.head}</div>
          <div className="text-2xl font-bold mb-3">{props.title}</div>

          <div className="text-base ">{props.text}</div>
        </div>
      </div>
    </>
  );
}
