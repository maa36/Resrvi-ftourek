import { createStore } from "redux";

const ListeRepas = [];

const FactureTotal = (state = ListeRepas, action) => {
  if (action.type === "CHANGE_RESRVATION") {
    const repasTrouve = state.find(e => e.id === action.nouveauxRepas.id);

    if (typeof repasTrouve === "undefined") {
      return state.concat(action.nouveauxRepas);
    } else {
      const index = state.indexOf(repasTrouve);


      state[index] = action.nouveauxRepas;
      return state;
    }
  }
  return state;
};

const MyStore = createStore(FactureTotal);

export default MyStore;
