import "boxicons";
import image_13 from "../assets/image_13.jpg";
import image_14 from "../assets/image_14.jpg"
import image_15 from "../assets/image_15.jpg";
import Carte2  from "../Composition/carte2";
export default function Tech_sec() {
  const Tech = [
    [
      image_13,
      "A Lesson From the Henrietta Lacks Story: Science Needs Your Cells",
      "Thus_artistry 2024",
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ...",
    ],
    [
        image_14,
        "What Moves Gravel-Size Gypsum Crystals Around the Desert?",
        "Thus_artistry 2024",
        "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ...",
    ],
    [
        image_15,
        "Scientists, Feeling Under Siege, March Against Trump Policies",
        "Thus_artistry 2024",
        "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ...",
    ],
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl py-5 px-2">
        <div className="justify-between px-8 w-full">
          <div className="w-full flex justify-between py-9">
            <div className="font-bold text-3xl ">Technology </div>
            <div>
              <button className="text-purple-600 font-semibold text-lg">
                <span className="flex ">
                  More in technology
                  <i className=" pt-1 bx bx-right-arrow-alt"></i>{" "}
                </span>{" "}
              </button>
            </div>
          </div>
          <div className="  grid grid-cols-3 w-full gap-5">
          {Tech.map((item, i) => (
              <Carte2
                key={i}
                img={item[0]}
                tile={item[1]}
                date={item[2]}
                text={item[3]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
