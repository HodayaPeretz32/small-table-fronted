// export const MOCK_VENDORS = [
//   {
//     id: 1,
//     business_name: "קייטרינג משה",
//     address: "תל אביב",
//     image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
//     kashrut_level: "כשר למהדרין",
//     description: "קייטרינג בשרי איכותי"
//   },
//   {
//     id: 2,
//     business_name: "מטעמי השף",
//     address: "ירושלים",
//     image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop",
//     kashrut_level: "כשר",
//     description: "אוכל ביתי עם טוויסט"
//   },
//   {
//     id: 3,
//     business_name: "גרומנס",
//     address: "קרית גת",
//     image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
//     kashrut_level: "הבדץ ירושלים",
//     description: "אוכל ביתי ברמה"
//   },
//   {
//     id: 4,
//     business_name: "טעמי",
//     address: "ירושלים",
//     image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
//     kashrut_level: "רובין",
//     description: "אוכל חבל על הזמן"
//   }
// ];


// // import { useState, useEffect } from 'react';
// // import { useProviders } from "./useProviders";

// // export function useVendor(vendors, loading, error) {
// //   return {
// //     vendors,
// //     loading,
// //     error,
// //   };
// // }
// // export function useProviders(query = '') {
// //   const [providers, setProviders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     let cancelled = false;

// //     const fetchProviders = async () => {
// //       try {
// //         setLoading(true);
// //         setError(null);

// //         // מדמה קריאת API
// //         await new Promise((r) => setTimeout(r, 600));

// //         const q = query.trim().toLowerCase();
// //         const filtered = MOCK_VENDORS.filter((p) => {
// //           if (!q) return true;
// //           return (
// //             p.business_name.toLowerCase().includes(q) ||
// //             p.address.toLowerCase().includes(q) 
// //           )
// //         });

// //         if (!cancelled) setProviders(filtered);
// //       } catch (e) {
// //         if (!cancelled) setError('שגיאה בטעינת ספקים');
// //       } finally {
// //         if (!cancelled) setLoading(false);
// //       }
// //     };

// //     fetchProviders();

// //     return () => {
// //       cancelled = true;
// //     };
// //   }, [query]);

// //   return { providers, loading, error };
// // }



// import { useState, useEffect } from 'react';
// import { MOCK_VENDORS } from '../data/mockVendors';

// export function useProviders(query = '') {
//   const [providers, setProviders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let cancelled = false;

//     const fetchProviders = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         await new Promise((r) => setTimeout(r, 600));

//         const q = query.trim().toLowerCase();
//         const filtered = MOCK_VENDORS.filter((p) => {
//           if (!q) return true;
//           return (
//             p.business_name.toLowerCase().includes(q) ||
//             p.address.toLowerCase().includes(q) 
//           )
//         });

//         if (!cancelled) setProviders(filtered);
//       } catch (e) {
//         if (!cancelled) setError('שגיאה בטעינת ספקים');
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     };

//     fetchProviders();

//     return () => {
//       cancelled = true;
//     };
//   }, [query]);

//   return { providers, loading, error };
// }