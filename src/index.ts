import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes/api";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api", cors(), router);

// Only listen when running locally (not on Vercel)
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
}

// Export for Vercel serverless functions
export default app;
