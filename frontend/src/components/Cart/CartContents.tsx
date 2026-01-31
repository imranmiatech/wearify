import { RiDeleteBin3Line } from "react-icons/ri";


const CartContents = () => {


    interface Product {
        productId: number;
        name: string;
        size: string;
        color: string;
        quantity: number;
        price: number;
        image: string;
    }

    const Cartproducts: Product[] = [
        {
            productId: 1,
            name: "T-Shirt",
            size: "M",
            color: "Black",
            quantity: 2,
            price: 19.99,
            image: "https://picsum.photos/200?random=1"
        },
        {
            productId: 2,
            name: "Jeans",
            size: "L",
            color: "Blue",
            quantity: 1,
            price: 25,
            image: "https://picsum.photos/200?random=2"
        },
        {
            productId: 3,
            name: "Hoodie",
            size: "XL",
            color: "Gray",
            quantity: 1,
            price: 45.5,
            image: "https://picsum.photos/200?random=3"
        },
        {
            productId: 4,
            name: "Sneakers",
            size: "10",
            color: "White",
            quantity: 1,
            price: 89.99,
            image: "https://picsum.photos/200?random=4"
        },
        {
            productId: 5,
            name: "Jacket",
            size: "M",
            color: "Green",
            quantity: 1,
            price: 120,
            image: "https://picsum.photos/200?random=5"
        }
    ];
    return (
        <div className="px-2 ">
            {
                Cartproducts.map((product, index) => (
                    <div key={index} className="flex items-start justify-between py-4 border-b ">
                        <div className="w-full flex justify-between items-start ">
                            <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4 rounded" />
                            <div>
                                <h3>{product.name}</h3>
                                <p className="text-sm text-gray-500">size: {product.size} | color: {product.color}</p>
                                <div className="flex items-center mt-2">
                                    <button className="border rounded px-2 py-1 text-xl font-medium">-</button>
                                    <span className="mx-4">{product.quantity}</span>
                                    <button className="border rounded px-2 py-1 text-xl font-medium">+</button>
                                </div>
                            </div>
                            <div>
                                <p>${product.price.toLocaleString()}</p>
                                <button>
                                    <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
                                </button>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CartContents