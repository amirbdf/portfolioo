import React from 'react';
import '../Projects.css'; // Ensure the CSS file is in the correct location
import image1 from '../fonts/image.png';    // Adjust path to the images correctly
import image2 from '../fonts/image2.png';   // Adjust path to the images correctly
import image3 from '../fonts/image3.png';   // Adjust path to the images correctly
import Image from 'next/image';
// Sample project data
const projects = [
    {
        id: 1,
        title: "Weather Web App",
        description: (
            <>
                In the ever-changing realm of technology, I embarked on a journey to create a dynamic and user-friendly Weather Forecast Web App, 
                a personal project developed with the powerful React Framework. This application offers real-time weather information, providing users 
                with a seamless and informative experience to plan their day effectively.
            </>
        ),
        image: image1, // Use the imported image here
        link: "https://weather-rho-nine.vercel.app/",
        date: "[ 09/10/2022 – 09/12/2022 ]"
    },
    {
        id: 2,
        title: "Kalbi Website",
        description: (
            <>
                Developed a dog adoption platform using Svelte, Firebase, and Firestore, enabling users to browse, search, 
                and post dog adoption listings. Key features include secure user authentication, dynamic dog listings with 
                details such as breed and age, a search and filter functionality by breed and price, individual dog detail pages, 
                and image upload capability. The platform also features form validation, responsive design, and real-time data management. 
                Technologies used include Svelte, TypeScript, Firebase Authentication, Firestore, and Firebase Storage.
            </>
        ),
        image: image2, // Use the imported image here
        link: "https://myapp-fawn-five.vercel.app/",
        date: "[ 15/05/2024 – 10/06/2024 ]"
    },
    {
        id: 3,
        title: "Taste Of Tunisia",
        description: (
            <>
                Key Features: Authentic Tunisian recipes brought to life. User-friendly search for quick recipe access. Designed with Next.js and styled with Tailwind CSS. 
                Deployed seamlessly on Vercel for a smooth experience.
            </>
        ),
        image: image3, // Use the imported image here
        link: "https://tasteoftunisia.vercel.app",
        date: "[ 01/07/2024 – 30/08/2024 ]"
    },
];

const Projects = () => {
    return (
        <div>
            
            <div className="projects-container">
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <Image src={project.image} alt={project.title} />
                            </a>
                            <h3>{project.title}</h3>
                            <p>{project.date}</p>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
