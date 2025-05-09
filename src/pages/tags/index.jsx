import Side from "../../components/side/index";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPostList } from "../../api/post/post.js";
import { Pagination } from "antd";
function Archives(params) {
  let location = useLocation();
  useEffect(() => {
    let searchParams = new URLSearchParams(location.search);
    let t = searchParams.get('t') || '全部';
    setIsparam(t);
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
    getPostList().then(res => {
      let cat = [];
      let tag = [];
      for (let i = 0; i < res.length; i++) {
        cat.push(res[i].typename);
        tag = tag.concat(res[i].tag.split(","));
      }
      setCats([...new Set(cat)]);
      setTags(countDuplicates(tag));
      if (t !== '全部') {
        res = res.filter(item => item.tag.indexOf(t) > -1);
      }
      setArticles(res);
      setTotal(res.length);
    })
  }, [location]);
  const navigate = useNavigate();
  const [cats, setCats] = useState([]);
  const [tags, setTags] = useState([]);
  const [total, setTotal] = useState(0);
  const [articles, setArticles] = useState([]);
  const [current, setCurrent] = useState(1);
  const [isparam, setIsparam] = useState('全部');
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
    window.scrollTo({
      top: 350,
      left: 0,
    });
  };
  return (
    <div className="page">
      <div className="page__content flex flex__nocenter">
        <div className="page__content__left">
          <div className="el-card cat__title">
            {/* <div onClick={() => navigate("/archives")} className={
              'cat__title__list' +
              (isparam === "全部" ? ' cat__title__list__active' : '')
            }>
              全部
            </div> */}
            {tags.map((item, idx) => (
              <a
                href={"/tags?t=" + item.value}
                className={
                  'tags__button' +
                  (isparam === item.value ? ' cat__title__list__active' : '')
                }
                key={item.value + idx}
              >
                <i className="fa-solid fa-hashtag"></i>{" "}
                <span>{item.value}</span>
              </a>
            ))}
          </div>
          <div className="el-card archives__content">
            <h1 className="article-sort-title">
              文章<font>{total}</font>
            </h1>
            {/* {articles
              .filter(function (currentValue, idx) {
                return idx >= (current - 1) * 10 && idx < current * 10;
              })
              .map((item, index) => (
                <div key={index} className="archives__list">
                  <div
                    onClick={() => {
                      navigate("/post/" + item.title);
                    }}
                    className="archives__list__text"
                  >
                    <div>
                      <p className="archives__list__text__tit">{item.title}</p>
                      <div className="archives__list__text__tag flex">
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
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}
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
                        {index === 0 && current === 0 && (
                          <span className="new__arch">最新文章</span>
                        )}
                        {!(index === 0 && current === 0) && (
                          <span>{item.ctime}</span>
                        )}
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
export default Archives;
