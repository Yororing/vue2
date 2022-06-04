<template>
  <h1>Hello {{ animal }}</h1>
  <h2>eats {{ food }}</h2>
  <input type="text" v-model="food" />
  <img :src="imageSource" alt="bind" />
  <a v-bind:href="naverUrl">Naver</a>
  <hr />
  <h2
    v-bind:class="{
      orange: food === 'apple',
      'not-good': food === 'rice',
      salmon: food === 'salmon',
    }"
  >
    {{ animal }} eats {{ food }}
  </h2>
  <h2 v-for="(animals, index) in zoo" :key="index">
    {{ animals }} has id = {{ index }}
  </h2>
  <hr />
  <template v-for="(animals, index) in zoo" :key="index">
    <h2 v-if="animals !== 'monkey'">
      {{ animals }} has id = {{ index }} how to v-for in v-if
    </h2>
  </template>
  <hr />
  <div>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        name:{{ user.name }} job: {{ user.job }} gender: {{ user.gender }}
        <p v-for="skill in user.skill" :key="skill">{{ skill }}</p>
      </li>
    </ul>
  </div>
  <hr />
  <div>
    // v-if delete class component
    <h2 v-if="display">Your age is {{ age }}</h2>
    // v-show makes component as display:none
    <h2 v-show="display">Your age is {{ age }}</h2>
    <p v-if="age > 18">You're adult</p>
    <p v-else-if="age > 13 && age < 18">You're awesome</p>
    <p v-else>You're child</p>
  </div>
</template>

<script>
export default {
  name: "App-for-practice",
  data() {
    return {
      age: 30,
      display: true,
      zoo: ["monkey", "cat", "lion"],
      animal: "Dog",
      food: "All",
      imageSource: "https://placeimg.com/100/100/any",
      naverUrl: "https://www.naver.com",
      users: [
        {
          name: "Yoro",
          gender: "male",
          job: "programmer",
          skill: ["html", "css", "js"],
        },
        {
          name: "nico",
          gender: "male",
          job: "teacher",
          skill: ["React", "Next", "All"],
        },
      ],
    };
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
.orange {
  color: orange;
}
.salmon {
  color: salmon;
}
.not-good {
  text-decoration: line-through;
}
</style>
