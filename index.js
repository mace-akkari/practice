//---------- VUE --------------
Vue.component('repo-item', {
  props: ['repository'],
  data: () => ({
    isOpen: false
  }),
  template: `
    <li>
    <h3>{{repository.name}}</h3>
     <p>Description: {{repository.description}}</p>
     <div v-on:click="isOpen=!isOpen">
     <p>Forked {{repository.forks_count}} times</p>
     <p>Created: {{repository.created_at}}</p>
     <p>Updated at: {{repository.updated_at}}</p>
     <p>{{repository.watchers_count}} Watchers</p>
     <p>Has {{repository.open_issues_count}} issues</p>
    </div>
  </li>
  ` 
})

const app = new Vue({
  el: '#vue-repos',
  data: {
    title: 'Vue.js repositories',
    repos: []
  },
});

//------- Ajax --------------------
fetch(gitHubURL('vuejs'))
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Bad Response')
    }
  })
  .then((data) => {
    return app.repos = data
  })
  .catch((error) => {
    console.error(error)
  });

//------- Functions -----------

function gitHubURL(gitUser) {
  return `https://api.github.com/users/${gitUser}/repos`
};