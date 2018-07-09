<template>
  <div id="header">
    <ul>
      <li v-for="elem in elements" :key="elem.title"> 
        <a @click="$emit('showThis', elem.name)" href="#">{{elem.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      elements: [
        { title: 'Complete', name: 'appComplete' },
        { title: 'Incomplete', name: 'appIncomplete' },
      ]
    }
  }
}
</script>


<style>

  #header {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background: #4e123d;
  }

  ul {
    list-style: none;
  }

  li {
    display: inline;
    padding: 20px 40px;
  }

  a {
    text-decoration: none;
    color: beige;
    font-size: 30px;
  }

  a:hover {
    text-decoration: underline;
  }


</style>


