import { neon } from "@neondatabase/serverless";

export default defineEventHandler(async (event) => {
  const { databaseUrl } = useRuntimeConfig(event);
  const db = neon(databaseUrl);

  // Get the form data from the request body (sent from the Nuxt component)
  const { name, surname, email, department, message } = await useBody(event);

  // Ensure that all required fields are provided
  if (!name || !surname || !email || !department || !message) {
    return { statusCode: 400, body: { message: "All fields are required." } };
  }

  // Insert the form data into the "contacts" table in your Neon database
  try {
    const result = await db(
      `
      INSERT INTO contacts (first_name, last_name, email, department, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `,
      [name, surname, email, department, message]
    );

    // Return the inserted row as a response
    return result[0];
  } catch (error) {
    console.error("Error inserting data into the database:", error);
    return {
      statusCode: 500,
      body: { message: "Something went wrong. Please try again later." },
    };
  }
});
