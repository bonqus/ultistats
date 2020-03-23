import Vue from "vue";
import Vuex from "vuex";

import matches from "./matches";
import tournaments from "./tournaments";
import teams from "./teams";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */


export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      matches,
      tournaments,
      teams
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store;
}
