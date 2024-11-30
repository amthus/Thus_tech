import "boxicons";
import site_logo from "./assets/site_logo.svg";

export default function Footer() {
  const footInfor = [
    ["Company", "About", "Contact", "Our Stuff", "Advertise"],
    ["Tech News", "Technology", "Gadget", "Software", "Games"],
    [
      "Legal",
      "Privacy Policy",
      "Terms of service",
      "Extra Crunch Term",
      "Code of Product",
    ],
  ];
  return (
    <>
      <div className="w-full border-b border-white ">
        <div className="mx-auto max-w-7xl py-5 px-2">
          <div className="justify-between px-8 w-full py-11">
            <div className="  grid grid-cols-4 w-full pb-3 ">
              <div className="">
                <img
                  src={site_logo}
                  alt=""
                  className="mb-9"
                />
                <div className=" text-purple-600">
                  <i className="text-xl bx bxl-instagram-alt "></i>
                  <i className="text-xl bx bxl-facebook-circle mx-5"></i>
                  <i className="text-xl bx bxl-twitter"></i>
                </div>
              </div>
              {footInfor.map((item, i) => (
                <div>
                  <div
                    className="font-bold text-2xl mb-6"
                    key={i}
                  >
                    {item[0]}
                  </div>
                  <div className="mb-0.5 text-lg">{item[1]}</div>
                  <div className="mb-0.5 text-lg">{item[2]}</div>
                  <div className="mb-0.5 text-lg">{item[3]}</div>
                  <div className="mb-0.5 text-lg">{item[4]}</div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
      <div className="w-full border-b border-white ">
        <div className="mx-auto max-w-7xl py-5 px-2">
          <div className="justify-between px-8 w-full py-5">
            
            <div className="flex items-center justify-center ">
              Copyright © 2024 Tech News
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
