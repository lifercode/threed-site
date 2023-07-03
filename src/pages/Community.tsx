import FooterApp from "../components/FooterApp"
import HeaderApp from "../components/HeaderApp"
import Redirecting from "../components/Redirecting"

export default function CommunityScreen() {

  return (
    <>
      <HeaderApp />
      <Redirecting url="https://discord.gg/hxbwuDckeg" />
      <FooterApp />
    </>
  )
}
