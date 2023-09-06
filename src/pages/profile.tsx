"use client";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { authOptions } from "@/lib/auth";
import { increment, decrement } from "@/app/redux/slices/conterSlice";
import Header from "@/components/header.component";

export default function Profile() {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter);
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
      <Header />
      <section className="bg-ct-blue-600  min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>
            <p className="mb-3 text-5xl text-center font-semibold">
              Profile Page
            </p>
            {!user ? (
              <p>Loading...</p>
            ) : (
              <div className="flex items-center gap-8">
                <div>
                  <img
                    src={user.image ? user.image : "/images/default.png"}
                    className="max-h-36"
                    alt={`profile photo of ${user.name}`}
                  />
                </div>
                <div className="mt-8">
                  <p className="mb-3">Name: {user.name}</p>
                  <p className="mb-3">Email: {user.email}</p>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => dispatch(increment())}
            type="button"
            className="ml-5 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            increment
          </button>

          <button
            onClick={() => dispatch(decrement())}
            type="button"
            className="ml-5 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            decrement
          </button>

          <h1>counter: {counter?.value}</h1>
        </div>
      </section>
    </>
  );
}
