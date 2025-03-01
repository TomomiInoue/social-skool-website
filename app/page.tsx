import { About } from "./components/Home/About/About";
import { HomeBanner } from "./components/Home/HomeBanner/HomeBanner";
import { Landing } from "./components/Home/Landing/Landing";

export default function Home() {
  return (
    <>
      <Landing />
      <HomeBanner />
      <About />
    </>
  );
}
