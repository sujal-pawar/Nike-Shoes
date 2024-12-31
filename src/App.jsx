import React from 'react';
import { PopularProducts ,
  SuperQuality,Subscribe,Footer,Hero } from './sections';

import Nav from './components/Nav';
import Hero1 from './sections/Hero1';

const App = () => {
  return (
    <main className="relative">
      <section className="top-0 z-50">
      <Nav/>
      </section>
      <section className="padding-b">
        <Hero1/>
      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
      <PopularProducts/>
      </section>
      <section className="sm:px-16 px-8 sm:py-18 py-6">
      <SuperQuality/>
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
      </section>
      <section className="padding-x padding-t pb-8 bg-black text-white">
      <Footer/>
      </section>
      
    </main>
  );
}

export default App;