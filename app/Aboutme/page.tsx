import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import '../Page.css'; // Ensure this CSS file is in the correct location
import image from '../fonts/amir.jpeg'; // Adjust the path to your image

export default function Page() {
    return (
        <div className="container">
            <div className="content">
                <div className="image-container">
                    <Image 
                        src={image} // Provide the imported image as the src prop
                        alt="Me!" // Provide an alt text for accessibility
                        width={150} // Set a width for the image
                        height={150} // Set a height for the image
                    />
                </div>
                <div className="text-container">
                    <p>
                        Passionate and results-driven Computer Science Engineering graduate with
                        expertise in software development technologies and computer network engineering.
                        Proficient in programming languages, network architectures, and intelligent systems.
                        Adept at solving complex problems and implementing innovative solutions.
                        Demonstrated ability to thrive in dynamic environments through hands-on experience
                        with projects in web programming, IT project management, and embedded systems.
                        Seeking opportunities to contribute technical skills and knowledge to a forward-thinking organization.
                    </p>
                </div>
            </div>
        </div>
    );
}
