import LeftSideBar from "../components/LeftSidebar.jsx";
import MainContent from "../components/MainContent.jsx";
import RightContent from "../components/RightContent.jsx";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSideBar />
        <MainContent />
        <RightContent />
      </div>
    </div>
  );
};

export default Home;
