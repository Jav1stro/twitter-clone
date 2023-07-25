import LeftSideBar from "../components/LeftSidebar.jsx";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* Left sidebar for navigation */}
        <LeftSideBar />
        {/* <main>Home</main>
        <section>Right section</section> */}
      </div>
    </div>
  );
};

export default Home;
