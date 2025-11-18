export const vendorsPackages = [
  {
    vendorId: 1,
    vendorName: "קייטרינג משה",
    packages: [
      {
        id: 101,
        name: "חבילת אירועים קטנה",
        description: "שלוש סלטים ,  1 מנה עיקרית, קינוח | 50 למנה",
        price: 1800,
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
      { id: 102, name: "חבילת אירועים בינונית", description: " סלטים, 3 תוספות, 2 עיקריות, קינוח | 100 למנה", price: 3500, image: "https://picsum.photos/seed/2/400/300" },
      { id: 103, name: "חבילת אירועים גדולה", description: " סלטים, 5 תוספות, 4 עיקריות, קינוחים מיוחדים | 200 למנה", price: 6000, image: "https://picsum.photos/seed/3/400/300" },
    ],
  },
];



import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function usePackageDetails() {
  const { vendorId } = useParams();
  const navigate = useNavigate();
  const [selectedPackages, setSelectedPackages] = useState([]);

  const vendor = vendorsPackages.find((v) => v.vendorId === Number(vendorId));

  return {
    vendor,
    selectedPackages,
    setSelectedPackages,
    navigate,
  };
}