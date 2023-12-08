import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry.js'

// Setting up the scene, camera, and renderer
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 500)
camera.position.set(0, 0, 100)
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth/1.5, window.innerHeight/1.5, false)
document.body.appendChild(renderer.domElement)


 //Creating Line Material
 const material = new THREE.LineBasicMaterial({color: 0x0000ff})

//Creating line Geometry
const points = []
points.push(new THREE.Vector3(-10, 0, 0))
points.push(new THREE.Vector3(0, 10, 0))
points.push(new THREE.Vector3(10, 0, 0))

const geometry = new THREE.BufferGeometry().setFromPoints(points)

//Creating line from material and geometry
const line = new THREE.Line(geometry, material)

scene.add(line)
renderer.render(scene, camera)