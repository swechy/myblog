import "./lucky.scss";
import React, { useState, useEffect } from "react";
import MyGiscus from "../../components/giscus/index";
import { Input } from 'antd';
const { TextArea } = Input;
function Lucky(params) {
  useEffect(() => {
    var numberElement = document.getElementById("number");
    var interval;
    var speed = 10;
    var num = 0;
    function start() {
      speed = 10;
      clearInterval(interval);
      interval = setInterval(scrollNumber, speed);
    }
    function scrollNumber() {
      num++;
      if (num === 10) {
        stop();
      }
      numberElement.innerText = Math.floor(Math.random() * 12) + 1;
    }
    function stop() {
      num = 0;
      speed += 20;
      console.log(speed);
      if (speed === 150) {
        clearInterval(interval);
        return;
      }
      clearInterval(interval);
      interval = setInterval(scrollNumber, speed);
    }
    document.addEventListener("keydown", function (event) {
      if (event.keyCode === 13) {
        start();
      }
    });
    let width = document.getElementById("Lucky").offsetWidth;
    document.getElementById("Lucky").style.height = (width / 1.8) + "px";
    window.onresize = function () {
      let width = document.getElementById("Lucky").offsetWidth;
      document.getElementById("Lucky").style.height = (width / 1.8) + "px";
    };
  }, []);
  return (
    <div>
      <div id="Lucky" className="Lucky">
        <div id="number">按ENTER键开始</div>
        <div className="shuoming">共12层楼</div>
      </div>
      <TextArea placeholder="请在此处输入观众列表" rows={6} />
      <div className="comment__box">
        <i className="fas fa-message fa-fw"></i> 评论
      </div>
      <div id="tcomment">
        <MyGiscus />
      </div>
    </div>
  );
}
export default Lucky;
