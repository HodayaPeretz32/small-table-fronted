import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  TextField,
} from "@mui/material";

export default function PackagePopup({ open, onClose, packageData, onSave }) {
  if (!packageData) return null;

  const [tempSelectedItems, setTempSelectedItems] = useState({});
  const [guestCount, setGuestCount] = useState(packageData.min_guests || 1);
  const [totalPrice, setTotalPrice] = useState(packageData.price_per_person || 0);

  useEffect(() => {
    if (open) {
      setTempSelectedItems(packageData.currentSelections || {});
      setGuestCount(packageData.min_guests || 1);
    }
  }, [open, packageData.currentSelections, packageData.min_guests]);

  useEffect(() => {
    let selectionExtra = 0;
    packageData.packageCategories?.forEach((category) => {
      const selected = tempSelectedItems[category.id] || [];
      selected.forEach((itemId) => {
        const item = category.items.find((i) => i.id === itemId);
        if (item?.extra_price_per_person) {
          selectionExtra += item.extra_price_per_person;
        }
      });
    });
    setTotalPrice((packageData.price_per_person + selectionExtra) * guestCount);
  }, [tempSelectedItems, guestCount, packageData]);

  const handleToggle = (categoryId, productId, maxSelect) => {
    setTempSelectedItems((prev) => {
      const prevCategory = prev[categoryId] || [];
      if (prevCategory.includes(productId)) {
        return { ...prev, [categoryId]: prevCategory.filter((id) => id !== productId) };
      } else {
        if (prevCategory.length >= maxSelect) {
          return { ...prev, [categoryId]: [productId] };
        } else {
          return { ...prev, [categoryId]: [...prevCategory, productId] };
        }
      }
    });
  };

  const handleGuestChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val)) setGuestCount(val);
  };

  const handleSave = () => {
    onSave({ currentSelections: tempSelectedItems, guests: guestCount  ,price: totalPrice});
    onClose();
  };

  const handleCancel = () => {
    setTempSelectedItems({});
    onClose();
  };

  const handleClose = (_, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>{packageData.name}</DialogTitle>
      <DialogContent dividers>
        <TextField
       label="מספר סועדים"
        type="number"
        fullWidth
        value={guestCount}
        onChange={handleGuestChange}
        inputProps={{
        min: packageData.min_guests,
       max: packageData.max_guests,
       step: "5"
  }}
  onKeyDown={(e) => {
    if (e.key === "-") e.preventDefault();
  }}
  sx={{ mb: 2 }}
/>
        {packageData.packageCategories?.length > 0 ? (
          packageData.packageCategories.map((category) => (
            <div key={category.id} style={{ marginBottom: "1rem" }}>
              <Typography variant="h6">{category.name}</Typography>
              {category.max_select > 0 && (
         <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
             {category.note || `בחר עד ${category.max_select}`}
            </Typography>
               )}

              <FormGroup>
                {category.items?.map((item) => (
                  <div key={item.id} style={{ marginLeft: "8px", marginBottom: "4px" }}>
                    {category.max_select === 0 ? (
                      <Typography>
                        {item.name}
                        {item.extra_price_per_person ? ` (+₪${item.extra_price_per_person})` : ""}
                      </Typography>
                    ) : (
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={tempSelectedItems[category.id]?.includes(item.id) || false}
                            onChange={() =>
                              handleToggle(category.id, item.id, category.max_select || 1)
                            }
                          />
                        }
                        label={
                          item.name +
                          (item.extra_price_per_person ? ` (+₪${item.extra_price_per_person})` : "")
                        }
                      />
                    )}
                  </div>
                ))}
              </FormGroup>
            </div>
          ))
        ) : (
          <Typography>חבילה זו אינה ניתנת להתאמה אישית</Typography>
        )}
        <Typography variant="h6">סה"כ מחיר: ₪{totalPrice}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>ביטול</Button>
        {/* כפתור שמירה תמיד פעיל */}
        <Button onClick={handleSave} variant="contained">
          שמור
        </Button>
      </DialogActions>
    </Dialog>
  );
}
