import React from 'react'

const Slider = () => {
    return (
      <section id="sliderBlock" className="bg-black w-full h-screen">
        <article className="w-4/5 m-auto py-20">
          <div>
            <h2 className='text-orange-400 text-6xl uppercase font-bold'>Welcome to Qspiders</h2>
            <p className='font-normal text-justify text-lg py-6 text-white'>
              A version of Lorem Ipsum, that in publishing and graphic design,
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. Lorem ipsum may be used as a placeholder
              before final copy is available. It is also used to temporarily
              replace text in a process called greeking, which allows designers
              to consider the form of a webpage or publication, without the
              meaning of the text influencing the design.
            </p>
            <footer>
              <button className='w-1/5 bg-orange-500 p-4 hover:bg-orange-800 uppercase'>join</button>
            </footer>
          </div>
        </article>
      </section>
    );
}

export default Slider
