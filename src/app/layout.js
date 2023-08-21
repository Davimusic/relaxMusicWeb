"use client";

import "./globals.css";
import { Video } from "../components/video"


/*export const metadata = {
  title: "Tasks App",
};*/

export default function RootLayout({ children }) {

  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Dancing+Script&family=Montserrat+Alternates:ital,wght@0,300;1,100&family=PT+Serif:ital@1&family=Playfair+Display:ital,wght@1,500&family=Rubik+Vinyl&display=swap"
          rel="stylesheet"
        />
        <link 
          rel="icon" 
          href="https://res.cloudinary.com/dplncudbq/image/upload/v1692559936/mias/icon_efg3sf.png" 
          type="image/x-icon">
        </link>
      </head>
      <body>
        
          
          <Video />
          

      </body>
    </html>
  );
}
