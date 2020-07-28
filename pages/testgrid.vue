<template>
  <div class="grid-container">
    <!-- <div> -->
    <div class="header1">logo</div>
    <div class="header2">name</div>
    <div class="body">body1</div>
    <div class="body">body2</div>
    <div class="body">body3</div>
    <div class="body">body4</div>
    <div class="footer">7</div>
    <div class="footer">8</div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.header1 {
  grid-area: grid-header;
  /* display: grid; */

  /* grid-column: 1 / 3; */
  border-block-color: #000000;
  border-style: solid;
  /* grid-gap: 50px 100px; */
}
.header2 {
  grid-area: grid-header;
  /* display: grid; */
  /* grid-column: 3/4; */
  border-block-color: #000000;
  border-style: solid;
  /* grid-gap: 50px 100px; */
}
.body {
  grid-area: grid-body;
  /* display: grid; */
  /* grid-row: 3 / 4; */
  border-block-color: #000000;
  border-style: solid;
  /* grid-gap: 50px 100px; */
}
.footer {
  grid-area: grid-footer;
  /* display: grid; */
  border-block-color: #000000;
  border-style: solid;
  /* grid-gap: 50px 100px; */
}
.grid-container {
  grid-template-areas:
    'grid-header grid-header grid-header grid-header'
    'grid-body grid-body grid-body grid-body'
    'grid-footer grid-footer grid-footer grid-footer';
  /* grid-template-columns: auto auto auto auto; */
  border-block-color: #000000;
  border-style: solid;
  grid-gap: 5px;
}
</style>
