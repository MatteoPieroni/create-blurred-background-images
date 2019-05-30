# Create blurred background images

This repository contains the code for a desktop app that allows the creation of base64 version of blurred images, for gradual loading.

For more info on this technique you can check CSS-TRICKS article on [The “Blur Up” Technique for Loading Background Images"](https://css-tricks.com/the-blur-up-technique-for-loading-background-images/).

## Download
You can download the windows x64 program archive here:
[Blurred Background Images - Win x64](https://github.com/MatteoPieroni/create-blurred-background-images/blob/master/release-builds/Blurred-Background-Images-win32-x64.zip)

## Usage
If you download, to run this utility just:
1. extract the archive in you preferred folder
2. execute blurred-background-images.exe

and you're all set! 🍻

## Building
If you want to build from source, you can!
(**spoiler alert**: you need `electron-packager`)

Just:

- clone the repository
- run `npm install` in the clone folder
- run `npm install -g electron-packager` (if you don't have it already installed)
- run npm run `build-windows`

