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
} from "@mui/material";

export default function PackagePopup({ open, onClose, packageData, onSave }) {
  const [tempSelectedItems, setTempSelectedItems] = useState({});

  useEffect(() => {
    if (open) {
      // טוען את הבחירות הנוכחיות כשנפתח
      setTempSelectedItems(packageData.currentSelections || {});
    }
  }, [open, packageData.currentSelections]);

  const handleToggle = (categoryId, productId, maxSelect) => {
    setTempSelectedItems((prev) => {
      const prevCategory = prev[categoryId] || [];

      if (prevCategory.includes(productId)) {
        return {
          ...prev,
          [categoryId]: prevCategory.filter((id) => id !== productId),
        };
      } else {
        if (prevCategory.length >= maxSelect) {
          return {
            ...prev,
            [categoryId]: [productId],
          };
        } else {
          return {
            ...prev,
            [categoryId]: [...prevCategory, productId],
          };
        }
      }
    });
  };

  // שומר את הבחירות
  const handleSave = () => {
    onSave(tempSelectedItems);
    onClose(); // סוגר את הפופאפ
  };

  // בלחיצה על ביטול - מאפס
  const handleCancel = () => {
    setTempSelectedItems({});
    onClose(); // סוגר אחרי איפוס
  };

  // בלחיצה מחוץ לפופאפ - רק סוגר, לא מאפס
  const handleClose = (_, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") {
      onClose(); // סוגר בלי לאפס
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Customize {packageData.name}</DialogTitle>
      <DialogContent dividers>
        {packageData.packageCategories.map((category) => (
          <div key={category.id} style={{ marginBottom: "1rem" }}>
            <Typography variant="h6">{category.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {category.note || `בחר עד ${category.max_select || 1}`}
            </Typography>
            <FormGroup>
              {category.items.map((item) => (
                <FormControlLabel
                  key={item.id}
                  control={
                    <Checkbox
                      checked={
                        tempSelectedItems[category.id]?.includes(item.id) || false
                      }
                      onChange={() =>
                        handleToggle(category.id, item.id, category.max_select || 1)
                      }
                    />
                  }
                  label={
                    item.name +
                    (item.extra_price_per_person
                      ? ` (+₪${item.extra_price_per_person})`
                      : "")
                  }
                />
              ))}
            </FormGroup>
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
