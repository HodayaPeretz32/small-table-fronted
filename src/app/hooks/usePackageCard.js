import { useState } from "react";

export function usePackageCard(pkg, selectedPackages, setSelectedPackages) {
  const [openPopup, setOpenPopup] = useState(false);

  const handleChange = () => {
    if (selectedPackages.includes(pkg.id)) {
      setSelectedPackages(selectedPackages.filter((id) => id !== pkg.id));
    } else {
      setSelectedPackages([...selectedPackages, pkg.id]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleChange();
    }
  };

  const isCustomizable = pkg.packageCategories && pkg.packageCategories.length > 0;

  return {
    openPopup,
    setOpenPopup,
    handleChange,
    handleKeyDown,
    isCustomizable,
  };
}