import React from "react";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import RecieptCard from "../components/cards/recieptCard/RecieptCard";

function Home({ data, newItem }) {
  return (
    <main className="">
      <div className="container sm:w-1/2 mx-auto">
        <section className=" mt-5 flex">
          <h2 className="text-black text-center text-sm font-semibold self-stretch dark:text-white">
            My Receipts
          </h2>
          <Link
            href="/"
            className="text-black text-center text-xs font-semibold self-center ml-auto   dark:text-white"
          >
            See all <MdNavigateNext className="inline-block" />
          </Link>
        </section>
        {/* Recipet items */}
        <section className="mt-4 flex flex-col gap-[6px] pb-16 ">
          {data.length === 0 && <p className="dark:text-white">Loading ...</p>}
          {data &&
            data.map((reciept, index) =>
              index === 0 && newItem ? (
                <RecieptCard {...reciept} key={reciept.id} newItem={true} />
              ) : (
                <RecieptCard {...reciept} key={reciept.id} />
              )
            )}
        </section>
      </div>
    </main>
  );
}

export default Home;
