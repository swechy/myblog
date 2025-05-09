import "./project.scss";
import { marked } from "marked";
import { getSu7 } from "../../api/project/project.js";

// 引入three.js
import * as THREE from "three";
// 导入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useState, useEffect } from "react";
function Project(params) {
  const [height, setHeight] = useState("0px");
  const [map, setMap] = useState({
    x: 3.655306397100446,
    y: 2.457323670571129,
    z: -2.955764450742779,
  });
  const [key, setKey] = useState(0);
  const [color2, setColor2] = useState("#d9cee4");
  const [highlightedCode, setHighlightedCode] = useState("");
  const getCode = () => {
    if (height === "0px") {
      setHeight(
        document.getElementById("languagecode").offsetHeight + 10 + "px"
      );
    } else {
      setHeight("0px");
    }
  };
  const getThreeJs = async (color) => {
    let scene, renderer, camera, controls;
    // 创建场景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x808080);
    scene.fog = new THREE.Fog(0x808080, 10, 15);

    // 创建相机
    camera = new THREE.PerspectiveCamera(30, 2 / 1, 0.1, 1000);
    camera.position.set(5.03, 2.68, -4.48);

    // 创建渲染器
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    //设置设备像素比。通常用于避免HiDPI设备上绘图模糊
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    // 获取容器元素
    const box = document.getElementById("su7box");
    //设置渲染出来的画布范围
    renderer.setSize(box.clientWidth, box.clientWidth / 2);
    // 将渲染结果添加到目标元素
    box.appendChild(renderer.domElement);
    renderer.render(scene, camera);

    // 创建控制器
    controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = (0.9 * Math.PI) / 2;
    controls.enableZoom = false;
    controls.zoomSpeed = 1;

    // 创建平行光线,为车辆打出阴影
    let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-4, 8, 4);
    directionalLight.castShadow = true; // 开启阴影投射
    directionalLight.shadow.radius = 5;
    directionalLight.shadow.mapSize.width = 1024; // 阴影贴图宽度
    directionalLight.shadow.mapSize.height = 1024; // 阴影贴图高度

    // 创建环境光线
    let hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x808080, 3);
    hemisphereLight.position.set(5, 8, 0);
    scene.add(directionalLight);
    scene.add(hemisphereLight);

    // 创建地面效果
    const floorGeometry = new THREE.PlaneGeometry(100, 100);
    const floormaterial = new THREE.MeshPhysicalMaterial({
      side: THREE.DoubleSide,
      color: 0x808080,
      metalness: 0,
      roughness: 0.1,
    });
    const mesh = new THREE.Mesh(floorGeometry, floormaterial);
    mesh.receiveShadow = true;
    mesh.rotation.x = Math.PI / 2;
    scene.add(mesh);

    // 声明渲染函数
    function animate() {
      controls.update(); // 更新控制器
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    // 加载车辆模型
    const loader = new GLTFLoader();
    const protocol = window.location.protocol; // 协议
    const host = window.location.host; // 主机
    const baseURL = protocol + "//" + host + "/";
    loader.load(baseURL + "static/gltf/scene.gltf", (gltf1) => {
      let model = gltf1.scene;
      gltf1.scene.traverse(function (child) {
        if (child.isMesh) {
          child.material.metalness = 0.8;
          child.material.roughness = 0.01;
          child.castShadow = true;
        }
        const bodyMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xd9cee4,
          metalness: 0.8,
          roughness: 0.01,
          clearcoat: 1.0,
          clearcoatRoughness: 0.03,
        });
        if (
          child.isMesh &&
          (child.name.indexOf("Object_52") > -1 || // 车门
            child.name.indexOf("Object_45") > -1 || // 车门
            child.name.indexOf("Object_39") > -1 || // 车门
            child.name.indexOf("Object_32") > -1 || // 车门
            child.name.indexOf("Object_18") > -1) // 车身
        ) {
          child.material = bodyMaterial;
        }
      });
      model.position.y = 0.03;
      scene.add(model);
      animate();
    });
  };
  const rgbToHex = (rgb) => {
    const values = rgb.match(/\d+/g); // 提取RGB值
    const hex = values.reduce((hexValue, currentValue) => {
      const hexString = Number(currentValue).toString(16); // 将每个RGB值转换成16进制字符串
      const paddedHexString = hexString.padStart(2, "0"); // 在不满两位的字符串前补0
      return hexValue + paddedHexString; // 拼接每个RGB值对应的16进制字符串
    }, "");
    return `#${hex.toUpperCase()}`; // 返回完整的HEX颜色代码（需将字母转换为大写）
  };
  // const changecolor = (color) => {
  //   color = parseInt(rgbToHex(color).slice(1), 16);
  //   console.log(color);
  //   model.traverse(function (child) {
  //     //  && child.name === 'Object_32'
  //     if (
  //       child.isMesh &&
  //       (child.name.indexOf("Object_52") > -1 || // men
  //         child.name.indexOf("Object_45") > -1 || // men
  //         child.name.indexOf("Object_39") > -1 || // men
  //         child.name.indexOf("Object_32") > -1 || // men
  //         child.name.indexOf("Object_18") > -1) && // shen
  //       color
  //     ) {
  //       console.log(child.name);
  //       // 克隆材质以防止共享材质导致的问题
  //       let clonedMaterial = child.material.clone();
  //       clonedMaterial.color.setHex(color);
  //       // 将修改后的材质重新赋给Mesh
  //       child.material = clonedMaterial;
  //     }
  //   });
  // }
  useEffect(() => {
    /* eslint-disable */
    Prism.highlightAll();
    if (!document.getElementsByTagName('canvas').length) {
      getThreeJs();
    }
    getSu7().then((res) => {
      let html = marked.parse(res).replace(/<pre([^>]*)>/g, '<pre$1 class="line-numbers">');
      setHighlightedCode(html)
    });
  }, []);
  useEffect(() => {
    /* eslint-disable */
    Prism.highlightAll()
  }, [highlightedCode]);
  return (
    <div className="su7">
      <div className="box" id="su7box">
        <div className="su7-logo">
          XIAOMI SU7
          <p>人车合一 我心澎湃</p>
        </div>
        {/* <el-color-picker
        className="picker"
        color-format="hex"
        @active-change="changecolor"
        v-model="color2"
      ></el-color-picker> */}
      </div>
      <div className="su7-code-pre" style={{ height: height }}>
        <div id="languagecode" dangerouslySetInnerHTML={{ __html: highlightedCode }}>
        </div>
      </div>
      <div className="su7-code" onClick={getCode}>
        {height === "0px" && (
          <span>
            <i className="el-icon-caret-bottom"></i> 显示代码
          </span>
        )}
        {height !== "0px" && (
          <span>
            <i className="el-icon-caret-top"></i> 隐藏代码{" "}
          </span>
        )}
      </div>
    </div>
  );
}
export default Project;
