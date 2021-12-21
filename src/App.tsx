import './App.css';
import Button from './components/Button';
import FeatureTabs from './components/FeatureTabs';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="relative flex flex-col lg:flex-row-reverse">
          <div className="bg__hero-img relative basis-[60%] select-none pointer-events-none">
            <div className="relative lg:mr-20 mr-0 mt-10">
              <img src="./images/illustration-hero.svg" alt="hero" className="w-full h-full object-contain"></img>
            </div>
          </div>
          <div className="2xl:px-20 2xl:py-14 2xl:pl-[12rem] md:px-10 md:py-6 px-2 py-6 text-center lg:text-left">
            <div className="w-full sm:mx-auto lg:w-[65%] relative text-[.9rem] sm:text-[1rem] lg:mx-0">
              <h1 className="text-[2em] font-medium">A simple Bookmark Manager</h1>
              <p className="text-grayish-blue my-8">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
              <div className="flex gap-[1em] lg:justify-start justify-center">
                <Button className="">Get it on Chrome</Button>
                <Button themeColor="gray">Get it on Firefox</Button>
              </div>
            </div>
          </div>
        </section>
        <FeatureTabs />
      </main>
    </div>
  );
}

export default App;