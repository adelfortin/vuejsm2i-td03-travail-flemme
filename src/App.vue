<template>
  <div id="app">
    <nav>
      <router-link to="/" :class="{'nav-link': true, 'active': $route.name === 'Home'}">Home</router-link>
      <router-link to="/travail" :class="{'nav-link': true, 'active': $route.name === 'Travail'}">Travail</router-link>
      <router-link to="/flemme" :class="{'nav-link': true, 'active': $route.name === 'Flemme'}">Flemme</router-link>
      <router-link to="/">Home</router-link>
    </nav>
    <router-view/>
    <div class="current-route">
      Current Route: {{ $route.path }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: #34495e;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-link {
  color: #ecf0f1;
  text-decoration: none;
  margin: 0 10px;
  padding: 10px 15px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover, .nav-link.active {
  background-color: #42b983;
  color: white;
}

.current-route {
  margin-top: 20px;
  color: #16a085;
}
</style>

