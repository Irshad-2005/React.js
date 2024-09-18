import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black m-2 p-2">
      <h1 className="p-2 m-2 text-xl font-bold">{title}</h1>
      {!isVisible ? (
        <div>
          <button
            onClick={() => setIsVisible(true)}
            className="border border-black rounded-sm m-1 p-1 bg-green-600"
          >
            Show
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => setIsVisible(false)}
            className="border border-black rounded-sm m-1 p-1 bg-red-600"
          >
            Hide
          </button>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};
const Grocery = () => {
  const [isSectionVisible, setIsSectionVisible] = useState("about");
  return (
    <div>
      <h1> This is grocery page</h1>

      <Section
        title={"About Grocery"}
        description={
          "Sed ut perspiciatis und tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"
        }
        isVisible={isSectionVisible === "about"}
        setIsVisible={() => setIsSectionVisible("about")}
      />
      <Section
        title={"Team Grocery"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium do dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"
        }
        isVisible={isSectionVisible === "team"}
        setIsVisible={() => setIsSectionVisible("team")}
      />
      <Section
        title={"Career Grocery"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptaione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim"
        }
        isVisible={isSectionVisible === "career"}
        setIsVisible={() => setIsSectionVisible("career")}
      />
    </div>
  );
};
export default Grocery;
