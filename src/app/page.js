
// ====================WITHOUT NEXT IMAGE USE=========================

export default function NormalImages() {
  const images = Array.from({ length: 15 }, (_, i) => `/images/img (${i + 1}).avif`);

  return (
    <div>
      <h1>❌ Normal IMG (No Optimization)</h1>

      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          width="300"
          style={{ marginBottom: "10px" }}
        />
      ))}
    </div>
  );
}





// ====================WITH NEXT IMAGE USE=========================


// import Image from "next/image";

// export default function OptimizedImages() {
//   const images = Array.from({ length: 15 }, (_, i) => `/images/img (${i+1}).avif`);

//   return (
//     <div>
//       <h1 className="text-4xl">✅ Next Image (Optimized)</h1>

//       {images.map((src, index) => (
//         <Image
//           key={index}
//           src={src}
//           alt="demo"
//           width={300}
//           height={200}
//           style={{ marginBottom: "10px" }}
//         />
//       ))}
//     </div>
//   );
// }