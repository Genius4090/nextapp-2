import Link from "next/link"

const AboutContext = () => {
  return (
    <div>
      <h2>About context</h2>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
    </div>
  )
}

export default AboutContext