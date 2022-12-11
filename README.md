<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/connoro7/ai-image-generator">
    <img src="images/logo.png" alt="Logo" width="154" height="173">
  </a>

<h3 align="center">AI Image Generator</h3>

  <p align="center">
    Image generation and editing utilizing artificial intelligence
    <br />
    <a href="https://github.com/connoro7/ai-image-generator"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/connoro7/ai-image-generator">View Demo</a>
    ·
    <a href="https://github.com/connoro7/ai-image-generator/issues">Report Bug</a>
    ·
    <a href="https://github.com/connoro7/ai-image-generator/issues">Request Feature</a>
  </p>
</div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPL-3 License][license-shield]][license-url]

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![OpenAI][Openai]][Openai-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- Install npm globally

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

   ```sh
   mkdir YOUR-DESIRED-DIRECTORY-NAME
   cd YOUR-DESIRED-DIRECTORY-NAME
   git init
   git remote add origin https://github.com/connoro7/ai-image-generator.git # if over HTTPS
   git remote add origin git@github.com:connoro7/ai-image-generator.git # if over SSH
   git remote -v
   git fetch --all --prune -v
   git pull origin master
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Get a free API Key at [https://beta.openai.com/](https://beta.openai.com/)

4. Add environment variables to `./.env`

   ```js
   PORT=3000
   OPENAI_API_KEY = 'API SECRET KEY';
   ```

5. Run the development server

  ```sh
  npm run dev
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->

1. Visit [http://localhost:3000](http://localhost:3000) in your browser

2. The `generateImage` endpoint is at `POST http://localhost:3000/openai/generateimage`

_For more examples, please refer to the [OpenAI's Image Generation Documentation](https://beta.openai.com/docs/guides/images)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Backend
  - [x] Set up Express server
    - [x] Add middleware to serve static html to client
    - [x] Add middleware to parse `body` payload in requests to API
  - [ ] Build server-side router logic
    - [x] Build router for generating images
    - [ ] Build router for editing images
  - [ ] Build server-side endpoint controller logic
    - [x] Build controller for generating images
    - [ ] Build controllers for editing images
- [ ] Frontend
  - [ ] Build client-side form handler logic
    - [ ] Write logic for image generation
    - [ ] Write logic for image editing
  - [ ] Write client-side markup
    - [ ] Build form for user to input image generation seed string and image size
    - [ ] Build form for user to upload image
    - [ ] Build image editing app and tooling
  - [ ] Add client-side styling

See the [open issues](https://github.com/connoro7/ai-image-generator/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the GNU General Public License v3.0. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@_connorDillon](https://twitter.com/_connorDillon) - connor@connordillon.dev.com

Project Link: [https://github.com/connoro7/ai-image-generator](https://github.com/connoro7/ai-image-generator)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

- [Web Vectors by Vecteezy](https://www.vecteezy.com/free-vector/web)
- []()
- []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[repo-home]: https://github.com/connoro7/ai-image-generator
[contributors-shield]: https://img.shields.io/github/contributors/connoro7/ai-image-generator.svg?style=for-the-badge
[contributors-url]: https://github.com/connoro7/ai-image-generator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/connoro7/ai-image-generator.svg?style=for-the-badge
[forks-url]: https://github.com/connoro7/ai-image-generator/network/members
[stars-shield]: https://img.shields.io/github/stars/connoro7/ai-image-generator.svg?style=for-the-badge
[stars-url]: https://github.com/connoro7/ai-image-generator/stargazers
[issues-shield]: https://img.shields.io/github/issues/connoro7/ai-image-generator.svg?style=for-the-badge
[issues-url]: https://github.com/connoro7/ai-image-generator/issues
[license-shield]: https://img.shields.io/github/license/connoro7/ai-image-generator.svg?style=for-the-badge
[license-url]: https://github.com/connoro7/ai-image-generator/blob/master/LICENSE
[Openai-url]: https://openai.com/
[Openai]: https://raster.shields.io/badge/-OpenAI-black?style=for-the-badge&logo=OpenAI
<!-- [product-screenshot]: images/screenshot.png -->