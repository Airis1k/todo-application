import { useState } from "react";
import { Link } from "react-router-dom";

interface User {
   name: string;
   email: string;
   password: string;
   ["confirm-pass"]: string;
}

export default function RegisterPage() {
   const [form, setForm] = useState<User>({
      name: "",
      email: "",
      password: "",
      "confirm-pass": "",
   });

   function updateForm(value) {
      return setForm((prev) => {
         return { ...prev, ...value };
      });
   }

   async function onSubmit(e) {
      e.preventDefault();
      const allowed = ["name", "email", "password"];
      // filtravimas - pasalina 'confirm-pass' key is objekto.
      const filtered = Object.keys(form)
         .filter((key) => allowed.includes(key))
         .reduce((obj, key) => {
            obj[key] = form[key];
            return obj;
         }, {});

      try {
         let response = await fetch("http://localhost:5050/users", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(filtered),
         });

         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }
         console.log("Success!");
      } catch (err) {
         console.error("A problem occurred with register operation: ", err);
      } finally {
         setForm({ name: "", email: "", password: "", "confirm-pass": "" });
         // navigate
      }
   }

   return (
      <div className="max-w-md mx-auto mt-40">
         <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-10">
            Register
         </h1>
         <form onSubmit={onSubmit} className="grid gap-3">
            <div>
               <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
               >
                  Name:
               </label>
               <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={form.name}
                  onChange={(e) => updateForm({ name: e.target.value })}
               />
            </div>
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
                  value={form.email}
                  onChange={(e) => updateForm({ email: e.target.value })}
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
                  value={form.password}
                  onChange={(e) => updateForm({ password: e.target.value })}
               />
            </div>
            <div>
               <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium leading-6 text-gray-900"
               >
                  Confirm Password:
               </label>
               <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={form["confirm-pass"]}
                  onChange={(e) =>
                     updateForm({ "confirm-pass": e.target.value })
                  }
               />
            </div>
            <input
               type="submit"
               value="Sign in"
               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
            />
         </form>
         <p className="mt-10 text-center text-sm text-gray-500">
            Already registered?
            <Link
               to="/login"
               className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
            >
               Click to login
            </Link>
         </p>
      </div>
   );
}
