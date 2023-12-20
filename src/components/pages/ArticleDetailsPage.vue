<template>
  <div class="article-details">
    <h1>{{ article.title }}</h1>
    <p>{{ article.body }}</p>
    <div class="author">
      <h3>Author: {{ author.name }}</h3>
      <p>Email: {{ author.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetailsPage',
  data() {
    return {
      article: {},
      author: {}
    };
  },
  created() {
    const articleId = this.$route.params.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
      .then(response => response.json())
      .then(data => {
        this.article = data;
        return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
      })
      .then(response => response.json())
      .then(userData => {
        this.author = userData;
      })
      .catch(error => console.error('Error:', error));
  }
};
</script>
<style>
.article-details {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.article-details h1 {
  color: #333;
  font-size: 2em;
}

.article-details p {
  color: #666;
  line-height: 1.6;
}

.author {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.author h3 {
  margin: 0;
  color: #3498db;
}

.author p {
  margin: 5px 0 0;
  color: #333;
}
</style>
