<template>
  <div class="container">
    <comp-header />
    <hr />
    <comp-server-status />
    <hr />
    <comp-footer />
  </div>
</template>

<script>
import serverStatus from "./Servers"

export default {
  components: {
    "comp-server-status": serverStatus
  }
}
</script>

<style></style>
