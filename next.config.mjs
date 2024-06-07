/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me",
                port: "",
                pathname: "/api/portraits/**",
            },
            {
                protocol: "https",
                hostname: "www.thecocktaildb.com",
                port: "",
                pathname: "/images/media/drink/**",
            }
        ],
    },
};

export default nextConfig;
