<template>
  <div>
    <input type="text" v-model="query" @keyup="getSuggestions" />
    <ul>
      <li v-for="suggestion in suggestions" :key="suggestion">
        {{ suggestion }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      suggestions: [],
    };
  },
  methods: {
    async getSuggestions() {
      try {
        //   const response = await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&q=${this.query}`);
        const response = await fetch("/api/google-suggest", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: this.query }),
        });
        console.log(response);

        const data = await response.json();
        this.suggestions = data[1];
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
input {
  width: 60%;
  height: 30px;
  border: 1px solid #000;
  padding: 12px;
  box-sizing: border-box;
}
</style>
