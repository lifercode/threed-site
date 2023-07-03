import FooterApp from "../components/FooterApp"
import HeaderApp from "../components/HeaderApp"
import Redirecting from "../components/Redirecting"

export default function ContributeScreen() {
  return (
    <>
      <HeaderApp />
      <Redirecting url="https://docs.threed.world/docs/contribute/intro" />
      <FooterApp />
    </>
  )
}
