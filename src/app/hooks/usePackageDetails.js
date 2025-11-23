export const vendorsPackages = [
  {
    vendorId: 1,
    vendorName: "קייטרינג משה",
    packages: [
      {
        id: 101,
        name: "חבילת אירועים קטנה",
        description: "שלוש סלטים ,  1 מנה עיקרית, קינוח | 50 למנה",
        price_per_person:50,
        min_guests:10,
        max_guests:100,
        image: "https://picsum.photos/seed/1/400/300",
        packageCategories: [
          {
            id: 1,
            name: "סלטים",
            min_select: 1,
            max_select: 3,
            items: [
              { id: 1, name: "סלט טחינה" },
              { id: 2, name: "סלט חסה" },
              { id: 3, name: "סלט כרוב" },
               { id: 4, name: "סלט טונה" },
              { id: 5, name: "סלט חומוס" },
              { id: 6, name: "סלט זיתים" },

            ],
          },
          {
            id: 2,
            name: "מנות עיקריות",
            min_select: 1,
            max_select: 1,
            items: [
              { id: 4, name: "עוף צלוי" },
              { id: 5, name: "פילה דג" },
            ],
          },
          {
            id: 3,
            name: "קינוחים",
            min_select: 1,
            max_select: 1,
            items: [
              { id: 6, name: "עוגת שוקולד" },
              { id: 7, name: "מוס פירות יער" },
            ],
          },
        ],
      },
      { id: 102, name: "חבילת אירועים בינונית", description: " סלטים, 3 תוספות, 2 עיקריות, קינוח | 100 למנה",   price_per_person:100,
        min_guests:100,
        max_guests:200, image: "https://picsum.photos/seed/2/400/300" , packageCategories: [
          {
            id: 1,
            name: "סלטים",
            min_select: 0,
            max_select: 0,
            items: [
              { id: 1, name: "סלט חציל" },
              { id: 2, name: "סלט חסה" },
              { id: 3, name: "סלט עגבניות" },
            ],
          },
          {
            id: 2,
            name: "מנות עיקריות",
            min_select: 0,
            max_select: 0,
            items: [
              { id: 4, name: "אסאדו " },
              { id: 5, name: "דג סלומון " },
            ],
          },
          {
            id: 3,
            name: "קינוחים",
            min_select: 0,
            max_select: 0,
            items: [
              { id: 6, name: "שייק" },
            ],
          },
        ]},
      { id: 103, name: "חבילת אירועים גדולה", description: " סלטים, 5 תוספות, 4 עיקריות, קינוחים מיוחדים | 200 למנה",  price_per_person:50,
        min_guests:50,
        max_guests:150, image: "https://picsum.photos/seed/3/400/300" ,  packageCategories: [
          {
            id: 1,
            name: "סלטים",
            min_select: 0,
            max_select: 0,
            items: [
              { id: 1, name: "סלט טחינה" },
              { id: 2, name: "סלט חסה" },
              { id: 3, name: "סלט כרוב" },
               { id: 4, name: "סלט טונה" },
              { id: 5, name: "סלט חומוס" },
            ],
          },
          {
            id: 2,
            name: "מנות עיקריות",
            min_select: 0,
            max_select: 0,
            items: [
              { id: 4, name: "עוף צלוי" },
              { id: 5, name: "פילה דג" },
              { id: 6, name: "רול פילו " },
              { id: 7, name: "אסאדו " }

            ],
          },
          {
            id: 3,
            name: "קינוחים",
            min_select: 0,
            max_select: 0,
            items: [
              { id: 6, name: "עוגת שוקולד" },
              { id: 7, name: "מוס פירות יער" },
            ],
          },
        ],},
    ],
  },
];



// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// export function usePackageDetails() {
//   const { vendorId } = useParams();
//   const navigate = useNavigate();
//   const [selectedPackages, setSelectedPackages] = useState([]);

//   const vendor = vendorsPackages.find((v) => v.vendorId === Number(vendorId));

//   return {
//     vendor,
//     selectedPackages,
//     setSelectedPackages,
//     navigate,
//   };
// }



import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function usePackageDetails() {
  const { vendorId } = useParams();
  const navigate = useNavigate();
  const [selectedPackages, setSelectedPackages] = useState({});
  const [quantityByItem, setQuantityByItem] = useState({}); // בשביל כמות מנות

  const vendor = vendorsPackages.find((v) => v.vendorId === Number(vendorId));

  // Toggle בחירה של פריט בקטגוריה
  const toggleItem = (packageId, categoryId, productId, maxSelect) => {
    const maxAllowed = maxSelect ?? Infinity;

    setSelectedPackages((prev) => {
      const prevCategory = prev[categoryId] || [];
      if (prevCategory.includes(productId)) {
        // אם כבר נבחר – מסיר אותו
        return {
          ...prev,
          [categoryId]: prevCategory.filter((id) => id !== productId),
        };
      } else {
        // אם לא עברנו את המקסימום – מוסיף את הפריט
        if (prevCategory.length >= maxAllowed) return prev;
        return {
          ...prev,
          [categoryId]: [...prevCategory, productId],
        };
      }
    });

    // אם אין ערך כמות – מאתחל ל-1
    setQuantityByItem((prevQty) => ({
      ...prevQty,
      [productId]: prevQty[productId] || 1,
    }));
  };

  // שינוי כמות מנות
  const changeQuantity = (productId, qty) => {
    if (qty < 1) return; // לא מאפשר פחות מ-1
    setQuantityByItem((prev) => ({
      ...prev,
      [productId]: qty,
    }));
  };

  // בדיקה אם פריט נבחר
  const isSelected = (categoryId, productId) => {
    return selectedPackages[categoryId]?.includes(productId) || false;
  };

  return {
    vendor,
    selectedPackages,
    setSelectedPackages,
    quantityByItem,
    toggleItem,
    changeQuantity,
    isSelected,
    navigate,
  };
}
