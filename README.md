# HNG-SCRIPT:

**This script gets all the files in the scripts folder and runs exec on it, after which it outputs HTML to show a list of passes and failures.**

## Supported Languages

**Javascript | PHP | Python | Java | Dart**

## TO-CONTRIBUTE:

```yaml
Clone Repo:
  https://github.com/elishaukpong/HNG-Script.git
```
**Next**
```yaml
Add your intern script to the folder:
  /scripts

Following this format:
  [surname]-[name].[ext]

Example: ada-musa.js, ade_chika.py

Your intern script output must have this format:
Hello World, this is [FullName] with HNGi7 ID [ID] and email [Email] using [Language] for stage 2 task

For Example:
Hello World, this is Elisha Simeon Ukpong Udoh with HNGi7 ID HNG-01827 and email simeon.udoh45@gmail.com using python for stage 2 task

FullName supports up to 4 names.
```


**DON'T ADD YOUR SCRIPT TO THE ROOT DIRECTORY OF THIS PROJECT**
```yaml
Run:
  php -S localhost:8000 in the HNG-Script folder

Visit the link in the browser that look like:
  http://127.0.0.1:8080/
```

## NOTE:

PHP version 7.3 and above MUST be installed,
Python version 2 and above MUST be installed,
Dart MUST be installed and
Java MUST be installed.

visit https://dart.dev/get-dart to install dart on your local machine.



# RESULT:

This will show a list of all executed scripts and the status.

**Demo Image**
<p align="center">
<img src="Demo-Images/html-Image.png" height="" width="1280"  alt="imageView Demo"/>
</p>

## To get a JSON VERSION

```yaml
Add:
  /?json
  
To the end of:
  localhost:8000
  
Example: localhost:8000/?json
```

**Demo Json**
<p align="center">
<img src="Demo-Images/json-Image.png" height="" width="1280"  alt="jsonView Demo"/>
</p>
