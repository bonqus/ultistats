<template>
  <q-item dense clickable class="justify-center items-center">
    <span class="col text-right">
      {{ tournament.team_home }}
    </span>
    <span class="row col-2 ">
      <span class="col text-right">
        {{ tournament.team_home_score }}
      </span>
      <span class="col-2 text-center">
        -
      </span>
      <span class="col left">
        {{ tournament.team_away_score }}
      </span>
    </span>
    <span class="col">
      {{ tournament.team_away }}
    </span>
    <span>
      {{ tournament.tournament  }} {{ tournament.year }}
    </span>
  </q-item>
</template>

<script>
export default {
  name: "Tournament",
  props: {
    tournament: {
      required: true
    }
  }
};
</script>
