## Frontend Development Exercise by Eli Castellano

Hello friends of Monogram, I am going to talk a little about the process and my experience developing the exercise you sent me. First of all, I want to thank you for the opportunity you have given me. It has been a very pleasant experience.

## Process
Ok, let's start. First of all, I decided to create a simple folder structure and not use methodologies like Atomic Design because, being a relatively smaller project, I wanted to have more flexibility so as not to waste time in the process.

src 
    * components 
              - common (Here I write the reusable components)
                              
              - section (Here will be the sections of the page)
                              
               - wrapper (I created a wrapper folder to handle the components that can wrap the sections and that are a fundamental part of the page                                              structure)
                              
    * data (I usually create a data folder to place information such as texts, image paths, and arrays that will be used in the components)
    * pages
    * styles
          

## Responsive

* For the responsive design, I decided to use CSS classes to manage the styles of some elements that end up being too many, in order to improve the code readability with Tailwind.
* And I divided the responsibility of the responsive design between TailwindCSS & CSS classes
  * Tailwind
    - Margin, Padding, Position, Alignment (Flex), Width, Height
  * Clases CSS
    - Font-size, font-weight, line-height, letter-spacing, Animations, Gradient

## ThreeJS

This was an incredible experience to be able to learn a little about this library, which I fell in love with because it allows us to make our website visually more attractive. Of course, it doesn't mean it was easy for me to create something with this library hahaha.
I wanted to take more advantage of the ThreeJS ecosystem, that is, tools like react-three-fiber and react-three/drei, but in the end, I only used ThreeJS due to time constraints.

## Performance

* I used the <Image /> component to improve website performance.
* When working with images, I usually
  1. Download them from Figma
  2. Compress them
  3. Upload them to Cloudinary
  4. Configure next.config.json for external images
     Example:
        const nextConfig = {
            reactStrictMode: true, 
            images: {
            domains: ['res.cloudinary.com'],
          },
        }
  5. Bring them to my project from Cloudinary
* I have attached photos from [PageSpeedInsights](https://pagespeed.web.dev/)

Mobile

![Mobile](https://res.cloudinary.com/datsipxkz/image/upload/v1680462748/monogram-exercise/tu6j4eeyydt5os71oryc.png)

Desktop

![Desktop](https://res.cloudinary.com/datsipxkz/image/upload/v1680462748/monogram-exercise/nnv1v6q0ubml24arpkyg.png)
