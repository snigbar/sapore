import React from 'react'
import Pdf from "react-to-pdf";


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
        Tell us the differences between uncontrolled and controlled components.
        </p>
      </div>

      <div class="flex items-start mt-3">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
              A
          </span>
        </div>

        <p class="ml-4 md:ml-6 text-gray-800">
          The main difference between controlled and uncotrolled components is maintaining its internal state.
          Controlled components are components that have their state and behavior controlled by the parent component.These components
          updates there behavior and state depending on the data inherited from props.
          <br/>
          On the other hand uncontrolled components refer to components refer to components that manage their states and behavior internally. Uncontrolled
          components updated directly from DOM or user activity.
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
          How to validate React props using PropTypes?
        </p>
      </div>

      <div class="flex items-start mt-3">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
              A
          </span>
        </div>

        <p class="ml-4 md:ml-6 text-gray-800">
          PropTypes is used for props validation. Its ensures the passed value is a correct datatype.
          To use PropTypes we need to install it and import it as well. To use propType after returning the component
          create ComponentName.propTypes = an object where props value will be tested like ' title: PropTypes.string.isRequired,' to check.
          If the type is not a string for this case, proptype will warn the console. This just an simple example. Its helps a lot in handling data from api.
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
         Tell us the difference between nodejs and express js
        </p>
      </div>

      <div class="flex items-start mt-3">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
              A
          </span>
        </div>

        <p class="ml-4 md:ml-6 text-gray-800">
        Node.js is a cross-platform, open-source server environment. Node.js is a run-time environment for building server-side fast scalable 
        network application using javascript. It is is used for running web applications outside the client's browser.
        <br/>
        ExpressJS is a web application framework for NodeJS. It is built on the top of nodejs. It provides robust feature for building single,multipage
        or even complex web application using javascript and nodejs.It is s the most popular web framework for Node.js. It is designed for building web applications and APIs.
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
        What is a custom hook, and why will you create a custom hook?
        </p>
      </div>

      <div class="flex items-start mt-3">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
              A
          </span>
        </div>

        <p class="ml-4 md:ml-6 text-gray-800">
        Custom Hooks are resuable functions. Custom hook name starts with use. It is resusable code block allow writing cleaner code.
        If you need to do something multiple times, you can create a custom hook rather than creating the function again and again. Custom hook 
        makes code cleaner and rendering fast. For example, you can create your own hook for fetching and converting data into json. We can turn a complex function to a hook rather than writing it again.

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