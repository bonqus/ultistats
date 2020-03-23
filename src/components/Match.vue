<template>
  <q-item dense clickable class="justify-center items-center">
    <span class="col text-right">
      {{ match.team_home }}
    </span>
    <span class="row col-2 ">
      <span class="col text-right">
        {{ match.team_home_score }}
      </span>
      <span class="col-2 text-center">
        -
      </span>
      <span class="col left">
        {{ match.team_away_score }}
      </span>
    </span>
    <span class="col">
      {{ match.team_away }}
    </span>
    <span>
      {{ match.tournament  }} {{ match.year }}
    </span>
  </q-item>
</template>

<script>
export default {
  name: "Match",
  props: {
    match: {
      required: true
    }
  }
};
</script>
