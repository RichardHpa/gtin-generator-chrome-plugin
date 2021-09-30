# GTIN Generator Chrome Extension
> Chrome Extension that generates random, valid GTINs tha can be used for software testing purposes.

These numbers **must not** be used for any other purpose as they are likely to clash with real products that are already used in the market place.

## Background

The Global Trade Item Number (GTIN) is a globally unique identifier that is part of the [GS1 System of standards](https://www.gs1.org/standards).

Companies can obtain licensed GTINs through a GS1 member organisation in their home country.

During the testing of software that handles or uses GTINs, it is sometimes neccesary to test with unique, valid GTIN.

The GTIN includes a check digit, which makes it difficult to generate a valid number simply by typing the correct number of digits.

This extension solves that problem.

## Installation

Clone the Repository. This is the recommended way to get new updates.

```sh
$ git clone https://github.com/RichardHpa/gtin-generator-chrome-plugin.git
```

You can also download a zip of the current version.

## Install in Chrome

0. Unzip the folder if you downloaded the zipped version.
1. Once you have Cloned or Downloaded the extension, open Chrome and click the Jigsaw Icon in the top right of your task bar and select Manage Extensions, or paste `chrome://extensions/` in your chrome browser.
2. Since this extension will not go on the chrome web store, toggle Developer Mode in the top right.
3. Click the Load unpacked button and select the folder of the project. This will install the extension locally on your chrome browser.
4. If you want to pin the extension to your task bar, select the Jigsaw icon again and toggle the pin icon.

## Updating the Extension

### Clone Repo
Pull any new changes from Github, and then click the refresh button in the Manage Extensions area.

### Downloaded Zip
To update the Zip project, you will need to remove the extension from the Manage Extensions area, download the new version of the plugin and then reinstall it with the steps above.
