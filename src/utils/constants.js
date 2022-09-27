import React from "react"
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi"

export const SHIPPING_FEE = 534 //in cents
export const GST_RATE = 5 //in cents
export const PST_RATE = 7 //in cents

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "our mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "our vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "our history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
]

// export const products_url = "https://course-api.com/react-store-products"

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`

export const products_url =
  "https://ciampelletti-ecommerce-store.herokuapp.com/api/v1/products"

export const single_product_url = `https://ciampelletti-ecommerce-store.herokuapp.com/api/v1/products/`
