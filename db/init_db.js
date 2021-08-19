const { client } = require("./client")

async function buildTables() {
    try {
      // drop tables in correct order
      console.log("Starting to drop tables...");
      client.query(`
          DROP TABLE IF EXISTS cocktails;
          
        `);
      console.log("Finished dropping tables!");
  
      // build tables in correct order
      console.log("Starting to build tables...");
  
      await client.query(`
            CREATE TABLE cocktails(
                id SERIAL PRIMARY KEY,
                name varchar(50) UNIQUE,
                description VARCHAR(255),
                price INTEGER,
                category text,
            )
        `);
  
      console.log("Finished building tables!");
    } catch (error) {
      throw error;
    }
  }