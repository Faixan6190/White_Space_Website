import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/WorkManagement";
import UseAsExtension from "./components/UseAsExtension";
import CustomiseItToYourNeed from "./components/CustomiseItToYourNeeds";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <UseAsExtension />
      <CustomiseItToYourNeed />
    </div>
  );
}
