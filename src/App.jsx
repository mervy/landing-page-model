import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Profiles from './components/Profiles';
import ContactForm from './components/ContactForm';

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Profiles />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default App;
