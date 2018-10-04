//---------- VUE --------------

new Vue({
  el: '#vue-repos',
  data: {
    title: 'Vue.js repositories',
    repos: vueProject
  },
});


//------- Ajax --------------------

const vueProject =
  fetch(gitHubURL(vuejs))
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Bad Response')
      }
    })
    .then(getRepos)
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error(error)
    });

//------- Functions -----------

function gitHubURL(gitUser) {
  return `https://api.github.com/users/${gitUser}`
};

function getRepos(repo) {
  return repo.data;
}


