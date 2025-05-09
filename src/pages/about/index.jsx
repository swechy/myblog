import "./about.scss";
import MyGiscus from "../../components/giscus/index";
function About() {
  return (
    <div className="page">
      <div className="about__user">
        <div className="avatar-box">
          <div className="avatar-left">
            <span className="author-tag">🤖️ 数码科技爱好者</span>
            <span className="author-tag">🔍 分享与热心帮助</span>
            <span className="author-tag">🏠 智能家居小能手</span>
            <span className="author-tag">🔨 项目开发一条龙</span>
          </div>
          <div className="avatar">
            <img src="static/images/logo.jpg" />
          </div>
          <div className="avatar-right">
            <span className="author-tag">专修架构与设计 🤝</span>
            <span className="author-tag">脚踏实地行动派 🏃</span>
            <span className="author-tag">团队小组发动机 🧱</span>
            <span className="author-tag">合作共赢与沟通 💦</span>
          </div>
        </div>
        <p>关于本站</p>
      </div>
      <div className="flex__list flex flex__nocenter">
        <div className="m-margin flex__start" style={{ width: "59%" }}>
          <div className="el-card about__card">
            <div className="user__card__name">
              <span style={{ fontSize: "0.8em" }}>🎉 你好，很高兴认识你</span>
              <br />
              <div
                style={{
                  margin: "0.6rem 0",
                  fontSize: "2.5em",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                我是 洋记严选
              </div>
              一名项目经理、程序员、数码博主
            </div>
          </div>
        </div>
        <div className="flex__start" style={{ width: "39%" }}>
          <div className="m-about flex__start el-card no-bg">
            <div className="">
              <div className="about__title">追求</div>
              <p>
                不执着于
                <span
                  className="text__bg"
                  style={{
                    backgroundImage:
                      "linear-gradient(45deg,#0ecffe 50%, #07a6f1)",
                  }}
                >
                  胜负
                </span>
                <br />
                不纠结于
                <span
                  className="text__bg"
                  style={{
                    backgroundImage:
                      "linear-gradient(45deg, #fa7671 50%, #f45f7f )",
                  }}
                >
                  烦恼
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex__list flex flex__nocenter">
        <div className="m-margin flex__start m-about" style={{ width: "39%" }}>
          <div className="flex__start el-card no-bg xingge__card">
            <div style={{ width: "100%" }}>
              <div className="about__title">性格</div>
              <div className="flex flex__nocenter">
                <p>
                  建筑师
                  <br />
                  <span>INTJ-A</span>
                </p>
                <img src="static/images/xingge.png" alt="" />
              </div>
              <span>
                在
                <a
                  href="https://www.16personalities.com/"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  16personalities
                </a>
                了解更多关于
                <a
                  href="https://www.16personalities.com/ch/intj-%E4%BA%BA%E6%A0%BC"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  建筑师
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="flex__start" style={{ width: "59%" }}>
          <div className="flex__list el-card location__card">
            <div className="location__card__img">
              <div className="location__card__text">
                <span style={{ paddingLeft: "2.5rem" }}>
                  所在地 <b>中国，浙江，杭州</b>
                </span>
              </div>
            </div>
          </div>
          <div className="el-card flex zhiye__card">
            <div style={{ color: "#0ecffe" }}>1997</div>
            <div style={{ color: "#c69043" }}>计算机科学与技术</div>
            <div style={{ color: "#b04fe6" }}>项目 / 前端</div>
          </div>
        </div>
      </div>

      <div className="flex__list flex flex__nocenter">
        <div className="m-margin flex__start" style={{ width: "39%" }}>
          <div className="m-about flex__start el-card no-bg">
            <div>
              <div className="about__title">座右铭</div>
              <p>
                <span style={{ opacity: 0.6 }}>叩首问路，</span>
                <br />
                <span style={{ opacity: 0.8 }}>码梦为生。</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex__start" style={{ width: "59%" }}>
          <div className="m-about flex__start el-card no-bg aihao__card">
            <div className="about__title">爱好</div>
            <div style={{ width: "100%" }} className="flex">
              <p>
                <span style={{ opacity: 0.6 }}>足球 汽车</span>
                <br />
                <span style={{ opacity: 0.8 }}>动漫 电子游戏 特摄电影</span>
              </p>
              <i className="fa-solid fa-icons"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="flex__list flex flex__nocenter">
        <div className="m-margin flex__start" style={{ width: "59%" }}>
          <div className="el-card game__card">
            <video
              loop="loop"
              preload="auto"
              muted="muted"
              autoPlay="autoplay"
              playsinline="true"
              webkit-playsinline="true"
              x-webkit-airplay="true"
              x5-video-player-type="h5-page"
              x5-video-orientation="h5"
              x5-video-player-fullscreen="true"
              x5-video-ignore-metadata="true"
            >
              <source
                src="/static/images/heishenhua.mp4"
                type="video/mp4"
              />
              您的浏览器不支持本视频播放，请尝试换一个浏览器或升级到最新版本
            </video>
            <div className="no-bg">
              <div className="about__title">爱好游戏</div>
              <p>黑神话：悟空</p>
              <span> 平台：steam </span>
            </div>
          </div>
        </div>
        <div className="flex__start" style={{ width: "39%" }}>
          <div
            className="el-card game__card" 
            style={{
              backgroundImage:
                "url(" + require("../../assets/images/cat.webp") + ")",
            }}
          >
            <div className="no-bg">
              <div className="about__title">爱好游戏</div>
              <p>英雄联盟</p>
              <span> 区服: 比尔吉沃特 </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex__list flex flex__nocenter">
        <div className="m-margin flex__start" style={{ width: "49%" }}>
          <div
            className="el-card game__card"
            style={{
              backgroundImage:
                "url(" + require("../../assets/images/shuma.jpg") + ")",
            }}
          >
            <div className="no-bg">
              <div className="about__title">关注偏好</div>
              <p>数码产品</p>
            </div>
          </div>
        </div>
        <div className="flex__start" style={{ width: "49%" }}>
          <div
            className="el-card game__card"
            style={{
              backgroundImage:
                "url(" + require("../../assets/images/music.jpg") + ")",
            }}
          >
            <div className="no-bg">
              <div className="about__title">音乐偏好</div>
              <p>ACG，民谣，流行</p>
              <p className="footer__music flex">
                <span style={{ fontSize: "0.5em" }}>
                  {" "}
                  和阿洋一起欣赏更多音乐{" "}
                </span>
                <a
                  href="https://music.163.com/#/user?id=338860464"
                  target="_blank"
                >
                  <i className="fa-solid fa-rocket"></i> 立即前往
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="el-card author-content-item">
        <div className="about__title">心路历程</div>
        <h1>记录热爱，分享成长</h1>
        <p>
          计划创建这个站的时候，我内心期盼的就是能拥有一处属于自己可以
          <b>汇聚知识、汇聚热爱</b>
          的地方。同他人交流分享，会让这些知识与热爱进一步凝聚和升华，同时如果能够帮助到更多的人，那一定是一件更棒的事情。
        </p>
        <p>
          如今在这个网站上，终于能把自己在数码产品使用过程中的心得、对不同产品的独特见解，以及日常学习开发代码时的困难与突破、成长与感悟，毫无保留地分享出来。
        </p>
        <p>
          与其他单纯聚焦数码或纯技术的博客不同，这里将是二者融合的独特天地。既有
          <b>各类数码产品的评测、使用技巧</b>，又有<b>代码开发的经验干货</b>。
        </p>
        <p>
          我希望通过这个博客，和志同道合的朋友交流互动，在<b>分享中共同进步</b>
          ，留下一段段关于热爱与成长的美好回忆 。
        </p>
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
export default About;
