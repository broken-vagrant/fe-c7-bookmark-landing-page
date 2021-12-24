import { TextField } from "./TextField";

const Contact = () => {
  return (
    <section className="bg-soft-blue py-8">
      <div className="w-1/4 mx-auto ">
        <p className="uppercase tracking-widest text-white text-xs text-center">35,000+ Already joined</p>
        <h2 className="text-white text-center">Stay up-to-date with what we're doing</h2>
        <TextField tag="input"></TextField>
      </div>
    </section>
  )
}



export default Contact;