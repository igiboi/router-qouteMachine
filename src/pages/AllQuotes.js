import { Fragment } from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Luigi", text: "constantly chasing something" },
  { id: "q2", author: "Miguel", text: "Freedom from the Mind" },
];

const AllQuotes = () => {
  return (
    <Fragment>
      <QuoteList quotes={DUMMY_QUOTES} />
    </Fragment>
  );
};

export default AllQuotes;
