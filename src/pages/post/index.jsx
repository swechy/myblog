import "./post.scss";
import React, { useState, useEffect, useRef } from "react";
import { Popover } from "antd";
import { Link, useParams } from "react-router-dom";
import { marked } from "marked";
import MyGiscus from "../../components/giscus/index";
import Side from "../../components/side/index";
import { useLocation } from "react-router-dom";
// 接口管理
import { getPost, getPostList } from "../../api/post/post.js";
// import { Prism } from "../../assets/prism/prism.js";

function Post(params) {
  const location = useLocation();
  const [localurl, setLocalurl] = useState(
    window.location.protocol + "//" + window.location.host
  );
  const { id } = useParams();
  const articleRef = useRef(null);
  const [cats, setCats] = useState([]);
  const [tags, setTags] = useState([]);
  const [total, setTotal] = useState(0);
  const [articles, setArticles] = useState({
    categories: ["前端"],
    tags: ["前端"],
    title: "前端",
    date: "2022-06-14",
    location: "杭州",
    content: ''
  });
  const [hrefurl, setHrefurl] = useState(window.location);
  const [menu, setMenu] = useState([]);

  const countDuplicates = (arr) => {
    // 创建一个空对象来存储每个元素及其出现的次数
    const countMap = {};
    // 遍历数组，统计每个元素的出现次数
    arr.forEach(item => {
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
      if (countMap.hasOwnProperty(key)) { // 只添加重复的元素
        result.push({
          value: key,
          count: countMap[key]
        });
      }
    }
    return result;
  }
  const shareWeibo = () => {};
  const copyText = () => {};
  useEffect(() => {
    async function fetchData() {
      const res1 = await getPostList()
      let cat = []
      let tag = []
      for (let i = 0; i < res1.length; i++) {
        cat.push(res1[i].typename)
        tag = tag.concat(res1[i].tag.split(','))
      }
      setCats([...new Set(cat)])
      setTags(countDuplicates(tag))
      setTotal(res1.length)
      const res = await getPost(id + '.md')
      let html = marked.parse(res).replace(/<pre([^>]*)>/g, '<pre$1 class="line-numbers">');
      for (let i = 0; i < res1.length; i++) {
        if (id === res1[i].title) {
          setArticles({
            ...articles,
            title: res1[i].title,
            date: res1[i].ctime,
            location: '杭州',
            tags: res1[i].tag.split(','),
            categories: [res1[i].typename],
            content: html,
            word: res.length
          });
        }
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    /* eslint-disable */
    Prism.highlightAll()
    let dom = document.getElementsByTagName('h2')
    let array = [];
    for (let i = 0; i < dom.length; i++) {
      array.push({
        title: dom[i].innerHTML,
        top: dom[i].offsetTop
      })
    }
    setMenu(array)
  }, [articles]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0
    });
    async function fetchData() {
      const res1 = await getPostList()
      let cat = []
      let tag = []
      for (let i = 0; i < res1.length; i++) {
        cat.push(res1[i].typename)
        tag = tag.concat(res1[i].tag.split(','))
      }
      setCats([...new Set(cat)])
      setTags(countDuplicates(tag))
      setTotal(res1.length)
      const res = await getPost(id + '.md')
      let html = marked.parse(res).replace(/<pre([^>]*)>/g, '<pre$1 class="line-numbers">');
      for (let i = 0; i < res1.length; i++) {
        if (id === res1[i].title) {
          setArticles({
            ...articles,
            title: res1[i].title,
            date: res1[i].ctime,
            location: '杭州',
            tags: res1[i].tag.split(','),
            categories: [res1[i].typename],
            content: html,
            word: res.length
          });
        }
      }
    }
    fetchData();
  }, [location]);
  return (
    <div>
      <div className="top__img">
        <div className="top__img__img"></div>
        <div className="top__box">
          <div className="article__tag">
            {articles.categories.map((item, idx) => (
              <div className="font1" key={item + idx}>
                {item}
              </div>
            ))}
            {articles.tags.map((item, idx) => (
              <div
                className={`tags ${idx === 0 ? "tags tags-first" : "tags"}`}
                key={item + idx}
              >
                <i className="fa-solid fa-hashtag"></i>
                {item}
              </div>
            ))}
          </div>
          <p>{articles.title}</p>
          <p>
            <span className="meta">
              <i className="fa-fw post-meta-icon fas fa-file-word"></i>
              {articles.word}
            </span>
            <span className="meta">
              <i className="fa-fw post-meta-icon fas fa-calendar"></i>
              {articles.date}
            </span>
            <span className="meta">
              <i className="fas fa-location-dot post-meta-icon"></i>
              {articles.location}
            </span>
          </p>
        </div>
        <section className="main-hero-waves-area waves-area">
          <svg
            className="waves-svg"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M -160 44 c 30 0 58 -18 88 -18 s 58 18 88 18 s 58 -18 88 -18 s 58 18 88 18 v 44 h -352 Z"
              ></path>
            </defs>
            <g className="parallax">
              <use href="#gentle-wave" x="48" y="0"></use>
              <use href="#gentle-wave" x="48" y="3"></use>
              <use href="#gentle-wave" x="48" y="5"></use>
              <use href="#gentle-wave" x="48" y="7"></use>
            </g>
          </svg>
        </section>
      </div>
      <div className="post__page">
        <div className="page__content flex flex__nocenter">
          <div className="page__content__left">
            <div className="el-card article__card">
              <div ref={articleRef} className="article-section" id="article" dangerouslySetInnerHTML={{ __html: articles.content }}>
              </div>
              <div id="money" className="page__footer flex">
                <div>
                  <Popover
                    placement="top"
                    trigger="hover"
                    content={() => (
                      <div className="flex" style={{ padding: "0.5rem" }}>
                        <div style={{ marginRight: "10px" }}>
                          <img
                            style={{
                              width: "120px",
                              height: "120px",
                              objectFit: "cover",
                            }}
                            src={localurl + "/static/images/wxpay.jpg"}
                          />
                          <p align="center">微信</p>
                        </div>
                        <div>
                          <img
                            style={{
                              width: "120px",
                              height: "120px",
                              objectFit: "cover",
                            }}
                            src={localurl + "/static/images/zhifubao.jpg"}
                          />
                          <p align="center">支付宝</p>
                        </div>
                      </div>
                    )}
                  >
                    <div
                      slot="reference"
                      style={{ width: "133px" }}
                      className="share__button red"
                    >
                      <i className="fa-solid fa-mug-hot"></i> 打赏作者
                    </div>
                  </Popover>
                  <Link
                    to="/privacy"
                    style={{ width: "173px" }}
                    className="share__button green"
                  >
                    <i className="fas fa-seedling"></i> 隐私与服务政策
                  </Link>
                  <div
                    onClick={shareWeibo}
                    title="分享到微博"
                    className="share__button"
                  >
                    <i
                      style={{ fontSize: "1.1em" }}
                      className="fab fa-weibo"
                    ></i>
                  </div>
                  <div
                    onClick={copyText}
                    title="复制当前链接"
                    className="share__button"
                  >
                    <i
                      style={{ fontSize: "1.1em" }}
                      className="fas fa-link"
                    ></i>
                  </div>
                </div>
                <div>
                  {articles.tags.map((item, idx) => (
                    <a
                      href={"/tags?t=" + item}
                      className="tags__button"
                      key={item + idx}
                    >
                      <i className="fa-solid fa-hashtag"></i>{" "}
                      <span>{item}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="el-card flex">
                <div className="copyright">
                  <p>
                    <font>原创</font>
                    <b>{articles.title}</b>
                  </p>
                  <p>
                    <a href={hrefurl}>{decodeURIComponent(hrefurl)}</a>
                  </p>
                  <p>
                    本文是原创文章，采用{" "}
                    <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                      CC BY-NC-ND 4.0
                    </a>{" "}
                    协议，完整转载请注明来自 洋记严选
                  </p>
                </div>
              </div>
              <div className="comment__box">
                <i className="fas fa-message fa-fw"></i> 评论
              </div>
              <div id="tcomment">
                <MyGiscus />
              </div>
            </div>
          </div>
          <Side cats={cats} tags={tags} total={total} menu={menu} />
        </div>
      </div>
    </div>
  );
}

export default Post;
