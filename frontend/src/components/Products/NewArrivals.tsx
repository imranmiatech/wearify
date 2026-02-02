// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// interface ProductImage {
//     _id: string;
//     url: string;
//     altText: string;
// }

// interface Product {
//     _id: string;
//     name: string;
//     price: number;
//     images: ProductImage[];
// }
// const NewArrivals = () => {


//     const scrollRef = useRef<HTMLDivElement | null>(null);

//     const [isDragging, setIsDragging] = useState<boolean>(false);
//     const [startX, setStartX] = useState<number>(0);
//     const [scrollLeft, setScrollLeft] = useState<number>(0);
//     const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false)
//     const [canScrollRight, setCanScrollRight] = useState<boolean>(true);



//     const newArrivals: Product[] = [
//         {
//             _id: "1",
//             name: "Stylish Jacket",
//             price: 120,
//             images: [
//                 {
//                     url: "https://picsum.photos/500/500?random=1",
//                     altText: "Stylish Jacket",
//                     _id: "img1",
//                 },
//             ],
//         },
//         {
//             _id: "2",
//             name: "Casual T-Shirt",
//             price: 35,
//             images: [
//                 {
//                     url: "https://picsum.photos/500/500?random=2",
//                     altText: "Casual T-Shirt",
//                     _id: "img2",
//                 },
//             ],
//         },
//         {
//             _id: "3",
//             name: "Denim Jeans",
//             price: 80,
//             images: [
//                 {
//                     url: "https://picsum.photos/500/500?random=3",
//                     altText: "Denim Jeans",
//                     _id: "img3",
//                 },
//             ],
//         },
//         {
//             _id: "4",
//             name: "Running Sneakers",
//             price: 150,
//             images: [
//                 {
//                     url: "https://picsum.photos/500/500?random=4",
//                     altText: "Running Sneakers",
//                     _id: "img4",
//                 },
//             ],
//         },
//         {
//             _id: "5",
//             name: "Leather Wallet",
//             price: 45,
//             images: [
//                 {
//                     url: "https://picsum.photos/500/500?random=5",
//                     altText: "Leather Wallet",
//                     _id: "img5",
//                 },
//             ],
//         },
//         {
//             _id: "6",
//             name: "Smart Watch",
//             price: 220,
//             images: [
//                 {
//                     url: "https://picsum.photos/500/500?random=6",
//                     altText: "Smart Watch",
//                     _id: "img6",
//                 },
//             ],
//         },
//         {
//             _id: "7",
//             name: "Sunglasses",
//             price: 60,
//             images: [
//                 {
//                     url: "https://picsum.photos/500/500?random=7",
//                     altText: "Sunglasses",
//                     _id: "img7",
//                 },
//             ],
//         },
//         {
//             _id: "8",
//             name: "Backpack",
//             price: 90,
//             images: [
//                 {
//                     url: "https://picsum.photos/500/500?random=8",
//                     altText: "Backpack",
//                     _id: "img8",
//                 },
//             ],
//         },
//         {
//             _id: "9",
//             name: "Formal Shoes",
//             price: 140,
//             images: [
//                 {
//                     url: "https://picsum.photos/500/500?random=9",
//                     altText: "Formal Shoes",
//                     _id: "img9",
//                 },
//             ],
//         },
//         {
//             _id: "10",
//             name: "Winter Hoodie",
//             price: 110,
//             images: [
//                 {
//                     url: "https://picsum.photos/500/500?random=10",
//                     altText: "Winter Hoodie",
//                     _id: "img10",
//                 },
//             ],
//         },
//     ];

//     const scroll = (direction) => {
//         const scrollAmount = direction === "left" ? -300 : 300;
//         scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" })

//         const updateScrollButtons = () => {
//             const container = scrollRef.current;
//             if (container) {
//                 const leftScroll = container.scrollLeft
//                 const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth
//             }
//             console.log({
//                 scrollLeft: container.scrollLeft,
//                 clientWidth: container.clientWidth,
//                 containerScrollWidth: container.scrollWidth,
//             });
//         }
//         useEffect(() => {
//             const container = scrollRef.current;
//             if (container) {
//                 container.addEventListener("scroll", updateScrollButtons);
//                 updateScrollButtons();
//             }
//         })

//         return (
//             <section>
//                 <div className="container mx-auto text-center mb-14 relative">
//                     <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
//                     <p className="text-lg text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae placeat quos perspiciatis.</p>
//                     {/* scroll button */}
//                     <div className="absolute right-0 -bottom-12 flex justify-end space-x-2">
//                         <button onClick={() => scroll("left")} className="p-2 rounded border bg-white text-black"><FiChevronLeft className="text-2xl" /> </button>
//                         <button className="p-2 rounded border bg-white text-black"><FiChevronRight className="text-2xl" /> </button>
//                     </div>
//                 </div>
//                 {/* scrollable Content */}
//                 <div ref={scrollRef} className="container mx-auto overflow-x-auto flex space-x-6 relative">

//                     {newArrivals.map((product: any) => (
//                         <div key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
//                             <img src={product.images[0]?.url} alt={product.images[0]?.altText || product.name} className="w-full h-[500px] object-cover rounded-lg" />
//                             <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
//                                 <Link to={`/product/${product._id}`} className="block">
//                                     <h4 className="font-medium">{product.name}</h4>
//                                     <p className="mt-1">{product.price}</p>
//                                 </Link>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </section>
//         )
//     }

//     export default NewArrivals

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import type { PanInfo } from "framer-motion";

interface ProductImage {
    _id: string;
    url: string;
    altText: string;
}

interface Product {
    _id: string;
    name: string;
    price: number;
    images: ProductImage[];
}

const NewArrivals = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const x = useMotionValue(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [cardWidth, setCardWidth] = useState(0);

    const newArrivals: Product[] = [
        {
            _id: "1",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Stylish Jacket",
                    _id: "img1",
                },
            ],
        },
        {
            _id: "2",
            name: "Casual T-Shirt",
            price: 35,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "Casual T-Shirt",
                    _id: "img2",
                },
            ],
        },
        {
            _id: "3",
            name: "Denim Jeans",
            price: 80,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    altText: "Denim Jeans",
                    _id: "img3",
                },
            ],
        },
        {
            _id: "4",
            name: "Running Sneakers",
            price: 150,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    altText: "Running Sneakers",
                    _id: "img4",
                },
            ],
        },
        {
            _id: "5",
            name: "Leather Wallet",
            price: 45,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=5",
                    altText: "Leather Wallet",
                    _id: "img5",
                },
            ],
        },
        {
            _id: "6",
            name: "Smart Watch",
            price: 220,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=6",
                    altText: "Smart Watch",
                    _id: "img6",
                },
            ],
        },
        {
            _id: "7",
            name: "Sunglasses",
            price: 60,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=7",
                    altText: "Sunglasses",
                    _id: "img7",
                },
            ],
        },
        {
            _id: "8",
            name: "Backpack",
            price: 90,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=8",
                    altText: "Backpack",
                    _id: "img8",
                },
            ],
        },
        {
            _id: "9",
            name: "Formal Shoes",
            price: 140,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=9",
                    altText: "Formal Shoes",
                    _id: "img9",
                },
            ],
        },
        {
            _id: "10",
            name: "Winter Hoodie",
            price: 110,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=10",
                    altText: "Winter Hoodie",
                    _id: "img10",
                },
            ],
        },
    ];

    // Calculate card width
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const container = containerRef.current;
                const card = container.querySelector('.slider-card');
                if (card) {
                    const rect = card.getBoundingClientRect();
                    setCardWidth(rect.width + 24); // 24px for gap (space-x-6)
                }
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // Update scroll buttons
    const updateScrollButtons = () => {
        if (newArrivals.length === 0) return;
        
        setCanScrollLeft(currentIndex > 0);
        setCanScrollRight(currentIndex < newArrivals.length - 1);
    };

    useEffect(() => {
        updateScrollButtons();
    }, [currentIndex]);

    // Smooth scroll to a specific index
    const scrollToIndex = (index: number) => {
        if (index < 0 || index >= newArrivals.length || cardWidth === 0) return;
        
        const targetX = -index * cardWidth;
        
        animate(x, targetX, {
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.5
        });
        
        setCurrentIndex(index);
    };

    // Scroll left
    const scrollLeft = () => {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1);
        }
    };

    // Scroll right
    const scrollRight = () => {
        if (currentIndex < newArrivals.length - 1) {
            scrollToIndex(currentIndex + 1);
        }
    };

    // Handle drag end for smooth snapping
    const handleDragEnd = (event: any, info: PanInfo) => {
        setIsDragging(false);
        
        const velocity = info.velocity.x;
        const offset = info.offset.x;
        
        // If drag was fast enough, change slide based on direction
        if (Math.abs(velocity) > 300) {
            if (velocity > 0) {
                scrollLeft();
            } else {
                scrollRight();
            }
        } 
        // If drag was significant but not fast, snap based on distance
        else if (Math.abs(offset) > cardWidth * 0.3) {
            if (offset > 0) {
                scrollLeft();
            } else {
                scrollRight();
            }
        } 
        // Otherwise, snap back to current position
        else {
            scrollToIndex(currentIndex);
        }
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto text-center mb-14 relative">
                <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae placeat quos perspiciatis.
                </p>
                
                {/* scroll buttons */}
                <div className="absolute right-0 -bottom-12 flex justify-end space-x-2">
                    <button
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                        className={`p-2 rounded border bg-white text-black transition-all ${
                            !canScrollLeft ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 hover:shadow-md"
                        }`}
                    >
                        <FiChevronLeft className="text-2xl" />
                    </button>
                    <button
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                        className={`p-2 rounded border bg-white text-black transition-all ${
                            !canScrollRight ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 hover:shadow-md"
                        }`}
                    >
                        <FiChevronRight className="text-2xl" />
                    </button>
                </div>
            </div>

            {/* Scrollable content without 3D */}
            <div 
                ref={containerRef}
                className="container mx-auto overflow-hidden relative"
            >
                <motion.div
                    ref={scrollRef}
                    className="flex space-x-6 relative"
                    style={{ 
                        x,
                        cursor: isDragging ? 'grabbing' : 'grab'
                    }}
                    drag="x"
                    dragConstraints={{
                        left: cardWidth > 0 ? -((newArrivals.length - 1) * cardWidth) : 0,
                        right: 0
                    }}
                    dragElastic={0.1}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={handleDragEnd}
                    onPointerDown={() => setIsDragging(true)}
                    onPointerUp={() => setIsDragging(false)}
                >
                    {newArrivals.map((product: Product, index) => (
                        <div
                            key={product._id}
                            className={`slider-card min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative group cursor-pointer transition-transform duration-300`}
                        >
                            <div className="relative h-[500px] overflow-hidden rounded-lg shadow-lg">
                                <img 
                                    src={product.images[0]?.url} 
                                    alt={product.images[0]?.altText || product.name} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                                    <Link to={`/product/${product._id}`} className="block">
                                        <h4 className="font-bold text-xl mb-2">{product.name}</h4>
                                        <p className="text-lg font-semibold">${product.price}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default NewArrivals;