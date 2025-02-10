'use client';

    import React from 'react';

    interface ServiceCardProps {
      icon?: React.ReactNode;
      title: string;
      description: string;
      imageUrl?: string;
    }

    const ServiceCard = ({ icon, title, description, imageUrl }: ServiceCardProps) => {
      return (
        <div className="bg-white rounded-md shadow-md p-6 hover:shadow-xl transition duration-300">
          {icon && <div className="mb-4">{icon}</div>}
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="mb-4 rounded-md"
            />
          )}
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      );
    };

    export default ServiceCard;
