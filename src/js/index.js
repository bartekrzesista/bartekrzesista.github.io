import '../scss/main.scss';

console.log('HELLO 🚀');

fetch("https://api.github.com/users/bartekrzesista/repos?sort=created")
  .then((resp) => resp.json())
  .then((resp) => {
    const container = document.querySelector(".projects__grid--js");
    for (let repo of resp) {
      const { name, description, homepage, html_url } = repo;

      const template = `<article class="repo">
      <div class="repo__top">
        <span class="repo__top-circle"></span>
        <span class="repo__top-circle"></span>
        <span class="repo__top-circle"></span>
      </div>
      <div class="repo__content">
        <img
          class="repo__github-img"
          src="img/github-white.svg"
          alt="Github logo"
        />
        <ul class="repo__list">
          <li class="repo__list-item">
            <span class="repo__label">project:</span>
            <span class="repo__value repo__value-name">${name}</span>
          </li>
          <li class="repo__list-item">
            <span class="repo__label">description:</span>
            <span class="repo__value repo__value-description">${description}</span>
          </li>
          <li class="repo__list-item">
            <span class="repo__label">demo:</span>
            <span class="repo__value repo__value-link">
              &lt;<a
                title="${name} - demo"
                href="${homepage}"
                target="_blank"
                rel="noopener noreferrer"
              >see here</a>&gt;
            </span>
          </li>
          <li class="repo__list-item">
            <span class="repo__label">github:</span>
            <span class="repo__value repo__value-link">
              &lt;<a
                title="${name} - repository"
                href="${html_url}"
                target="_blank"
                rel="noopener noreferrer"
              >source code</a>&gt;
            </span>
          </li>
        </ul>
      </div>
    </article>`;

      if(description) container.innerHTML += template;

    }
  })
  .catch((e) => {
    console.log("Failed to fetch");
  });