import React from 'react'

const Registration = () => {
    return (
        <div>
            <section className="hero-gradient text-primary-foreground section-padding text-center">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">सदस्यता/ वैवाहिक पंजीकरण  </h1>
                    <p className="text-primary-foreground/80 text-lg">Membership/Marriage Registration</p>
                </div>
            </section>
            <section className='m-12 mx-auto max-w-3xl flex justify-center items-center gap-7 '>
                <div>
                    <a
                        href="https://forms.gle/LNHt1hVZe9hyxMT19"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary-warm transition-colors shadow-lg"
                    >
                        सदस्यता पंजीकरण
                    </a>
                </div>
                <div>
                    <a
                        href="https://forms.gle/FudHCuBhQekoCAHq6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary-warm transition-colors shadow-lg"
                    >
                        वैवाहिक पंजीकरण
                    </a>
                </div>
            </section>


        </div>
    )
}

export default Registration