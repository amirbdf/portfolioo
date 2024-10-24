import React from 'react';
import certImage1 from './cert1.jpg';  // Certificate 1 image (Google Technical Support)
import certImage2 from './cert2.jpg';  // Certificate 2 image (Design Thinking for Beginners)
import awardImage1 from './award1.jpg'; // Award Image 1 (Scholarship)
import awardImage2 from './award2.jpg'; // Award Image 2 (Scholarship)

import Image from 'next/image';

// Sample certificates and awards data
const certificatesAndAwards = [
    {
        id: 1,
        title: "Technical Support Fundamentals (Google)",
        description: (
            <>
                Completed the &quot;Technical Support Fundamentals&quot; course from Google, covering core concepts in IT support, networking, and troubleshooting.
            </>
        ),
        image: certImage1, // First certificate image
       
    },
    {
        id: 2,
        title: "Design Thinking for Beginners",
        description: (
            <>
                Completed the &quot;Design Thinking for Beginners&quot; course, gaining foundational knowledge in innovative problem-solving and design thinking principles.
            </>
        ),
        image: certImage2, // Second certificate image
        
    },
    {
        id: 3,
        title: "Bachelor Scholarship (Stipendium Hungaricum)",
        description: (
            <>
                Awarded the prestigious Stipendium Hungaricum Scholarship for academic excellence and outstanding contributions during high school studies.
            </>
        ),
        images: [awardImage1, awardImage2], // Array of award images
        
    },
];

const CertificatesAndAwards = () => {
    return (
        <div>
            <h2 className='title'>Certificates & Awards</h2>
            <div className="certificates-container">
                <div className="certificates-grid">
                    {certificatesAndAwards.map(item => (
                        <div key={item.id} className="certificate-card">
                            {/* If multiple images (for award), map over them */}
                            {Array.isArray(item.images) ? (
                                item.images.map((img, idx) => (
                                    <Image 
                                        key={idx} 
                                        src={img} 
                                        alt={`${item.title} Image ${idx + 1}`} 
                                    />
                                ))
                            ) : (
                                // Check if the image is defined before rendering
                                item.image ? (
                                    <Image 
                                        src={item.image} 
                                        alt={item.title} 
                                    />
                                ) : null // Render nothing if image is undefined
                            )}
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CertificatesAndAwards;
