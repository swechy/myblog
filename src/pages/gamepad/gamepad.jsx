import "./gamepad.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
function GamePad() {
  let inputStartTime;
  const [active, setActive] = useState(-1);
  let gpindex = 0;
  let gamepad = '';
  const AnimationFrameid = useRef(null);
  let shouldAnimate = false;
  const selectGamepad = (selectedDiv, i) => {
    setActive(i);
    // const gamepads = document.querySelectorAll('[id^="gamepad"]');
    // gamepads.forEach((gamepad) => {
    //   gamepad.classList.remove("selected");
    // });
    // selectedDiv.classList.add("selected");
    gpindex = i;
    gamepad = navigator.getGamepads()[i];
  };
  useEffect(() => {
    // 手动检查是否有已连接的手柄
    const checkConnectedGamepads = () => {
      const gamepads = navigator.getGamepads();
      for (let i = 0; i < gamepads.length; i++) {
        if (gamepads[i]) {
          document.getElementById("gamepad" + i).innerText = gamepads[i].id;
          setActive(i);
          gpindex = i;
          gamepad = navigator.getGamepads()[i];
          shouldAnimate = true;
          AnimationFrameid.current = requestAnimationFrame(checkGamepadInput);
        }
      }
    };
    checkConnectedGamepads();
    // 监听手柄连接事件
    window.addEventListener("gamepadconnected", (event) => {
      const gamepads = navigator.getGamepads();
      console.log(gamepads);
      for (let i = 0; i < gamepads.length; i++) {
        if (gamepads[i]) {
          document.getElementById("gamepad" + i).innerText = gamepads[i].id;
          // document.getElementById("gamepad" + i).classList.toggle("selected");
          setActive(i);
          gpindex = i;
          console.log(active, gpindex)
        }
      }
      gamepad = event.gamepad;
      console.log(gamepad);
      // const statusElement = document.getElementById("status");
      // statusElement.textContent = `手柄已连接: ${gamepad.id}`;
      shouldAnimate = true;
      AnimationFrameid.current = requestAnimationFrame(checkGamepadInput);
    });

    // 监听手柄断开连接事件
    window.addEventListener("gamepaddisconnected", (event) => {
      gamepad = null;
      const gamepads = navigator.getGamepads();
      console.log(gamepads);
      for (let i = 0; i < gamepads.length; i++) {
        if (gamepads[i]) {
          document.getElementById("gamepad" + i).innerText = gamepads[i].id;
          // document.getElementById("gamepad" + i).classList.toggle("selected");
          setActive(i);
          gpindex = i;
        } else {
          document.getElementById("gamepad" + i).innerHTML =
            "手柄" + (i + 1) + "<br/>未连接";
          // document.getElementById("gamepad" + i).classList.toggle("selected");
          setActive(-1);
        }
      }
      gamepad = event.gamepad;
      // const statusElement = document.getElementById("status");
      // statusElement.textContent = "手柄已断开连接，请重新连接。";
    });
    var a = [];
    function calculateAverage(arr) {
      if (arr.length === 0) {
        return 0;
      }
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum / arr.length;
    }
    function toPercentage(decimal) {
      return (decimal * 100).toFixed(2) + '%'; // 将小数乘以100，并保留两位小数，再加上百分号
    }
    // 检查手柄输入
    let axess = [];
    function checkGamepadInput() {
      if (!shouldAnimate) return
      try {
        if (gamepad) {
          const gamepads = navigator.getGamepads();
          console.log(gpindex)
          gamepad = gamepads[gpindex];
          // if (JSON.stringify(axess) !== JSON.stringify(gamepad.axes)) {
          axess = gamepad.axes;
          let lStickAmt = Math.max(
            0,
            1.2 *
              Math.sqrt(
                Math.pow(gamepad.axes[0], 2) + Math.pow(gamepad.axes[1], 2)
              ) -
              0.2
          );
          let lightStroke = Math.max(
            0,
            1.2 *
              Math.sqrt(
                Math.pow(gamepad.axes[2], 2) + Math.pow(gamepad.axes[3], 2)
              ) -
              0.2
          );
          if (lStickAmt) {
            document
              .getElementById("LeftStick")
              .setAttribute("cx", 113 + 12 * gamepad.axes[0]);
            document
              .getElementById("LeftStick")
              .setAttribute("cy", 160 + 12 * gamepad.axes[1]);
            document
              .getElementById("LeftStick")
              .setAttribute("fill", "rgba(0, 106, 255, " + lStickAmt + ")");
          }
          if (lightStroke) {
            document
              .getElementById("RightStick")
              .setAttribute("cx", 278 + 12 * gamepad.axes[2]);
            document
              .getElementById("RightStick")
              .setAttribute("cy", 237 + 12 * gamepad.axes[3]);
            document
              .getElementById("RightStick")
              .setAttribute("fill", "rgba(0, 106, 255, " + lightStroke + ")");
          }
          // }
          for (let i = 0; i < gamepad.buttons.length; i++) {
            const button = gamepad.buttons[i];
            if (button.pressed) {
              switch (i) {
                case 0:
                  document
                    .getElementById("BBottom")
                    .setAttribute("fill", "rgba(0, 106, 255, 0.7)");
                  break;
                case 1:
                  document
                    .getElementById("BRight")
                    .setAttribute("fill", "rgba(0, 106, 255, 0.7)");
                  break;
                case 2:
                  document
                    .getElementById("BLeft")
                    .setAttribute("fill", "rgba(0, 106, 255, 0.7)");
                  break;
                case 3:
                  document
                    .getElementById("BTop")
                    .setAttribute("fill", "rgba(0, 106, 255, 0.7)");
                  break;
                case 4:
                  document
                    .getElementById("L1")
                    .setAttribute("fill", "rgba(0, 106, 255, 0.7)");
                  break;
                case 5:
                  document
                    .getElementById("R1")
                    .setAttribute("fill", "rgba(0, 106, 255, 0.7)");
                  break;
                case 6:
                  document
                    .getElementById("L2")
                    .setAttribute(
                      "fill",
                      "rgba(0, 106, 255, " + button.value + ")"
                    );
                  break;
                case 7:
                  document
                    .getElementById("R2")
                    .setAttribute(
                      "fill",
                      "rgba(0, 106, 255, " + button.value + ")"
                    );
                  break;
                case 8:
                  document
                    .getElementById("LMeta")
                    .setAttribute("fill", "rgba(0, 106, 255, 0.7)");
                  break;
                case 9:
                  document
                    .getElementById("RMeta")
                    .setAttribute("fill", "rgba(0, 106, 255, 0.7)");
                  break;
                case 10:
                  document
                    .getElementById("LeftStick")
                    .setAttribute("fill", "rgba(0, 106, 255, 0.7)");
                  break;
                case 11:
                  document
                    .getElementById("RightStick")
                    .setAttribute("fill", "rgba(0, 106, 255, 0.7)");
                  break;
                case 12:
                  document
                    .getElementById("DUp")
                    .setAttribute("fill", "rgba(0, 106, 255, 0.7)");
                  break;
                case 13:
                  document
                    .getElementById("DDown")
                    .setAttribute("fill", "rgba(0, 106, 255, 0.7)");
                  break;
                case 14:
                  document
                    .getElementById("DLeft")
                    .setAttribute("fill", "rgba(0, 106, 255, 0.7)");
                  break;
                case 15:
                  document
                    .getElementById("DRight")
                    .setAttribute("fill", "rgba(0, 106, 255, 0.7)");
                  break;
                default:
                  break;
              }
            }
          }

          setTimeout(() => {
            document
              .getElementById("BBottom")
              .setAttribute("fill", "rgba(0,0,0,0)");
            document
              .getElementById("BRight")
              .setAttribute("fill", "rgba(0,0,0,0)");
            document
              .getElementById("BLeft")
              .setAttribute("fill", "rgba(0,0,0,0)");
            document
              .getElementById("BTop")
              .setAttribute("fill", "rgba(0,0,0,0)");
            document.getElementById("L1").setAttribute("fill", "rgba(0,0,0,0)");
            document.getElementById("R1").setAttribute("fill", "rgba(0,0,0,0)");
            document.getElementById("L2").setAttribute("fill", "rgba(0,0,0,0)");
            document.getElementById("R2").setAttribute("fill", "rgba(0,0,0,0)");
            document
              .getElementById("LMeta")
              .setAttribute("fill", "rgba(0,0,0,0)");
            document
              .getElementById("RMeta")
              .setAttribute("fill", "rgba(0,0,0,0)");
            document
              .getElementById("DUp")
              .setAttribute("fill", "rgba(0,0,0,0)");
            document
              .getElementById("DDown")
              .setAttribute("fill", "rgba(0,0,0,0)");
            document
              .getElementById("DLeft")
              .setAttribute("fill", "rgba(0,0,0,0)");
            document
              .getElementById("DRight")
              .setAttribute("fill", "rgba(0,0,0,0)");
            document
              .getElementById("LeftStick")
              .setAttribute("fill", "rgba(0,0,0,0)");
            document
              .getElementById("RightStick")
              .setAttribute("fill", "rgba(0,0,0,0)");
            if (!lStickAmt) {
              document
                .getElementById("LeftStick")
                .setAttribute("cx", 113 + 12 * gamepad.axes[0]);
              document
                .getElementById("LeftStick")
                .setAttribute("cy", 160 + 12 * gamepad.axes[1]);
              document
                .getElementById("LeftStick")
                .setAttribute("fill", "rgba(0, 106, 255, " + 0 + ")");
            }
            if (!lightStroke) {
              document
                .getElementById("RightStick")
                .setAttribute("cx", 278 + 12 * gamepad.axes[2]);
              document
                .getElementById("RightStick")
                .setAttribute("cy", 237 + 12 * gamepad.axes[3]);
              document
                .getElementById("RightStick")
                .setAttribute("fill", "rgba(0, 106, 255, " + 0 + ")");
            }
          }, 1);
        }
        if (gamepad.vibrationActuator) {
          // 通常左扳机对应 buttons[6]，右扳机对应 buttons[7]
          const leftTriggerValue = gamepad.buttons[6].value;
          const rightTriggerValue = gamepad.buttons[7].value;
          document.getElementById("trigger-left").style.height = `${
            leftTriggerValue * 100
          }%`;
          document.getElementById("trigger-left").style.background =
            "rgba(0, 106, 255, " + leftTriggerValue + ")";
          document.getElementById("trigger-left-num").innerText = Math.round(
            leftTriggerValue * 255
          );
          document.getElementById("trigger-right").style.height = `${
            rightTriggerValue * 100
          }%`;
          document.getElementById("trigger-right").style.background =
            "rgba(0, 106, 255, " + rightTriggerValue + ")";
          document.getElementById("trigger-right-num").innerText = Math.round(
            rightTriggerValue * 255
          );
          document.getElementById('vibrate-right').innerText = toPercentage(rightTriggerValue)
          document.getElementById('vibrate-left').innerText = toPercentage(leftTriggerValue)
          gamepad.vibrationActuator
            .playEffect("dual-rumble", {
              startDelay: 0,
              duration: 50, // 震动持续时间
              weakMagnitude: rightTriggerValue,
              strongMagnitude: leftTriggerValue,
            })
            .catch((error) => {
              console.error("震动效果播放失败:", error);
            });
        }
        AnimationFrameid.current = requestAnimationFrame(checkGamepadInput);
      } catch (error) {
      }
    }
    return () => { // 组件卸载时清除动画帧
      shouldAnimate = false
      if (AnimationFrameid.current) {
        cancelAnimationFrame(AnimationFrameid.current);
      }
      // 移除事件监听器
      window.removeEventListener("gamepadconnected", () => {});
      window.removeEventListener("gamepaddisconnected", () => {});
      console.log('组件已卸载，定时器已清除');
    };
  }, []);
  return (
    <div className="gamepad">
      <div className="flex flex-jc">
        <div
          id="gamepad0"
          style={{
            marginRight: "20px",
            backgroundColor: active === 0 ? "rgba(0, 106, 255, 0.5)" : "#fff",
          }}
          className="p-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
          onClick={() => selectGamepad(this, 0)}
        >
          手柄 1<br />
          未连接
        </div>
        <div
          id="gamepad1"
          style={{
            marginRight: "20px",
            backgroundColor: active === 1 ? "rgba(0, 106, 255, 0.5)" : "#fff",
          }}
          className="p-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
          onClick={() => selectGamepad(this, 1)}
        >
          手柄 2<br />
          未连接
        </div>
        <div
          id="gamepad2"
          style={{
            marginRight: "20px",
            backgroundColor: active === 2 ? "rgba(0, 106, 255, 0.5)" : "#fff",
          }}
          className="p-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
          onClick={() => selectGamepad(this, 2)}
        >
          手柄 3<br />
          未连接
        </div>
        <div
          id="gamepad3"
          style={{
            backgroundColor: active === 3 ? "rgba(0, 106, 255, 0.5)" : "#fff",
          }}
          className="p-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
          onClick={() => selectGamepad(this, 3)}
        >
          手柄 4<br />
          未连接
        </div>
      </div>
      <div class="flex">
      <div class="vibrate">
        震动强度
        <p id="vibrate-left">0.00%</p>
      </div>
      <svg
        width="350"
        viewBox="0 0 441 383"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="XBox">
          <path
            id="LOutline"
            d="M220.5 294.5C220.5 294.5 195 294.5 150 294.5C105 294.5 81.5 378.5 49.5 378.5C17.5 378.5 4 363.9 4 317.5C4 271.1 43.5 165.5 55 137.5C66.5 109.5 95.5 92.0001 128 92.0001C154 92.0001 200.5 92.0001 220.5 92.0001"
            stroke="#333"
            strokeWidth="3"
            strokeOpacity="1"
          ></path>
          <path
            id="ROutline"
            d="M220 294.5C220 294.5 245.5 294.5 290.5 294.5C335.5 294.5 359 378.5 391 378.5C423 378.5 436.5 363.9 436.5 317.5C436.5 271.1 397 165.5 385.5 137.5C374 109.5 345 92.0001 312.5 92.0001C286.5 92.0001 240 92.0001 220 92.0001"
            stroke="#333"
            strokeWidth="3"
            strokeOpacity="1"
          ></path>
          <circle
            id="LStickOutline"
            cx="113"
            cy="160"
            r="37.5"
            stroke="#333"
            strokeOpacity="1"
            strokeWidth="3"
          ></circle>
          <circle
            id="LeftStick"
            cx="113.00018310826276"
            cy="159.99981689173723"
            r="28"
            fill="rgba(0,0,0,0)"
            stroke="rgba(0,0,0,1)"
            strokeWidth="3"
          ></circle>
          <circle
            id="RStickOutline"
            cx="278"
            cy="238"
            r="37.5"
            stroke="#333"
            strokeOpacity="1"
            strokeWidth="3"
          ></circle>
          <circle
            id="RightStick"
            cx="278.0001831082628"
            cy="237.99981689173723"
            r="28"
            fill="rgba(0,0,0,0)"
            stroke="rgba(0,0,0,1)"
            strokeWidth="3"
          ></circle>
          <circle
            id="DOutline"
            cx="166"
            cy="238"
            r="37.5"
            stroke="#333"
            strokeOpacity="1"
            strokeWidth="3"
          ></circle>
          <g>
            <path
              id="DUp"
              stroke="rgba(0,0,0,1)"
              strokeWidth="3"
              d="M177.669 222.335C180.793 219.21 180.816 213.997 176.868 212.014C176.327 211.743 175.776 211.491 175.215 211.258C172.182 210.002 168.931 209.355 165.648 209.355C162.365 209.355 159.114 210.002 156.081 211.258C155.521 211.491 154.969 211.743 154.429 212.014C150.48 213.997 150.503 219.21 153.627 222.335L159.991 228.698C163.116 231.823 168.181 231.823 171.305 228.698L177.669 222.335Z"
            ></path>
          </g>
          <g>
            <path
              id="DRight"
              stroke="rgba(0,0,0,1)"
              strokeWidth="3"
              d="M181.447 249.669C184.571 252.793 189.785 252.816 191.768 248.868C192.039 248.327 192.291 247.776 192.523 247.215C193.78 244.182 194.426 240.931 194.426 237.648C194.426 234.365 193.78 231.114 192.523 228.081C192.291 227.521 192.039 226.969 191.768 226.429C189.785 222.48 184.571 222.503 181.447 225.627L175.083 231.991C171.959 235.116 171.959 240.181 175.083 243.305L181.447 249.669Z"
            ></path>
          </g>
          <g>
            <path
              id="DDown"
              stroke="rgba(0,0,0,1)"
              strokeWidth="3"
              d="M154.113 253.447C150.989 256.571 150.966 261.785 154.914 263.767C155.455 264.039 156.006 264.291 156.566 264.523C159.6 265.78 162.85 266.426 166.134 266.426C169.417 266.426 172.667 265.78 175.701 264.523C176.261 264.291 176.812 264.039 177.353 263.767C181.301 261.785 181.279 256.571 178.154 253.447L171.79 247.083C168.666 243.959 163.601 243.959 160.477 247.083L154.113 253.447Z"
            ></path>
          </g>
          <g>
            <path
              id="DLeft"
              stroke="rgba(0,0,0,1)"
              strokeWidth="3"
              d="M150.335 226.113C147.21 222.989 141.997 222.966 140.014 226.914C139.743 227.455 139.491 228.006 139.258 228.566C138.002 231.6 137.355 234.85 137.355 238.134C137.355 241.417 138.002 244.667 139.258 247.701C139.491 248.261 139.743 248.812 140.014 249.353C141.997 253.301 147.21 253.279 150.335 250.154L156.698 243.79C159.823 240.666 159.823 235.601 156.698 232.477L150.335 226.113Z"
            ></path>
          </g>
          <g>
            <path
              id="BTop"
              strokeWidth="3"
              opacity="undefined"
              transform="rotate(90 329.081 140.331)"
              fill="#fff"
              stroke="rgba(0,0,0,1)"
              d="m329.08146,150.33176c-5.57089,0 -10.08331,-4.52112 -10.08331,-10.10275c0,-5.58163 4.51242,-9.89721 10.08331,-9.89721c5.57089,0 10.08331,4.31558 10.08331,9.89721c0,5.58163 -4.51242,10.10275 -10.08331,10.10275z"
            ></path>
          </g>
          <g>
            <path
              id="BRight"
              strokeWidth="3"
              opacity="undefined"
              transform="rotate(90 348.415 161.332)"
              fill="#fff"
              stroke="rgba(0, 0, 0,1)"
              d="m348.41497,171.33195c-5.57089,0 -10.08331,-4.52112 -10.08331,-10.10275c0,-5.58163 4.51242,-9.89721 10.08331,-9.89721c5.57089,0 10.08331,4.31558 10.08331,9.89721c0,5.58163 -4.51242,10.10275 -10.08331,10.10275z"
              data-v-d6ef606e=""
            ></path>
          </g>
          <g>
            <path
              id="BBottom"
              strokeWidth="3"
              opacity="undefined"
              transform="rotate(90 330.081 180.665)"
              fill="#fff"
              stroke="rgba(0, 0, 0,1)"
              d="m330.08147,190.66546c-5.57089,0 -10.08331,-4.52112 -10.08331,-10.10275c0,-5.58163 4.51242,-9.8972 10.08331,-9.8972c5.57089,0 10.08331,4.31557 10.08331,9.8972c0,5.58163 -4.51242,10.10275 -10.08331,10.10275z"
              data-v-d6ef606e=""
            ></path>
          </g>
          <g>
            <path
              id="BLeft"
              strokeWidth="3"
              opacity="undefined"
              transform="rotate(90 310.081 161.999)"
              fill="#fff"
              stroke="rgba(0, 0, 0,1)"
              d="m310.08129,171.99862c-5.57089,0 -10.08331,-4.52112 -10.08331,-10.10275c0,-5.58163 4.51242,-9.89721 10.08331,-9.89721c5.57089,0 10.08331,4.31558 10.08331,9.89721c0,5.58163 -4.51242,10.10275 -10.08331,10.10275z"
              data-v-d6ef606e=""
            ></path>
          </g>
          <g>
            <rect
              id="LMeta"
              width="30"
              height="13"
              x="175"
              y="152"
              r="10"
              fill="rgba(0,0,0,0)"
              stroke="rgba(0,0,0,1)"
              strokeWidth="3"
              rx="6.5"
            ></rect>
          </g>
          <g>
            <rect
              id="RMeta"
              width="30"
              height="13"
              x="240"
              y="152"
              r="10"
              fill="rgba(0,0,0,0)"
              stroke="rgba(0,0,0,1)"
              strokeWidth="3"
              rx="6.5"
            ></rect>
          </g>
          <rect
            id="L1"
            x="111.5"
            y="59.5"
            width="41"
            height="18"
            rx="6.5"
            fill="rgba(0,0,0,0)"
            stroke="rgba(0,0,0,1)"
            strokeWidth="3"
          ></rect>
          <rect
            id="R1"
            x="289.5"
            y="59.5"
            width="41"
            height="18"
            rx="6.5"
            fill="rgba(0,0,0,0)"
            stroke="rgba(0,0,0,1)"
            strokeWidth="3"
          ></rect>
          <path
            id="L2"
            d="M152.5 37C152.5 41.1421 149.142 44.5 145 44.5H132C127.858 44.5 124.5 41.1421 124.5 37V16.5C124.5 8.76801 130.768 2.5 138.5 2.5C146.232 2.5 152.5 8.76801 152.5 16.5V37Z"
            fill="rgba(0,0,0,0)"
            stroke="rgba(0,0,0,1)"
            strokeWidth="3"
          ></path>
          <path
            id="R2"
            d="M317.5 37C317.5 41.1421 314.142 44.5 310 44.5H297C292.858 44.5 289.5 41.1421 289.5 37V16.5C289.5 8.76801 295.768 2.5 303.5 2.5C311.232 2.5 317.5 8.76801 317.5 16.5V37Z"
            fill="rgba(0,0,0,0)"
            stroke="rgba(0,0,0,1)"
            strokeWidth="3"
          ></path>
        </g>
      </svg>
      <div class="vibrate">
        震动强度
        <p id="vibrate-right">0.00%</p>
      </div>
    </div>
      <div className="trigger">
        <div className="trigger-left">
          <div id="trigger-left"></div>
        </div>
        <div className="trigger-right">
          <div id="trigger-right"></div>
        </div>
      </div>
      <div className="trigger-num">
        <div id="trigger-left-num" className="trigger-left-num">
          0
        </div>
        <div id="trigger-right-num" className="trigger-right-num">
          0
        </div>
      </div>
    </div>
  );
}

export default GamePad;
