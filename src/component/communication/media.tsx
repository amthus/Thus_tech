export default function Media(props) {
  return (
    <>
      <div className="flex pb-5">
        <i className={props.icons} ></i>
        <div className=" ml-2">
          <div className="text-xl font-bold">{props.title}</div>
          <div>{props.followers}</div>
        </div>
      </div>
    </>
  );
}
