import LeftSideBar from "../components/LeftSidebar.tsx";
import MainComponent from "../components/MainComponent.tsx";
import RightContent from "../components/RightContent.tsx";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center text-white relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSideBar />
        <MainComponent />
        <RightContent />
      </div>
    </div>
  );
};

export default Home;
