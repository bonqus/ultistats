import Vue from "vue";
import Vuex from "vuex";

import { PaginationPlugin, createResource } from "vuex-pagination";
import { fetchPage } from "../api/api-client";

Vue.use(PaginationPlugin);

// Initialize resource
createResource("matchesPage", fetchPage);
