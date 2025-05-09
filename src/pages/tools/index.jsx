import "./tools.scss"
import { useState } from "react";
function Tools(params) {
  const [alist, setAlist] = useState([
    {
      title: {
        t: "开发工具",
        desc: "集成开发环境推荐",
      },
      child: [
        {
          src: "static/images/icon/vscode.svg",
          url: "https://code.visualstudio.com/",
          title: "VSCode",
          desc: "跨平台免费源代码编辑器",
        },
        {
          src: "static/images/icon/vs.svg",
          url: "https://visualstudio.microsoft.com/zh-hans/",
          title: "Visual Studio",
          desc: "C C++ C#代码编辑器",
        },
        {
          src: "static/images/icon/idea.svg",
          url: "https://www.jetbrains.com/zh-cn/idea/",
          title: "IDEA",
          desc: "Java代码编辑器",
        },
        {
          src: "static/images/icon/Pycharm.svg",
          url: "https://www.jetbrains.com/zh-cn/pycharm/",
          title: "PyCharm",
          desc: "python代码编辑器",
        },
        {
          src: "static/images/icon/weixin.jpg",
          url: "https://mp.weixin.qq.com/",
          title: "微信开发者工具",
          desc: "微信小程序开发集成工具",
        },
      ],
    },
    {
      title: {
        t: "浏览器",
        desc: "浏览器推荐",
      },
      child: [
        {
          src: "static/images/icon/chrome.svg",
          url: "https://www.google.cn/intl/zh-CN/chrome/",
          title: "Chrome",
          desc: "Google开发的网页浏览器",
        },
        {
          src: "static/images/icon/Edge.svg",
          url: "https://www.microsoft.com/zh-cn/edge",
          title: "Edge",
          desc: "Microsoft开发的网页浏览器",
        },
        {
          src: "static/images/icon/safari.jpg",
          url: "https://www.apple.com.cn/safari/",
          title: "Safari",
          desc: "IOS系统唯一指定浏览器",
        },
      ],
    },
    {
      title: {
        t: "JavaScript框架",
        desc: "用于构建用户界面的JS框架",
      },
      child: [
        {
          src: "https://cn.vuejs.org/logo.svg",
          url: "https://cn.vuejs.org",
          title: "Vue",
          desc: "渐进式的JavaScript框架",
        },
        {
          src: "static/images/icon/nuxt.jpg",
          url: "https://www.nuxtjs.cn/",
          title: "Nuxt",
          desc: "轻量级SSR应用框架",
        },
        {
          src: "https://react.docschina.org/favicon.ico",
          url: "https://react.docschina.org",
          title: "React",
          desc: "优秀的Web开发框架",
        },
        {
          src: "static/images/icon/jq.ico",
          url: "https://jquery.com/",
          title: "jQuery",
          desc: "快速、简洁的JavaScript框架",
        },
      ],
    },
    {
      title: {
        t: "UI组件库",
        desc: "网站快速成型工具",
      },
      child: [
        {
          src: "https://element.eleme.cn/favicon.ico",
          url: "https://element.eleme.cn/#/zh-CN/component/installation",
          title: "Element",
          desc: "我最常用的VueUI组件库",
        },
        {
          src: "https://aliyuncdn.antdv.com/favicon.ico",
          url: "https://www.antdv.com/docs/vue/introduce-cn/",
          title: "Ant Design",
          desc: "蚂蚁开源后台UI设计库",
        },
        {
          src: "https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico",
          url: "https://arco.design/vue/docs/startg",
          title: "Arco Design",
          desc: "字节跳动出品的企业级设计系统",
        },
        {
          src: "https://v1.uviewui.com/favicon.ico",
          url: "https://v1.uviewui.com/",
          title: "uView",
          desc: "UniApp出品移动端UI组件库",
        },
      ],
    },
    {
      title: {
        t: "设计工具",
        desc: "网站辅助设计工具",
      },
      child: [
        {
          src: "static/images/icon/sass.png",
          url: "https://www.sass.hk/",
          title: "sass",
          desc: "css预处理语言",
        },
        {
          src: "static/images/icon/lanhu.jpg",
          url: "https://lanhuapp.com/",
          title: "蓝湖",
          desc: "高效的产品设计协作平台",
        },
        {
          src: "static/images/icon/shixu.jpg",
          url: "https://cubic-bezier.com/#.17,.67,.83,.67",
          title: "时序曲线",
          desc: "自定义动画加速度的时序曲线",
        },
      ],
    },
    {
      title: {
        t: "视图素材",
        desc: "视频、图片、图标获取与处理工具",
      },
      child: [
        {
          src: "static/images/icon/awesome.jpg",
          url: "https://fontawesome.com/",
          title: "FontAwesome",
          desc: "上千免费的网页字体图标",
        },
        {
          src: "https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png",
          url: "https://www.iconfont.cn/",
          title: "iconFont",
          desc: "svg转图标网站",
        },
        {
          src: "static/images/icon/panda.jpg",
          url: "https://tinypng.com/",
          title: "熊猫图片压缩",
          desc: "在线无损图像压缩网站",
        },
        {
          src: "static/images/icon/unsplash.jpg",
          url: "https://unsplash.com/",
          title: "unsplash",
          desc: "高质量摄影照片分享社区，可做免费图床",
        },
      ],
    },
  ]);
  return (
    <div className="tools">
      <div className="el-card tools__card">
        <div className="tools__card__bg">
          <div className="about__title">开发工具</div>
          <p style={{ fontSize: "2em", fontWeight: 700 }}>
            记录学习过程中使用过的开发工具
          </p>
          <p className="footer__music flex">
            <span>和阿洋一起高效学习 </span>
          </p>
        </div>
      </div>
      {alist.map((item) => (
        <div key={item.title.t}>
          <div className="tools__title">
            <div>{item.title.t}</div>
            <p>{item.title.desc}</p>
          </div>
          <div className="tools__flex flex__nocenter">
            {item.child.map((child, index) => (
              <a
                href={child.url}
                target="_blank"
                key={index}
                className="el-card tools__list"
              >
                <div className="tools__list__text">
                  <img src={child.src} alt="" />
                  <div>
                    <p className="tools__list__text__tit">
                      <span>{child.title}</span>
                    </p>
                    <div className="tools__list__text__tag flex">
                      <p>{child.desc}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Tools;
