export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(number / 100)
}

//  const categories = getUniqueValues(all_products, "category")
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])

  if (type === "colors") {
    unique = unique.flat()
  }

  return ["all", ...new Set(unique)]
}
