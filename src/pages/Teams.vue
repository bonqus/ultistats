<template>
  <q-page class="flex flex-center">
    <q-list separator class="col">
      <team v-for="t in teams" :key="t.id" :team="t" />
    </q-list>
  </q-page>
</template>

<script>
import Team from "components/Team";

import { mapGetters } from "vuex";
export default {
  name: "PageIndex",
  components: {
    Team
  },
  computed: {
    ...mapGetters("teams", ["teams"])
  }
};
</script>
