import { HeroSlider } from "./HeroSlider"
import heroLogo from '../public/assets/img/hero/bg.png'

export const Hero = () => {
  return (
    <section className="h-[80vh] lg:h-[912px] bg-[url('../public/assets/img/hero/bg.png')] bg-cover bg-center bg-no-repeat" id="home">
        <div className="container mx-auto h-full">
          <HeroSlider />
        </div>
    </section>
  )
}
