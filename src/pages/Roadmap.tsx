import FooterApp from "../components/FooterApp"
import HeaderApp from "../components/HeaderApp"
import Redirecting from "../components/Redirecting"

export default function RoadmapScreen() {
  return (
    <>
      <HeaderApp />
      <Redirecting url="https://github.com/orgs/open-threed/projects/2" />
      <FooterApp />
    </>
  )
}
