import React, { useEffect } from 'react';
import WOW from 'wow.js';  

interface TestimonialProps {
  name: string;
  role: string;
  imageSrc: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, imageSrc, testimonial }) => {
  return (
    <div className="col wow fadeInUp hover-up" data-wow-delay="0.4s">
      <div className="card mb-0 rounded-4">
        <div className="card-body">
          <div className="d-flex flex-column flex-lg-row align-items-center gap-3">
            <div>
              <img src={imageSrc} width={50} height={50} className="rounded-circle" alt={`${name}'s avatar`}/>
            </div>
            <div className="testimonial-title">
              <h5 className="mb-1">{name}</h5>
              <p className="mb-0">{role}</p>
            </div>
          </div>
          <div className="testimonial-info">
            <div className="mt-4">
              <p className="mb-0">{testimonial}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Claire Bell',
      role: 'Designer',
      imageSrc: 'assets/images/avatars/02.png',
      testimonial: `Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year.`,
    },
    {
      name: 'Ralph Fisher',
      role: 'Designer',
      imageSrc: 'assets/images/avatars/06.png',
      testimonial: `Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year.`,
    },
    {
      name: 'Claire Bell',
      role: 'Designer',
      imageSrc: 'assets/images/avatars/08.png',
      testimonial: `Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year.`,
    },
    {
      name: 'Ralph Fisher',
      role: 'Designer',
      imageSrc: 'assets/images/avatars/09.png',
      testimonial: `Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year.`,
    },
  ];

  useEffect(() => {
    const wow = new WOW({
      live: false,
    });
    wow.init();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-xl-2 g-4">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          name={testimonial.name}
          role={testimonial.role}
          imageSrc={testimonial.imageSrc}
          testimonial={testimonial.testimonial}
        />
      ))}
    </div>
  );
};

export default Testimonials;
