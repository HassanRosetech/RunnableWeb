import { neon } from "@neondatabase/serverless";

export default defineCachedEventHandler(async (event) => {
    const { databaseUrl } = useRuntimeConfig(event);
    const db = neon(databaseUrl);
   // Use RETURNING to fetch the inserted row
   const result = await db(`
   SELECT * FROM contacts ORDER BY id DESC
    
  `);

  // Assuming result is an array, return the first (and only) inserted row
  return result;
}, {
  maxAge: 1 * 1 * 1,
})
