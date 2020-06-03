# HNG-SCRIPT:

This script gets all the files in the scripts folder and runs exec on it.

Currently it supports Javascript, PHP, Python, Java, Dart programming languages alone

# TO-RUN:

Clone Repo: https://github.com/elishaukpong/HNG-Script.git

Add your intern script to the `/scripts` folder following this format - `[surname][name].[ext]`.

Example: `ada-musa.js`, `ade_chika.py`.

**DON'T ADD YOUR SCRIPT TO THE ROOT DIRECTORY OF THIS PROJECT**

run php -S localhost:8000 in the HNG-Script folder and visit the link in the browser.

# NOTE:

Dart programmers must have dart install on the local machine for testing.

visit https://dart.dev/get-dart to install dart on your local machine.

PHP must be of version 7.3 and above

# RESULT:

This will show a list of all executed scripts and the status.

**Demo Image**
<p align="center">
<img src="Demo-Images/htmlImage.png" height="800" width="1280"  alt="imageView Demo"/>
</p>

To get a JSON VERSION

```yaml
Add:
  /?json
```
To the end of localhost:8000

Example: localhost:8000/?json

**Demo Json**
<p align="center">
<img src="Demo-Images/JsonImage.png" height="50%" width=70%"  alt="JsonView Demo"/>
</p>
