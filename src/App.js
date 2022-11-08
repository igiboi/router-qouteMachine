import { Route, Switch, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="quotes" />
        </Route>
        {/* we put exact so when visiting quotes/quiteId it doesnt redirect you to /quotes */}
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <NewQuote />
        </Route>
        <Route path="/new-quote">
          <QuoteDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
