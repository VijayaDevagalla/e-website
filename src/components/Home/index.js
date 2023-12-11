

import{Link} from "react-router-dom"
import banner from '../banner.png'
//import Products from "../Products"
 function Home (){
	return (
		<>
    <h1 className="text-center m-2 text-8xl font-bold"> VK Website</h1>

    <div className="flex flex-col items-center justify-center space-y-8">
  <img src={banner} alt="banner" className="w-1/2 h-auto mb-8" />

  <div className="text-center p-3">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Hurry! Last Chance</h1>
    <p className="text-3xl md:text-5xl mb-4">Sales Ends Today</p>
    <p className="text-2xl md:text-4xl mb-4">Buy Before It's Over</p>
    <Link to="/products" className="text-xl md:text-3xl font-semibold text-blue-500 hover:underline mt-4">
      Shop Now
    </Link>

  </div>

</div>

  
</>

	)
}
export default Home