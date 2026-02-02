import { Link } from "react-router-dom"
import MancollectionImage from "../../assets/mens-collection.webp";
import WomansCollectionImage from "../../assets/womens-collection.webp"
const GenderCollection = () => {
  return (
    <div className="py-16 px-4 lg:px-0">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Woman */}
        <div className="relative flex-1">
            <img src={WomansCollectionImage} alt="Woman's collection" className="w-full h-[700px] object-cover" />
            <div className="absolute bottom-8 left-8 bg-white/90 p-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Woman's Collection
                </h2>
                <Link to="/collcetions/all?gender=Woman" className="text-gray-900 underline">Shop Now</Link>
            </div>
        </div>
        {/* Men */}
         <div className="relative flex-1">
            <img src={MancollectionImage} alt="Man's collection" className="w-full h-[700px] object-cover" />
            <div className="absolute bottom-8 left-8 bg-white/90 p-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Man's Collection
                </h2>
                <Link to="/collcetions/all?gender=Man" className="text-gray-900 underline">Shop Now</Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default GenderCollection