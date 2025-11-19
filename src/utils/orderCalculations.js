// חישוב סך כל המחירים
export function calculateSubtotal(cartItems) {
    return cartItems.reduce((sum, item) => {
      return sum + item.price * item.qty;
    }, 0);
  }
  
  // משלוח — קבוע כרגע
  export function calculateDeliveryFee() {
    return 20;
  }
  
  // טיפ
  export function calculateTip(tip) {
    return Number(tip) || 0;
  }
  
  // חישוב סה"כ כולל
  export function calculateTotal(cartItems, tip) {
    return (
      calculateSubtotal(cartItems) +
      calculateDeliveryFee() +
      calculateTip(tip)
    );
  }
  