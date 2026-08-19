/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["res.cloudinary.com"]
    },
    async redirects() {
        return [
            // Old top-level routes now live as home-page anchor sections.
            // Exact matches only — /projects/[slug] detail pages still resolve.
            { source: "/projects", destination: "/#featured", permanent: false },
            { source: "/experience", destination: "/#experience", permanent: false },
            { source: "/contact", destination: "/#contact", permanent: false },
        ];
    },
};

export default nextConfig;
