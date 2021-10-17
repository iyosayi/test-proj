require("dotenv").config();

interface environment {
    PORT: string | undefined;
    BASE_URL: string | undefined;
    getEnv(): any
}

export const env = {
  PORT: process.env.PORT,
  BASE_URL: process.env.BASE_URL,
  getEnv() {
    if (
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "test"
    ) {
      this.BASE_URL = `http://localhost:${process.env.PORT}/api`;
    } else {
      this.BASE_URL = process.env.BASE_URL;
      this.PORT = process.env.PORT;
    }
    return {
      BASE_URL: this.BASE_URL,
      PORT: this.PORT,
    };
  }
} as environment;