import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/propuesta-template/", "/propuestas/"],
            },
        ],
        sitemap: "https://www.nexobite.com/sitemap.xml",
    };
}
