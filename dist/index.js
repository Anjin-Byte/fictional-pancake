/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("\n\n\n\nconst canvas = document.querySelector('canvas');\n\nconst gl = canvas.getContext('webgl2');\n\n\nconst vsGLSL = `#version 300 es\nin vec4 position;\nin vec4 color;\n\nout vec4 v_color;\n\nvoid main() {\n    gl_Position = position;\n    v_color = color;\n}\n`;\n\n\nconst fsGLSL = `#version 300 es\nprecision highp float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n    outColor = v_color;\n}\n`;\n\n\nconst vertexShader = gl.createShader(gl.VERTEX_SHADER);\ngl.shaderSource(vertexShader, vsGLSL);\ngl.compileShader(vertexShader);\n\nif (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {\n    throw new Error(gl.getShaderInfoLog(vertexShader))\n};\n\n\nconst fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);\ngl.shaderSource(fragmentShader, fsGLSL);\ngl.compileShader(fragmentShader);\n\nif (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {\n    throw new Error(gl.getShaderInfoLog(fragmentShader))\n};\n\n\nconst prg = gl.createProgram();\ngl.attachShader(prg, vertexShader);\ngl.attachShader(prg, fragmentShader);\ngl.linkProgram(prg);\n\nif (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {\n    throw new Error(gl.getProgramInfoLog(prg))\n};\n\n\n\n// NOTE! These are only here to unclutter the diagram.\n// It is safe to detach and delete shaders once\n// a program is linked though it is arguably not common.\n// and I usually don't do it.\ngl.detachShader(prg, vertexShader);\ngl.deleteShader(vertexShader);\ngl.detachShader(prg, fragmentShader);\ngl.deleteShader(fragmentShader);\n\n\nconst positionLoc = gl.getAttribLocation(prg, 'position');\nconst colorLoc = gl.getAttribLocation(prg, 'color');\n\n\nconst triangleVAO = gl.createVertexArray();\n\ngl.bindVertexArray(triangleVAO);\n\n\n// in clip space\nconst vertexPositions = new Float32Array([\n    0, 0.7,\n    0.5, -0.7,\n    -0.5, -0.7,\n]);\n\n\nconst positionBuffer = gl.createBuffer();\n\ngl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);\n\ngl.bufferData(gl.ARRAY_BUFFER, vertexPositions, gl.STATIC_DRAW);\n\n\nconst vertexColors = new Uint8Array([\n    255, 0, 0, 255,\n    0, 255, 0, 255,\n    0, 0, 255, 255,\n]);\n\n\nconst colorBuffer = gl.createBuffer();\n\ngl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);\n\ngl.bufferData(gl.ARRAY_BUFFER, vertexColors, gl.STATIC_DRAW);\n\n\ngl.enableVertexAttribArray(positionLoc);\n\ngl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);\n\ngl.vertexAttribPointer(\n    positionLoc,\n    2,            // 2 values per vertex shader iteration\n    gl.FLOAT,     // data is 32bit floats\n    false,        // don't normalize\n    0,            // stride (0 = auto)\n    0,            // offset into buffer\n);\n\n\ngl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);\n\ngl.enableVertexAttribArray(colorLoc);\n\ngl.vertexAttribPointer(\n    colorLoc,\n    4,                // 4 values per vertex shader iteration\n    gl.UNSIGNED_BYTE, // data is 8bit unsigned bytes\n    true,             // do normalize\n    0,                // stride (0 = auto)\n    0,                // offset into buffer\n);\n\n\ngl.useProgram(prg);\n\n\n// compute 3 vertices for 1 triangle\ngl.drawArrays(gl.TRIANGLES, 0, 3);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;