export default function Robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
            sitemap: 'https://portfolio-nextjs-pink-three.vercel.app/sitemap.xml',
        }
    }

    //The purpose of the robot file is to hide specific pages from web crawlers.
    //For example, if you have a page that you don't want to be indexed by search engines, 
    // you can enter the page into your robot file and it will prevent it from being seen.
    //This can be useful for a page that is under development or being worked on, or is 
    // temporariliy hidden.
    
    