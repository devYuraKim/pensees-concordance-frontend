import DividerLine from "../components/DividerLine";
import EditionCard from "../components/EditionCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto">
      <Header />
      <div className="flex flex-col items-center  justify-center w-[40%] mx-auto mt-20">
        <div className="flex flex-col gap-5">
          <DividerLine
            text="edition lookup"
            customTextClass="text-olive-500"
            customBorderClass="border-olive-300"
          />
          <EditionCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
