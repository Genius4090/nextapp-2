import { Benefit, Closing, Footer, Headline, Hero, Navbar, Process, Story } from "@/modules";

export default function Main() {
  return (
  <div>
   <Navbar/>
<div className="container">
<Hero/>
<Headline/>
<Benefit/>
<Story/>
<Process/>
</div>
<Closing/>
<Footer/>
  </div>
  );
}
