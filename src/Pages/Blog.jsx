import React from 'react'
import Pdf from "react-to-pdf";
import ReactDOM from "react-dom";

const ref = React.createRef();

const Blog = () => {
  return (
<>
    <div className="w-4/5 flex justify-end py-4 my-4 me-7">
      
    <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
    
      </div>
    <div class="w-full md:w-3/5 mx-auto p-5 bg-white rounded-lg shadow">



  <div class="flex flex-col justify-between"  ref={ref}>
    <div class="w-2/3">
      <h2 class="section-heading text-xl">
        Questions and Answer
      </h2>
     
    </div>

  <div class="mt-8 space-y-8">
    <div>
      <div class="flex items-start text-xl">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-green-500 text-white font-medium">
              Q
          </span>
        </div>

        <p class="ml-4 md:ml-6">
          Can we have extra parking space for this unit?
        </p>
      </div>

      <div class="flex items-start mt-3">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
              A
          </span>
        </div>

        <p class="ml-4 md:ml-6 text-gray-800">
          Yes you can get extra parking space but you have to pay extra monthly.
        </p>
      </div>

     


      </div>
    </div>

  <div class="mt-8 space-y-8">
    <div>
      <div class="flex items-start text-xl">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-green-500 text-white font-medium">
              Q
          </span>
        </div>

        <p class="ml-4 md:ml-6">
          Can we have extra parking space for this unit?
        </p>
      </div>

      <div class="flex items-start mt-3">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
              A
          </span>
        </div>

        <p class="ml-4 md:ml-6 text-gray-800">
          Yes you can get extra parking space but you have to pay extra monthly.
        </p>
      </div>

     


      </div>
    </div>



  </div>
</div>
</>
  )
}

export default Blog