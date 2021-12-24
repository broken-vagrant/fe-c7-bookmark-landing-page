import { Accordion, AccordionDetails, AccordionSummary } from "./Accordion";

const FAQ = () => {
  return (
    <section className="relative sm:text-[1rem] text-[.9rem]">
      <div className="px-2 lg:px-0 w-full sm:w-[80%] md:w-[60%] lg:w-[30%] mx-auto my-8 text-center">
        <h2>Frequently Asked Questions</h2>
        <p className="text-grayish-blue">
          Here are some of FAQs. If you have any other question you'd like answered please feel free to email us.
        </p>
      </div>
      <Accordion classes={{ root: 'border-solid border-y-[1px] border-gray-400' }}>
        <AccordionSummary id="panel1-header" aria-controls="panel1-content">
          What is Bookmark?
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-grayish-blue">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veniam cumque in eveniet dignissimos saepe ullam vel aliquid sequi, voluptatum quam eius cupiditate, asperiores nemo, doloribus rem necessitatibus sed totam.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary id="panel2-header" aria-controls="panel2-content">
          How can I request a new browser?
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-grayish-blue">
            voluptatum quam eius cupiditate, asperiores nemo, doloribus rem necessitatibus sed totam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dignissimos corporis magni accusantium nobis sunt? Deleniti sit corporis asperiores quisquam, quis ullam amet magnam sunt blanditiis vel, ab voluptatum fuga?
          </p>
        </AccordionDetails>
      </Accordion>
    </section>
  )
}

export default FAQ;