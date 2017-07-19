
## Synopsis:
"GeoGig is an open source tool that draws inspiration from Git, but adapts its core concepts to handle distributed versioning of geospatial data." *more information [geogig](http://geogig.org/)*

## This is module/lib javascript for depelopers.
Unofficial module/lib for geogig.

## **Download**
```bash
npm install geogig-js
```

## Instructions for use
```bash
let Geogig = new geogigJS({
  bin: "C:\\Users\\jlanio\\Geogig-Desktop\\app\\static\\geogig\\bin\\geogig.bat",
  cwd: "C:\\Users\\jlanio\\Geogig-Desktop\\app\\static\\tmp"
});

Geogig.serve.init().then(succes => console.log(succes))

```


## **Developing**
> Feedback or suggestions: lanio.morais@gmail.com

## **License**

Source code and software is distributed under an GPL-3.0
