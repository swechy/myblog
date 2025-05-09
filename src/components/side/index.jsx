import "./side.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Side({ cats, tags, total, menu, article }) {
  if (!article) {
    article = [];
  }
  const navigate = useNavigate();
  console.log(cats, tags, total);
  const [localurl, setLocalurl] = useState(
    window.location.protocol + "//" + window.location.host
  );
  const [ismenu, setIsmenu] = useState(0);
  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    console.log(menu);
    for (let i = menu.length - 1; i >= 0; i--) {
      if (scrollTop + 60 >= menu[i].top) {
        setIsmenu(i);
        break;
      }
    }
  };
  useEffect(() => {
    if (!menu) return;
    document.querySelectorAll(".menu-title").forEach(function (item) {
      item.addEventListener("mouseover", function () {
        document.querySelectorAll(".menu-title").forEach(function (title) {
          title.style.filter = "blur(0)";
        });
      });
      item.addEventListener("mouseout", function () {
        document.querySelectorAll(".menu-title").forEach(function (title) {
          title.style.filter = "blur(0.8px)";
        });
      });
    });
    window.addEventListener("scroll", handleScroll);
    // 清理函数，组件卸载时移除监听
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menu]);
  const toMenu = (i) => {
    window.scrollTo({
      top: menu[i].top,
      left: 0,
      behavior: "smooth",
    });
  };
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // 使用解构赋值来交换元素
    }
    return array;
  };

  // 打乱后的数组
  let shuffledArticle = shuffleArray([...article]); // 使用扩展运算符来复制数组，避免修改原数组

  // 取前五个元素
  let randomFiveItems = shuffledArticle.slice(0, 5);
  return (
    <div className="page__content__right">
      <div className="el-card user__card">
        <img
          className="user__card__img"
          src={localurl + "/static/images/pika.png"}
          alt=""
        />
        <div className="user__card__name">
          <span style={{ fontSize: "0.8em" }}>你好，很高兴认识你 👋</span>
          <br />
          <div
            style={{ margin: "0.8rem 0", fontSize: "1.5em", fontWeight: 700 }}
          >
            我是洋记严选
          </div>
          <div className="user__card__content">
            在这里你可以找到
            <br />
            <b>前端</b>、<b>ThreeJS</b>、<b>Python</b>、<b>微信小程序</b>
            的相关技术文档和我遇到的问题。
            <div style={{ margin: "0.6rem 0" }}>
              欢迎大家到评论区提出浏览过程中遇到的问题和看法
            </div>
          </div>
          <div className="flex">
            <div>
              <a href="https://space.bilibili.com/2861496" target="_blank">
                <i title="mail" className="icon fa-brands fa-bilibili"></i>
              </a>
            </div>
            <Link
              className="button"
              style={{ color: "var(--font-color)" }}
              to="/about"
            >
              <i className="fa-solid fa-circle-plus"></i>
              <span>了解更多</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="el-card qq__card flip">
        <div className="qq__card__name">
          <b>关注阿洋</b>
          <i className="iconfont icon-qq"></i>
          <font color="#fff"> 一起分享学习的快乐 </font>
          <div className="qq__card__code">
            <b>扫一扫</b>
            <font color="#fff"> 关注阿洋 </font>
            <img src={localurl + "/static/images/code.jpg"} alt="" />
          </div>
        </div>
      </div>
      <div className="aside__fixed">
        <div className="el-card" style={{ marginBottom: "1rem" }}>
          {!menu && (
            <div
              className="right__tags menu-title-box"
              style={{ border: "none" }}
            >
              <h3>
                <i
                  style={{ marginRight: "8px" }}
                  className="fa-solid fa-fire"
                ></i>
                <span>今日热门</span>
              </h3>
              {shuffleArray([...article])
                .slice(0, 5)
                .map((item, idx) => (
                  <div
                    className="menu-title-box-flex"
                    key={item.title}
                    onClick={() => {
                      navigate("/post/" + item.title);
                    }}
                  >
                    <span
                      style={{
                        color: idx === 0 && "var(--active-color)",
                        background: idx === 0 && "var(--systemThemeColor)",
                      }}
                      className="menu-title-box-index"
                    >
                      {idx + 1}
                    </span>
                    <div className="menu-title-box-t">{item.title}</div>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className="el-card">
          {menu && (
            <div className="right__tags menu-title-box">
              <h3>
                <i
                  style={{ marginRight: "8px" }}
                  className="fa-solid fa-bars"
                ></i>
                <span>文章目录</span>
              </h3>
              {menu.map((item, idx) => (
                <div
                  key={item.title}
                  onClick={() => {
                    toMenu(idx);
                  }}
                  className={"menu-title" + (idx === ismenu ? " active" : "")}
                >
                  {item.title}
                </div>
              ))}
            </div>
          )}
          <div className="right__tags flex" style={{ justifyContent: "start" }}>
            {tags.map((item) => (
              <a
                href={"/tags?t=" + item.value}
                className="right__tags__tag"
                key={item.value}
              >
                {item.value} <font>{item.count}</font>
              </a>
            ))}
          </div>
          <div className="busuanzi">
            <p className="flex">
              <span className="webinfo-item-title">
                <i className="fa-solid fa-file-lines"></i>
                <span>文章总数 :</span>
              </span>
              <span>{total}</span>
            </p>
            <p className="flex">
              <span className="webinfo-item-title">
                <i className="fa-solid fa-clock"></i>
                <span>建站天数 :</span>
              </span>
              <span>
                {(
                  (new Date() - new Date(2024, 9, 1)) /
                  (1000 * 60 * 60 * 24)
                ).toFixed(0)}
              </span>
            </p>
            <p className="flex">
              <span
                className="webinfo-item-title"
                id="busuanzi_container_site_pv"
              >
                <i className="fa-solid fa-user"></i>
                <span>总访问量 :</span>
              </span>
              <span id="busuanzi_value_site_pv"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Side;
