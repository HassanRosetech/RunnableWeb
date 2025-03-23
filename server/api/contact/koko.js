import { neon } from "@neondatabase/serverless";

export default defineEventHandler(async (event) => {
  try {
    // Extract form data from the request body using useBody
    const { name, surname, email, department, message } = await readBody(event);
    console.log(name);

    // Validate required fields
    if (!name || !surname || !email || !department || !message) {
      return { statusCode: 400, body: { message: "All fields are required." } };
    }

    // Retrieve the database URL from Nuxt runtime configuration
    const { databaseUrl } = useRuntimeConfig(event);
    const db = neon(databaseUrl);

    // Insert the form data into the database
    const result = await db(
      `
      INSERT INTO contacts (first_name, last_name, email, department, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `,
      [name, surname, email, department, message]
    );

    // Return the inserted row
    return result[0];
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: { message: "An error occurred while processing your request." },
    };
  }
});
