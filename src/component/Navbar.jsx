import { Link } from "react-scroll";

function Navbar() {
  const navContent = ["Home", "About", "Skills", "Projects", "Contact"];

  const renderLinks = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        .scrollIntoView({ behavior: "smooth" });
    };

    return (
      <button
        onClick={handleClickNav}
        className=" text-white font-mono text-sm"
      >
        {content}
      </button>
    );
  };
  return (
    <div className="fixed">
      <div className=" flex justify-between items-center bg-black py-3 px-10 w-screen">
        <h3 className="text-white font-mono text-lg">welcome!</h3>
        <ul className="flex px-10 space-x-8">
          {navContent.map((content) => renderLinks(content))}
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
