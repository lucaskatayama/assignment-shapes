# JavaScript assignment

## Shapes

The goal of this task is to write a simple html/JavaScript program that interacts with the user and draws some  eometrical shapes. The program is launched by viewing "index.html" in a recent standards-compliant web browser.

## Basic flow

The user selects three arbitrary points within the client area of the browser. As they are
selected, the program highlights their location by drawing red circles, 11 pixels in diameter,
cantered on each selected point.
Based on these three points, two additional shapes are drawn:

- a blue parallelogram, having three of its corners in the points selected by the user.
- a yellow circle, with the same area and centre of mass as the parallelogram.

These shapes should not be filled.

The coordinates of the selected points as well as the area of the parallelogram and circle should be presented to the user.

The user is free to move around the points. This makes the parallelogram, circle and printed information update accordingly.

There is also a "reset" feature that clears the board and lets the user select three new points,
repeating the process described above. Finally, there is an "about" feature that presents
information about the program, its author and how it should be used, in your own words.

## How to submit

Make sure you put all relevant files in a single directory hierarchy, which you in turn add to a
.tar, gz or .zip archive. If your program requires any third-party components, please include
them as well. Only submit any code that you have the right to distribute. Finally, send us
your full solution in an email (edith@cmind.se).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
