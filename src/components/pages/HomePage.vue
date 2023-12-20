<template>
  <div class="container">
    <div class="article" v-for="article in articles" :key="article.id">
      <h2>{{ article.title }}</h2>
      <router-link :to="`/article/${article.id}`">Voir plus</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      articles: []
    };
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.articles = data;
      })
      .catch(error => console.error('Error:', error));
  }
};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}

.article {
  flex-basis: 30%; 
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
}

.article:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.article h2 {
  margin-top: 0;
}

@media (max-width: 768px) {
  .article {
    flex-basis: 45%; 
  }
}

@media (max-width: 480px) {
  .article {
    flex-basis: 90%; 
  }
}
</style>

