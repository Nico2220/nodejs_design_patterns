// non flowing mode(paused mode)
// process.stdin
//   .on("readable", () => {
//     let chunk;
//     console.log("NEW DATA AVAILABLE");
//     while ((chunk = process.stdin.read()) !== null) {
//       console.log(`Chunk read (${chunk.length} bytes) : ${chunk.toString()} `);
//     }
//   })
//   .on("end", () => console.log("End of  Stream"));

process.stdin
  .on("data", (chunk) => {
    console.log("NEW DATA AVAILABLE");
    console.log(`Chunk read (${chunk.length} bytes) : ${chunk.toString()} `);
  })
  .on("end", () => console.log("End of  Stream"));
