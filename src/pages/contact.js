import React from 'react'
import Layout from "../components/layout"
import Hero from '../components/template-parts/Hero';
import ContactForm from '../components/template-parts/ContactForm';



function contact() {
    return (
        <Layout>
            <Hero slug="page-contact" />
            <ContactForm />
        </Layout>
    )
}

export default contact
