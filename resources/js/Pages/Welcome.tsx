import React from "react";

const BankLandingPage: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
            {/* Hero Section */}
            <header style={{ backgroundColor: '#2563eb', color: 'white', padding: '5rem 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Welcome to SwiftBank</h1>
                <p style={{ marginTop: '1rem', fontSize: '1.125rem' }}>The Future of Secure and Smart Banking</p>
                <button style={{
                    marginTop: '1.5rem', backgroundColor: 'white', color: '#2563eb', padding: '0.75rem 1.5rem', borderRadius: '0.375rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                    Get Started
                </button>
            </header>

            {/* Features Section */}
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {features.map((feature, index) => (
                    <div key={index} style={{
                        padding: '1.5rem', backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: '0.375rem', textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '2.5rem', color: '#2563eb', marginBottom: '1rem' }}>
                            {feature.icon}
                        </div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginTop: '1rem' }}>{feature.title}</h2>
                        <p style={{ marginTop: '0.5rem', color: '#4b5563' }}>{feature.description}</p>
                    </div>
                ))}
            </section>

            {/* Testimonials */}
            <section style={{ backgroundColor: 'white', padding: '4rem 1.5rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>What Our Customers Say</h2>
                <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>Trusted by thousands worldwide</p>
                <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} style={{
                            padding: '1.5rem', backgroundColor: '#f9fafb', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: '0.375rem'
                        }}>
                            <p style={{ color: '#4b5563', fontStyle: 'italic' }}>"{testimonial.feedback}"</p>
                            <h3 style={{ marginTop: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>- {testimonial.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section style={{ backgroundColor: '#2563eb', color: 'white', textAlign: 'center', padding: '4rem 1.5rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Join SwiftBank Today</h2>
                <p style={{ marginTop: '0.5rem' }}>Experience banking like never before</p>
                <button style={{
                    marginTop: '1.5rem', backgroundColor: 'white', color: '#2563eb', padding: '0.75rem 1.5rem', borderRadius: '0.375rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                    Sign Up Now
                </button>
            </section>
        </div>
    );
};

const features = [
    { icon: '🔒', title: "Secure Banking", description: "Top-tier security for your transactions." },
    { icon: '📱', title: "Mobile Friendly", description: "Access your funds anytime, anywhere." },
    { icon: '👥', title: "24/7 Support", description: "Our team is here for you round the clock." },
    { icon: '💸', title: "Instant Transfers", description: "Send and receive money instantly." }
];

const testimonials = [
    { name: "John Doe", feedback: "SwiftBank makes banking effortless and secure!" },
    { name: "Jane Smith", feedback: "The best online banking experience I've ever had." },
    { name: "Robert Johnson", feedback: "Highly recommend SwiftBank for modern banking needs." }
];

export default BankLandingPage;
