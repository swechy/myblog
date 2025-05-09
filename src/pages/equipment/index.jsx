import "./equipment.scss";
import { useState } from "react";
import MyGiscus from "../../components/giscus/index";
function Equipment() {
  const [List1, setList1] = useState([
    {
      name: "ROG 幻14",
      type: "R9-8945HS / RTX4060 / 32GB / 1TB",
      desc: "性能强劲、屏幕显示效果好，用来写代码非常爽。",
      url: "static/images/zb/h14.png"
    },
    {
      name: "iPhone 15",
      type: "黄色 / 128G",
      desc: "第一代采用Type-C充电口的iPhone，兼容性强。",
      url: "static/images/zb/iphone15.png"
    },
    {
      name: "Apple Watch Series 9",
      type: "银色",
      desc: "搭载全新的S9 SiP芯片，能够实时监测用户的心率、血氧饱和度、手腕温度、睡眠质量。",
      url: "static/images/zb/watch9.png"
    },
    {
      name: "酷比魔方 iWork GT",
      type: "i3-1115G4 / Windows11",
      desc: "win平板，工作需要购入，偶尔拿来看电视、玩小游戏。",
      url: "static/images/zb/iworkgt.png"
    },
    {
      name: "Windows组装台式机",
      type: "i5-12400F / RTX4060",
      desc: "拿来做视频剪辑，偶尔玩玩游戏。",
      url: "static/images/zb/windows.png"
    },
    {
      name: "Nintendo Switch",
      type: "续航增强版",
      desc: "任天堂游戏机，喜欢玩宝可梦和塞尔达。",
      url: "static/images/zb/switch.png"
    }
  ]);
  const [List2, setList2] = useState([
    {
      name: "ROG 月刃无线",
      type: "三模 / 白色",
      desc: "延迟低，响应迅速，中小手握感舒适。",
      url: "static/images/zb/yueren.png"
    },
    {
      name: "VGN V98",
      type: "三模 / 白色 / 努巴尼轴",
      desc: "98配列，支持三模连接，全键热插拔，Gasket软弹结构。",
      url: "static/images/zb/vgn98.png"
    },
    {
      name: "盖世小鸡 九尾狐",
      type: "三模 / 黑色",
      desc: "对称设计，扩展性强，支持三模连接，手感很好。",
      url: "static/images/zb/jiuweihu.png"
    },
    {
      name: "AirPods",
      type: "第四代",
      desc: "佩戴舒适，音质还可以，用苹果生态的非常推荐。",
      url: "static/images/zb/airpods4.png"
    },
    {
      name: "iGame DNA 游戏耳机",
      type: "有线连接 / 7.1声道",
      desc: "外观炫酷，音质还不错，游戏模式打游戏很爽。",
      url: "static/images/zb/igamedna.png"
    },
    {
      name: "固态移动硬盘套装",
      type: "铠侠RC20 / 1TBSSD ITGZ雷电硬盘盒 / RTL9210",
      desc: "TLC颗粒性价比高，作为移动硬盘使用，方便携带。",
      url: "static/images/zb/rc20.png"
    },
  ]);
  const [List3, setList3] = useState([
    {
      name: "ROG 侠双肩背包",
      type: "炫彩电域文 / TPU防水面料",
      desc: "败家之眼，无需多言。",
      url: "static/images/zb/rogxia.png"
    },
    {
      name: "知麻Z1 mini",
      type: "投影仪 / 600ANSI",
      desc: "支持梯形校正，清晰度还不错。",
      url: "static/images/zb/zhimaz1.png"
    },
    {
      name: "米家电饭煲N1",
      type: "3L",
      desc: "不溢锅，蒸米饭好吃，还能煲汤，蒸包子。",
      url: "static/images/zb/xiaomin1.png"
    },
  ]);
  return (
    <div className="moment">
      <div className="el-card moment__card">
        <div className="moment__card__bg">
          <div className="about__title">好物分享</div>
          <p style={{ fontSize: "2em", fontWeight: 700 }}>实用装备推荐</p>
          <p className="footer__music flex">
            <span>和阿洋一起享受科技带来的乐趣</span>
          </p>
        </div>
      </div>
      <div className="tools__title">
        <div>主机设备</div>
        <p>提升自己生产效率的硬件设备</p>
      </div>
      <div className="equipment-item-content">
        {List1.map((item) => (
          <div key={item.name} className="equipment-item-content-item">
            <div className="equipment-item-content-item-cover">
              <img
                className="equipment-item-content-item-image entered loaded"
                src={item.url}
              />
            </div>
            <div className="equipment-item-content-item-info">
              <div className="equipment-item-content-item-name">
                {item.name}
              </div>
              <div className="equipment-item-content-item-specification">
                {item.type}
              </div>
              <div className="equipment-item-content-item-description">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="tools__title">
        <div>数码外设</div>
        <p>各种实用的数码周边</p>
      </div>
      <div className="equipment-item-content">
        {List2.map((item) => (
          <div key={item.name} className="equipment-item-content-item">
            <div className="equipment-item-content-item-cover">
              <img
                className="equipment-item-content-item-image entered loaded"
                src={item.url}
              />
            </div>
            <div className="equipment-item-content-item-info">
              <div className="equipment-item-content-item-name">
                {item.name}
              </div>
              <div className="equipment-item-content-item-specification">
                {item.type}
              </div>
              <div className="equipment-item-content-item-description">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="tools__title">
        <div>生活家居</div>
        <p>日常用的一些生活好物</p>
      </div>
      <div className="equipment-item-content">
        {List3.map((item) => (
          <div key={item.name} className="equipment-item-content-item">
            <div className="equipment-item-content-item-cover">
              <img
                className="equipment-item-content-item-image entered loaded"
                src={item.url}
              />
            </div>
            <div className="equipment-item-content-item-info">
              <div className="equipment-item-content-item-name">
                {item.name}
              </div>
              <div className="equipment-item-content-item-specification">
                {item.type}
              </div>
              <div className="equipment-item-content-item-description">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="comment__box">
        <i className="fas fa-message fa-fw"></i> 评论
      </div>
      <div id="tcomment">
        <MyGiscus />
      </div>
    </div>
  );
}
export default Equipment;
