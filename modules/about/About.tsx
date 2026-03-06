import AboutContext from "./AboutContext";


const AboutPage = async () => {
    const data = await fetch("https://api.escuelajs.co/api/v1/products")
    const res = data.json
    console.log(res);
     
  return <AboutContext/>
}

export default AboutPage