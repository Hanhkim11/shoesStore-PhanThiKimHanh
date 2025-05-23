import React, { useState } from "react";
import Card from "./Card";
import DetailModal from "./DetailModal";
import CartShop from "./CartShop";

const ShoesShop = () => {
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [cart, setCart] = useState([]);

  const data = [
    {
      id: 1,
      name: "Adidas Prophere",
      price: 350,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
      quantity: 995,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
    },
    {
      id: 2,
      name: "Adidas Proph Black-white",
      price: 450,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
      quantity: 990,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
    },
    {
      id: 3,
      name: "Adidas Proph Customize",
      price: 375,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
      quantity: 415,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      price: 465,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
      quantity: 542,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      price: 550,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
      quantity: 674,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      price: 250,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
      quantity: 456,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      price: 450,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
      quantity: 854,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      price: 750,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
      quantity: 524,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      price: 630,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
      quantity: 599,
      description:
        "Nike shoe is the rare high-percentage coach's dream on D. Designed unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive.",
      shortDescription: "Paul George is the rare high-percentage shooter",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      price: 650,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
      quantity: 984,
      description:
        "Nike shoe is the rare high-percentage coach's dream on D. Designed unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive.",
      shortDescription: "Paul George is the rare high-percentage shooter",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      price: 450,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
      quantity: 875,
      description:
        "Nike shoe is the rare high-percentage coach's dream on D. Designed unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive.",
      shortDescription: "Paul George is the rare high-percentage shooter",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      price: 750,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
      quantity: 445,
      description:
        "Nike shoe is the rare high-percentage coach's dream on D. Designed unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive.",
      shortDescription: "Paul George is the rare high-percentage shooter",
    },
  ];

  const filteredData = data
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  const themSPVaoGioHang = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const deletProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    const sp = cart.find((item) => item.id === id);
    if (sp) {
      sp.quantity += quantity;
      if (sp.quantity === 0) {
        if (window.confirm("Bạn có muốn xóa sản phẩm này không?")) {
          deletProduct(id);
        } else {
          sp.quantity = 1;
        }
        return;
      }
    }
    setCart([...cart]);
  };

  return (
    <div className="container-fluid p-4 bg-light min-vh-100">
      <h1 className="text-center text-primary mb-4">Shoes Shop</h1>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Tìm kiếm theo tên..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="form-select w-25"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Giá tăng dần</option>
          <option value="desc">Giá giảm dần</option>
        </select>
      </div>

      <div className="row g-4">
        {filteredData.map((item) => (
          <div className="col-4" key={item.id}>
            <Card
              detail={item}
              onViewDetail={setSelectedShoe}
              themSPVaoGioHang={themSPVaoGioHang}
            />
          </div>
        ))}
      </div>

      {selectedShoe && (
        <DetailModal
          content={selectedShoe}
          onClose={() => setSelectedShoe(null)}
        />
      )}

      <CartShop
        cart={cart}
        delProduct={deletProduct}
        updateQuantity={updateQuantity}
      />
    </div>
  );
};

export default ShoesShop;
