import { About } from "./components/Route/Home/About/About";
import { HomeBanner } from "./components/Route/Home/HomeBanner/HomeBanner";
import { Landing } from "./components/Route/Home/Landing/Landing";

export default function Home() {
  return (
    <>
      <Landing />
      <HomeBanner />
      <About />
    </>
  );
}
