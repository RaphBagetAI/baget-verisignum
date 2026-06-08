import { betterAuth } from "better-auth";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Remove static BETTER_AUTH_URL env variables if they exist
if (process.env.BETTER_AUTH_URL) {
  delete process.env.BETTER_AUTH_URL;
}
if (process.env.NEXT_PUBLIC_BETTER_AUTH_URL) {
  delete process.env.NEXT_PUBLIC_BETTER_AUTH_URL;
}

const isCloud = process.env.BL_CLOUD === "true";
const protocol = (process.env.NODE_ENV === "development" && !isCloud) ? "http" : "https";

export const auth = betterAuth({
  database: pool,
  emailAndPassword: { enabled: true },
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: {
    allowedHosts: [
      "localhost:4321",
      "localhost:3000",
      "*.preview.bl.run",
      "*.bl.run",
      "*.beamlit.net",
      "*.aws.beamlit.net",
      "*.prod.aws.beamlit.net",
      "*.us-west-2.prod.aws.beamlit.net",
      "*.us-east-1.prod.aws.beamlit.net",
    ],
    protocol: protocol,
  },
  trustedOrigins: [
    "https://*.preview.bl.run",
    "https://*.bl.run",
    "https://*.beamlit.net",
    "https://*.aws.beamlit.net",
    "https://*.prod.aws.beamlit.net",
    "https://*.us-west-2.prod.aws.beamlit.net",
    "https://*.us-east-1.prod.aws.beamlit.net",
    "http://*.preview.bl.run",
    "http://*.bl.run",
    "http://*.beamlit.net",
    "http://*.aws.beamlit.net",
    "http://*.prod.aws.beamlit.net",
    "http://*.us-west-2.prod.aws.beamlit.net",
    "http://*.us-east-1.prod.aws.beamlit.net",
    "http://localhost:4321",
    "http://localhost:3000",
  ],
});
