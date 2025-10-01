//
// 応用プログラミング 課題３．１
//
"use strict"; // 厳格モード

import * as THREE from 'three'

// ３Ｄページ作成関数の定義
function init() {
  // シーン作成
  const scene = new THREE.Scene();

  // 座標軸の設定
  const axes = new THREE.AxesHelper(18);
  scene.add(axes);

  /* 平面*/
  const planeGeometry = new THREE.PlaneGeometry(32, 16);//平面の設定この場合、32*16
  const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x606060});//色設定
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);//ここで設定したものを保存
  plane.rotation.x = -0.5 * Math.PI;
  scene.add(plane);//今までの設定をもとにここで追加 new T
  /*箱１*/

  const BoxGeometry = new THREE.BoxGeometry(8, 8, 8);//平面の設定こ場合、32*16
  const BoxMaterial = new THREE.MeshLambertMaterial({ color: 0x008060});//色設定
  const box = new THREE.Mesh(BoxGeometry, BoxMaterial);//ここで設定したものを保存
  box.position.y = 4;
  scene.add(box);//今までの設定をもとにここで追加

  /*箱2*/

  const BoxGeometry2 = new THREE.BoxGeometry(8, 4, 2);//平面の設定こ場合、32*16
  const BoxMaterial2 = new THREE.MeshLambertMaterial({ color: 0xFF8000});//色設定
  const box2 = new THREE.Mesh(BoxGeometry2, BoxMaterial2);//ここで設定したものを保存
  box2.position.y = 3;
  box2.position.x = 10;
  scene.add(box2);//今までの設定をもとにここで追加

   /*箱3*/

   const BoxGeometry3 = new THREE.BoxGeometry(4, 4, 2);//平面の設定こ場合、32*16
   const BoxMaterial3 = new THREE.MeshLambertMaterial({ color: 0xF7AD00});//色設定
   const box3 = new THREE.Mesh(BoxGeometry3, BoxMaterial3);//ここで設定したものを保存
   box3.position.y = 6;
   box3.position.x = 8;
   scene.add(box3);//今までの設定をもとにここで追加

  //光源設定
  
  const spotLight = new THREE.SpotLight(0xffffff, 1000);
  spotLight.position.set(24,16,8);
  scene.add(spotLight);
  
  // カメラの設定
  const camera = new THREE.PerspectiveCamera(
    60, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.x = 35;
  camera.position.y = 30;
  camera.position.z = 0;
  camera.lookAt(0, 4, 0);

  // レンダラの設定
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0x808080 );
  document.getElementById("WebGL-output")
    .appendChild(renderer.domElement);

  // 描画
  renderer.render(scene, camera);
}

document.onload = init();
