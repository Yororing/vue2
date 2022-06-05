<template>
  <div>
    <span>{{ count }}</span>
    <button v-on:click="addNumb">increase</button>
    <button v-on:click="minusNumb">decrease</button>
    <hr />
    <h2>{{ message }}</h2>
    <button @click="greeting">Say Hello</button>
    <button @click="goodbye">Say goodbye</button>
    <button @click="addPosition($event, 10)">10 Plus</button>
    <button @click="addPosition($event, 100)">100 Plus</button>
    <hr />
    <div @click="getMousePosition" class="box">
      <span>{{ position }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { count: 0, message: "", position: "" };
  },
  methods: {
    getMousePosition(event) {
      this.position = `${event.pageX}, ${event.pageY}`;
    },
    addPosition(e, value) {
      this.message = `Mouse is ${e.pageX} And Plus ${value} is ${
        e.pageX + value
      }`;
    },
    greeting() {
      this.message = "Hello?";
    },
    goodbye() {
      this.message = "Bye Bye";
    },
    addNumb() {
      this.count++;
    },
    minusNumb() {
      this.count--;
    },
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  width: 150px;
  height: 50px;
}
.box {
  width: 300px;
  height: 300px;
  color: white;
  background-color: blueviolet;
}
</style>
