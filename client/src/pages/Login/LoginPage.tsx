import { Link } from "react-router-dom";

export default function LoginPage() {
   return (
      <div className="max-w-md mx-auto mt-40">
         <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-10">
            Login
         </h1>
         <form action="" method="get" className="grid gap-3">
            <div>
               <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
               >
                  Email:
               </label>
               <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               />
            </div>
            <div>
               <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
               >
                  Password:
               </label>
               <input
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               />
            </div>
            <input
               type="submit"
               value="Log in"
               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
            />
         </form>
         <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link
               to="/register"
               className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
            >
               Click to register
            </Link>
         </p>
      </div>
   );
}