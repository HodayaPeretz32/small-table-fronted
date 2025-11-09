import VendorCard from './VendorCard';

import { useState, useEffect } from 'react';
//זמני עד שיהיה שרת ונוכל לקרוא להשתמש בדטה האמיתי
// נתוני דמה לפיתוח — החליפי בקריאת API כשתהיה
const MOCK_VENDORS = [
  {
    id: 1,
    name: "קייטרינג משה",
    city: "תל אביב",
    eventTypes: ["חתונה", "בר מצווה"],
    image: "https://picsum.photos/400/300?random=1",
    kosher: "כשר למהדרין",
    short: "קייטרינג בשרי איכותי"
  },
  {
    id: 2,
    name: "מטעמי השף",
    city: "ירושלים",
    eventTypes: ["אירועים פרטיים", "ימי הולדת"],
    image: "https://picsum.photos/400/300?random=2",
    kosher: "כשר",
    short: "אוכל ביתי עם טוויסט"
  },
    {
    id: 3,
    name: " גרומנס",
    city: "קרית גת",
    eventTypes: ["בר מצווה", "ארושים"],
    image: "https://picsum.photos/400/300?random=3",
    kosher: "הבדץ ירושלים",
    short: " אוכל ביתי ברמה "
  },
    {
    id: 4,
    name: "טעמי ",
    city: "ירושלים",
    eventTypes: ["אירועים פרטיים", "ימי הולדת"],
    image: "https://picsum.photos/400/300?random=2",
    kosher: "רובין",
    short: "אוכל חבל על הזמן"
  }
];

export function useProviders(query = '') {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchProviders = async () => {
      try {
        setLoading(true);
        setError(null);

        // מדמה קריאת API
        await new Promise((r) => setTimeout(r, 600));

        const q = query.trim().toLowerCase();
        const filtered = MOCK_VENDORS.filter((p) => {
          if (!q) return true;
          return (
            p.name.toLowerCase().includes(q) ||
            p.city.toLowerCase().includes(q) ||
            p.eventTypes.some((et) => et.toLowerCase().includes(q))
          );
        });

        if (!cancelled) setProviders(filtered);
      } catch (e) {
        if (!cancelled) setError('שגיאה בטעינת ספקים');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchProviders();

    return () => {
      cancelled = true;
    };
  }, [query]);

  return { providers, loading, error };
}









import { Box, CircularProgress } from "@mui/material";

export default function VendorList({ vendores, loading, error }) {
  if (error) {
    return (
      <Box sx={{ textAlign: "center", color: "error.main", py: 4 }}>
        {error}
      </Box>
    );
  }

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (!vendores?.length) {
    return (
      <Box sx={{ textAlign: "center", color: "text.secondary", py: 6 }}>
        לא נמצאו ספקים
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2,  width: "calc(100vw - 19%)" }}>
      {vendores.map((vendore) => (
        <VendorCard key={vendore.id} vendore={vendore} />
      ))}
    </Box>
  );
}
