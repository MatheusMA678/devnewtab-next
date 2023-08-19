/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com"
    ]
  },

  env: {
    GOOGLE_APP_CLIENT_ID: "1010694974188-hmqr6foeph7efji7q4retspdhjnhems7.apps.googleusercontent.com",
    GOOGLE_APP_CLIENT_SECRET: "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",
    NEXTAUTH_SECRET: "02UeBnV4FOuPjxh+iKSumnVKjObAMi2rnrPuYv9pzwk=",
    NEXTAUTH_URL: "http://localhost:3000"
  }
}

module.exports = nextConfig
