import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Pagination } from "antd";
import Side from "../../components/side/index";
import { getPostList } from "../../api/post/post.js";
function Index() {
  const navigate = useNavigate();
  const [cats, setCats] = useState([]);
  const [tags, setTags] = useState([]);
  const [total, setTotal] = useState(0);
  const [articles, setArticles] = useState([]);
  const [current, setCurrent] = useState(1);
  const [iconList, setIconList] = useState([
    {
      url: "static/icon/HTML5.svg",
      color: "#E34F26",
    },
    {
      url: "static/icon/CSS3.svg",
      color: "#264DE4",
    },
    {
      url: "static/icon/JavaScript.svg",
      color: "#FFD43B",
    },
    {
      url: "static/icon/jQuery.svg",
      color: "#264DE4",
    },
    {
      url: "static/icon/Nodejs.svg",
      color: "#98FB98",
    },
    {
      url: "static/icon/php.svg",
      color: "#777BB4",
    },
    {
      url: "static/icon/Bootstrap.svg",
      color: "#7952B3",
    },
    {
      url: "static/icon/SASS.svg",
      color: "#CC6699",
    },
  ]);
  const [iconList1, setIconList1] = useState([
    {
      url: "static/icon/Vue.svg",
      color: "#66CDAA",
    },
    {
      url: "static/icon/React.svg",
      color: "#61DAFB",
    },
    {
      url: "static/icon/Webpack.svg",
      color: "#5F9EA0",
    },
    {
      url: "static/icon/Python.svg",
      color: "#FFFFFF",
    },
    {
      url: "static/icon/GitHub.svg",
      color: "#333333",
    },
    {
      url: "static/icon/adobeillustrator.svg",
      color: "#FF9900",
    },
    {
      url: "static/icon/adobephotoshop.svg",
      color: "#31A8FF",
    },
    {
      url: "static/icon/adobepremiere.svg",
      color: "#5D31B4",
    },
  ]);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
    window.scrollTo({
      top: 350,
      left: 0,
    });
  };
  useEffect(() => {
    function countDuplicates(arr) {
      // 创建一个空对象来存储每个元素及其出现的次数
      const countMap = {};
      // 遍历数组，统计每个元素的出现次数
      arr.forEach((item) => {
        if (countMap[item]) {
          countMap[item]++;
        } else {
          countMap[item] = 1;
        }
      });
      // 创建一个空数组来存储结果
      const result = [];
      // 遍历统计对象，将每个元素及其出现次数添加到结果数组中
      for (const key in countMap) {
        if (countMap.hasOwnProperty(key)) {
          // 只添加重复的元素
          result.push({
            value: key,
            count: countMap[key],
          });
        }
      }
      return result;
    }
    async function fetchData() {
      const res = await getPostList();
      console.log(res);
      setArticles(res);
      let cat = [];
      let tag = [];
      for (let i = 0; i < res.length; i++) {
        cat.push(res[i].typename);
        tag = tag.concat(res[i].tag.split(","));
      }
      setCats([...new Set(cat)]);
      setTags(countDuplicates(tag));
      setTotal(res.length);
      console.log(articles);
    }
    fetchData();
  }, []);
  return (
    <div className="page">
      <div className="todayCard flex">
        <div className="flex flex__nocenter todayCard__banner">
          <div className="el-card todayCard__tit">
            <div className="todayCard__title marquee-container ">
              <div className="todayCard__title__content">
                <span>叩首问路，码梦为生</span>
                <p>真诚、热爱、分享</p>
              </div>
              <div className="marquee-row">
                <div className="marquee-track">
                  {iconList.map((item) => {
                    return (
                      <div
                        className="marquee-box-img"
                        style={{ background: item.color }}
                      >
                        <img src={item.url} className="marquee-img" />
                      </div>
                    );
                  })}
                </div>
                <div className="marquee-track">
                  {iconList.map((item) => {
                    return (
                      <div
                        className="marquee-box-img"
                        style={{ background: item.color }}
                      >
                        <img src={item.url} className="marquee-img" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="marquee-row">
                <div className="marquee-track marquee-track-2">
                  {iconList1.map((item) => {
                    return (
                      <div
                        className="marquee-box-img"
                        style={{ background: item.color }}
                      >
                        <img src={item.url} className="marquee-img" />
                      </div>
                    );
                  })}
                </div>
                <div className="marquee-track marquee-track-2">
                  {iconList1.map((item) => {
                    return (
                      <div
                        className="marquee-box-img"
                        style={{ background: item.color }}
                      >
                        <img src={item.url} className="marquee-img" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex__nowrap"
            style={{ height: "calc(28% - 0.7rem)", width: "100%" }}
          >
            <a
              onClick={() => navigate("/archives?t=前端开发")}
              className="el-card flex tuijian"
            >
              <p className="tuijian__title">前端开发</p>
              <i className="fa-brands fa-chrome"></i>
            </a>
            <a
              onClick={() => navigate("/dualsense")}
              className="el-card flex tuijian"
              style={{ margin: "0 0.6rem" }}
            >
              <p className="tuijian__title">DualSense测试</p>
              <i class="fa-brands fa-playstation"></i>
            </a>
            <a
              onClick={() => navigate("/gamepad")}
              className="el-card flex tuijian"
            >
              <p className="tuijian__title">Xbox测试</p>
              <i class="fa-brands fa-xbox"></i>
            </a>
          </div>
        </div>
        <div className="el-card todayCard__banner__right todayCard__banner">
          <p className="todayCard__banner__title">
            <span style={{ fontSize: "14px", opacity: 0.8 }}>coding</span>
            <br />
            好好学习，天天向上
          </p>
          <p className="todayCard__banner__footer">和 阿洋 一起健康成长</p>
          <div className="todayCard__banner__btn__1">
            <div
              className="todayCard__banner__btn "
              onClick={() => navigate("/three/xiaomisu7")}
            >
              <i className="fa-solid fa-car-side"></i>
              <span>一起学习</span>
            </div>
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
            <span className="dot dot-4"></span>
            <span className="dot dot-5"></span>
            <span className="dot dot-6"></span>
            <span className="dot dot-7"></span>
          </div>
        </div>
      </div>
      <div className="page__content flex flex__nocenter">
        <div className="page__content__left">
          <div className="el-card cat__title">
            <div className="cat__title__list cat__title__list__active">
              主页
            </div>
            {cats.map((item) => (
              <a
                key={item}
                onClick={() => navigate("/archives?t=" + item)}
                className="cat__title__list"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex">
            {articles
              .filter(function (currentValue, idx) {
                return idx >= (current - 1) * 10 && idx < current * 10;
              })
              .map((item, index) => (
                <div
                  onClick={() => {
                    navigate("/post/" + item.title);
                  }}
                  key={item.title + index}
                  className="el-card page__list"
                >
                  {/* <div className="page__list__img">
                    <img src={item.img} alt="" />
                  </div> */}
                  <div
                    className={
                      "video-cover video-cover" + Math.floor(Math.random() * 10)
                    }
                  >
                    <div className="title-container">
                      <h1>{item.t}</h1>
                    </div>
                  </div>
                  <div className="page__list__text">
                    <p className="page__list__text__tit">{item.title}</p>
                    <div className="page__list__text__tag flex">
                      <p>
                        {item.tag
                          .split(",")
                          .slice(0, 3)
                          .map((child) => (
                            <span key={child}>
                              # <font>{child}</font>
                            </span>
                          ))}
                      </p>
                      <p className="flex">
                        {index === 0 && current === 1 && (
                          <span className="new__arch">最新文章</span>
                        )}
                        {<span>{item.ctime}</span>}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <Pagination
            align="center"
            showSizeChanger={false}
            current={current}
            onChange={onChange}
            total={total}
          />
        </div>
        <Side cats={cats} tags={tags} total={total} article={articles} />
      </div>
    </div>
  );
}

export default Index;
