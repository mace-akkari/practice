//---------- VUE --------------

const repo = new Vue({
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
    return repo.repos = data
  })
  .catch((error) => {
    console.error(error)
  });

//------- Functions -----------

function gitHubURL(gitUser) {
  return `https://api.github.com/users/${gitUser}/repos`
};