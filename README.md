# Lokalist

Welcome to the official repository for the Lokalist website, a curated directory showcasing Malaysian-made software, tools, and platforms. This project is a community-driven initiative by [Soluna](httpss://lokalist.soluna.dev/about/soluna) to promote and celebrate the talent within the Malaysian tech ecosystem.

## About This Project

This repository contains the source code for the Lokalist documentation and showcase website, built using [VitePress](https://vitepress.dev/). It serves as a central hub for discovering projects, learning about their creators, and connecting with the local developer community.

## Getting Started

Follow these instructions to set up a local development environment.

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/Soluna-MY/lokalist.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd lokalist
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running in Development Mode

To start the local development server, run the following command:

```sh
npm run docs:dev
```

This will launch the VitePress site on `http://localhost:5173`. The server supports hot-reloading, so changes you make to the Markdown files or theme components will be reflected instantly.

## Build the Site

To generate a static build of the website, run:

```sh
npm run docs:build
```

The output files will be located in the `.vitepress/dist` directory. You can preview the build locally using:

```sh
npm run docs:preview
```

## Contributing

Contributions are welcome! If you know of a Malaysian project that should be on the list, or if you'd like to fix a bug or improve the documentation, please feel free to open an issue or submit a pull request.

## About Soluna

Lokalist is a community project initiated and maintained by **Soluna**, a Malaysian web development service provider. We build high-quality, scalable digital solutions for businesses and innovators. By supporting Lokalist, you are helping us invest back into the local tech community.
