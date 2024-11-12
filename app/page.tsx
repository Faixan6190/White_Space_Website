import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/WorkManagement";
import CustomiseItToYourNeed from "./components/CustomiseItToYourNeed";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <CustomiseItToYourNeed />
    </div>
  );
}
