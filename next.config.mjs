/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: "/Contact/",
            destination: "/Contact",
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
