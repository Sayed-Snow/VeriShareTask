import React from 'react'

function Login() {
  return (
    <section class="bg-gray-50 ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg  md:mt-0 sm:max-w-md xl:p-0  ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl text-center text-blue-700 font-bold leading-tight tracking-tight md:text-2xl ">
                  Create account
              </h1>
              <p class="text-sm text-center text-black font-bold leading-tight tracking-tight ">
                  Create an account so  you can explore all the existing jobs
              </p>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5    " placeholder="Email" required=""/>
                  </div>
                  <div>
                      <input type="password" name="password" id="password" placeholder="Password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5     " required=""/>
                  </div>
                  <div>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                  </div>
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Create an account</button>
                  <p class="text-sm text-black font-bold text-center ">
                      Already have an account
                  </p>
                  <p class="text-sm text-blue-700 font-bold text-center ">
                      Or continue with
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Login