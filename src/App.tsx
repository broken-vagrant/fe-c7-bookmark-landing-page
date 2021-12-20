import './App.css';
import Button from './components/Button';
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
          <div className="2xl:px-20 2xl:py-14 2xl:pl-[12rem] md:px-10 md:py-6 px-1 py-6 text-center lg:text-left">
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
        <section className="relative mt-10 text-[1rem]">
          <div className="w-[30%] mx-auto my-8 text-center">
            <h2 className="font-medium text-[1.5em] my-4">
              Features
            </h2>
            <p className="text-grayish-blue">
              Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
            </p>
          </div>
          <div className="tabs ">
            <div role="tablist" aria-label="Features" className="border-b-gray-300 border-solid border-b-[1px] max-w-[890px] mx-auto flex items-center justify-between text-lg text-grayish-blue">
              <button role="tab" aria-selected="true" aria-controls="bookmarking-tab" id="bookmarking" className=" relative p-4 px-6  after:content-[''] after:absolute after:inset-0 after:border-b-transparent after:border-b-4 after:border-solid hover:text-soft-red active:text-very-dark-blue active:after:border-b-soft-red">
                Simple Bookmarking
              </button>
              <button role="tab" aria-selected="true" aria-controls="speedy-searching-tab" id="speedy-searching" className="p-4 px-6 hover:text-very-dark-blue">
                Speedy Searching
              </button>
              <button role="tab" aria-selected="true" aria-controls="easy-sharing-tab" id="easy-sharing" className="p-4 px-6 hover:text-very-dark-blue">
                Easy Sharing
              </button>
            </div>
            <div tabIndex={0} role="tabpanel" id="bookmarking-tab" aria-labelledby="bookmarking">

            </div>
            <div tabIndex={0} role="tabpanel" id="speedy-searching-tab" aria-labelledby="speedy-searching">

            </div>
            <div tabIndex={0} role="tabpanel" id="easy-sharing-tab" aria-labelledby="easy-sharing">

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;