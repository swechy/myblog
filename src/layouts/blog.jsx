import './blog.scss'
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Outlet, Link } from 'react-router-dom';
import { ConfigProvider, Layout, Popover, Modal, Input} from 'antd';
import { getPostList } from "../api/post/post.js";
import { useNavigate } from 'react-router-dom'
const { Header, Footer, Content } = Layout;

const Loading = ({ className }) => <div className={className}><svg className="loading__img icon" t="1662539817350" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2348" width="100" height="100"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#B26483" p-id="2349"></path><path d="M512 544m-347.73 0a347.73 347.73 0 1 0 695.46 0 347.73 347.73 0 1 0-695.46 0Z" fill="#CE6B8A" p-id="2350"></path><path d="M512 544m-208 0a208 208 0 1 0 416 0 208 208 0 1 0-416 0Z" fill="#FF7998" p-id="2351"></path><path d="M61.658 268.22l7.676 33.104 229.334 81.184 14.336-24.872-4.186-17.486a103.738 103.738 0 0 0 5.914-34.64c0-38.84-21.348-72.646-52.916-90.474 0.57-4.406 0.964-8.866 0.964-13.428 0-42.824-26.05-79.332-63.046-95.234-56.55 43.6-103.804 98.668-138.076 161.846z" fill="#9B5A6F" p-id="2352"></path><path d="M1.096 544C17.628 811.848 239.988 1024 512 1024s494.372-212.152 510.904-480H1.096z" fill="#FF4F70" p-id="2353"></path><path d="M416 544c0-53.02 42.98-96 96-96s96 42.98 96 96" fill="#FFFFFF" p-id="2354"></path><path d="M314.732 357.462c-0.592 0-1.138 0.16-1.728 0.174-7.958-39.604-42.91-69.442-84.858-69.442-1.996 0-3.862 0.454-5.824 0.586-14.11-40.636-52.636-69.854-98.078-69.854-13.064 0-25.444 2.656-36.962 7.058C34.968 303.516 3.476 396.178 0.404 496h314.328C352.988 496 384 464.986 384 426.732c0-38.256-31.012-69.27-69.268-69.27zM939.736 230.692c-40.228 4.372-73.554 31.528-86.516 68.506-1.968-0.112-3.918-0.3-5.916-0.3-45.332 0-83.766 29.148-97.842 69.686-1.948-0.164-3.82-0.584-5.81-0.584-38.164 0-69.102 30.938-69.102 69.102-19.082 0-34.55 15.468-34.55 34.55 0 19.082 15.468 34.55 34.55 34.55h349.302c-1.132-101.716-31.902-196.278-84.116-275.51z" fill="#9B5A6F" p-id="2355"></path><path d="M398.43 12.798a90.196 90.196 0 0 0-10.16 41.604c0 50.072 40.592 90.666 90.666 90.666 0.852 0 1.642-0.226 2.486-0.25 8 31.358 36.194 54.65 70.046 54.65C551.468 239.526 583.942 272 624 272c27.694 0 51.472-15.7 63.692-38.516 17.834 12.78 39.626 20.382 63.24 20.382 60.088 0 108.798-48.71 108.798-108.798 0-3.248-0.536-6.35-0.814-9.526C767.688 51.43 645.87 0 512 0c-39.05 0-77.024 4.518-113.57 12.798z" fill="#9B5A6F" p-id="2356"></path><path d="M512 813.334c148.75 0 269.334-120.584 269.334-269.334H242.666c0 148.748 120.584 269.334 269.334 269.334z" fill="#FFBC94" p-id="2357"></path><path d="M512 676.428c73.138 0 132.428-59.29 132.428-132.428H379.572c0 73.138 59.29 132.428 132.428 132.428z" fill="#FFE6B4" p-id="2358"></path><path d="M363.364 730.326h-150.338l-36.564-47.032h223.464zM303.652 532.188h-18.622v130.354h101.304c-0.002 0-26.072-130.354-82.682-130.354z" fill="#674447" p-id="2359"></path><path d="M288.06 554.712h15.404v107.83h-83.8c0.002 0 21.568-107.83 68.396-107.83z" fill="#674447" p-id="2360"></path><path d="M283.726 490.102h8.938v193.192h-8.938z" fill="#674447" p-id="2361"></path><path d="M682.496 599.718h-168.948l-24.628-34.768h210.96v17.384c0 9.6-7.782 17.384-17.384 17.384z" fill="#9B5A6F" p-id="2362"></path><path d="M507.028 570.02l35.492-35.492h134.726l13.036 30.422-47.08 31.146z" fill="#9B5A6F" p-id="2363"></path><path d="M585.256 525.474h28.972v13.4h-28.972zM561.354 516.724h4.812v22.15h-4.812z" fill="#9B5A6F" p-id="2364"></path><path d="M588 712.684v26.718h20v95.554h16.254v-19.522l53.02-32.05 53.018 32.05v19.524h16.254v-17.642l56.13-33.93 49.908 30.17v21.404h16.254v-18.236l55.148-33.338 15.94 9.636c2.198-3.34 4.268-6.77 6.388-10.164l-10.726-6.484 22.716-13.732a512.098 512.098 0 0 0 11.016-20.684l-45.334 27.404-49.552-29.956h96.176l0.004-0.008c4.358-8.776 8.53-17.658 12.39-26.71H588z m36.254 88.726v-50.076l41.418 25.038-41.418 25.038z m3.466-62.006h99.106l-49.552 29.956-49.554-29.956z m102.572 62.006l-41.418-25.038 41.418-25.038v50.076z m16.254 1.88v-53.838l44.53 26.918-44.53 26.92z m6.578-63.886h99.106l-49.552 29.956-49.554-29.956z m99.46 60.124l-38.308-23.158 38.308-23.158v46.316z m59.802-23.156l-43.548 26.326v-52.65l43.548 26.324z" fill="#674447" p-id="2365"></path></svg></div>;

const App = () => {
  const navigate = useNavigate();
  const [localurl, setLocalurl] = useState(window.location.protocol + '//' + window.location.host)
  const [theme, setTheme] = useState('darktheme'); // 假设有一个主题状态
  const [isLoading, setIsLoading] = useState(true); // 加载状态
  const [isFixedTop, setIsFixedTop] = useState(false); // 顶部导航是否固定
  const [logo, setLogo] = useState(true); // Logo显示状态
  const scrollbarRef = useRef(null); // Scrollbar引用
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searhvalue, setSearhvalue] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [postList, setPostList] = useState([]);
  // 事件处理函数
  const goPost = () => {
    const randomIndex = Math.floor(Math.random() * postList.length);
    const randomPost = postList[randomIndex];
    navigate(`/post/${randomPost.title}`);
  };

  const changeTheme = () => {
    // setTheme(prevTheme => (prevTheme === 'theme' ? 'darktheme' : 'theme'));
    window.open('https://github.com/swechy', '_blank');
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const openNewPage = (url) => {
    window.open(url, '_blank');
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (val) => {
    setSearhvalue(val.target.value);
    if (!val.target.value) return setSearchList([])
    let arr = []
    for (let i = 0; i < postList.length; i++) {
      if (postList[i].title.toLowerCase().indexOf(val.target.value.toLowerCase()) > -1) {
        arr.push(postList[i].title);
      }
    }
    setSearchList(arr)
  };

  const HighlightedText = (item) => {
    const regex = new RegExp(searhvalue, 'gi');
    const highlightedText = item.replace(regex, match => `<span style="color: #ffc848;">${match}</span>`);
    return highlightedText;
  };

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop >= 60) {
      setIsFixedTop(true);
    } else {
      setIsFixedTop(false);
    }
  };
  useEffect(() => {
    getPostList().then(res => {
      setPostList(res);
      setIsLoading(false);
    });
    // 监听html根标签的滚动事件
    window.addEventListener('scroll', handleScroll);
 
    // 清理函数，组件卸载时移除监听
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 空数组保证只在组件挂载时添加监听器一次
  // 渲染函数
  return (
    <ConfigProvider
      theme={{
        // 1. 单独使用暗色算法
        algorithm: theme.darkAlgorithm,
        components: {
          Popover: {
            colorPrimary: '#ffc848',
            colorBgBase: '#21232a',
            colorTextBase: '#fff',
            colorBorder: '#ffc848',
            algorithm: true, // 启用算法
          },
          Pagination: {
            colorPrimary: '#ffc848',
            colorBgBase: '#21232a',
            colorTextBase: '#fff',
            colorBorder: '#ffc848',
            colorInfo: '#ffc848',
            algorithm: true, // 启用算法
          },
          Modal: {
            colorPrimary: '#ffc848',
            colorBgBase: '#21232a',
            colorTextBase: '#fff',
            colorBorder: '#ffc848',
            algorithm: true, // 启用算法
          },
          Input: {
            colorPrimary: '#ffc848',
            colorBgBase: '#21232a',
            colorTextBase: '#fff',
            colorBorder: '#3d3d3f',
            activeBorderColor: '#ffc848',
            activeShadow: '#ffc848',
            algorithm: true, // 启用算法
          },
        },
        // 2. 组合使用暗色算法与紧凑算法
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}
    >
      <div id="app" className={'app'}>
        <Loading className={isLoading ? 'loading' : 'closeloading'} />
        <Layout>
          <Header className={isFixedTop ? 'nav__fixed1 nav__fixed' : 'nav__fixed1'}>
            <div className='nav'>
              <div className="logo">
                  <a
                    title="返回博客主页"
                    onMouseEnter={() => setLogo(false)}
                    onMouseLeave={() => setLogo(true)}
                    className="logo__home"
                    href="/"
                  >
                    {logo ? (
                      <span>
                        <font>洋记</font>严选
                      </span>
                    ) : (
                      <i style={{color: 'var(--active-color)'}} className="fas fa-home"></i>
                    )}
                  </a>
              </div>
              <div className="nav__menu__list">
                <Popover 
                  placement="bottom"
                  trigger="hover"
                  content={() => (
                      <div className="nav">
                        <Link to="/archives" className="menu__list">
                          <i className="fa-solid fa-book-open"></i>
                          文章列表
                        </Link>
                        <Link to="/archives" className="menu__list">
                          <i className="fa-solid fa-shapes"></i>
                          全部分类
                        </Link>
                        <Link to="/tags" className="menu__list">
                          <i className="fa-fw fas fa-tags"></i>
                          全部标签
                        </Link>
                      </div>
                    )
                  }>
                  <div className="menu__list">文库</div>
                </Popover >
                <Link to="/gamepad" className="menu__list">测试</Link>
                <Popover 
                  placement="bottom"
                  trigger="hover"
                  content={() => (
                      <div className="nav">
                        <Link to="/equipment" className="menu__list">
                          <i className="fa-solid fa-laptop"></i>
                          我的装备
                        </Link>
                        <Link to="/tools" className="menu__list">
                          <i className="fa-fw fas fa-tools"></i>
                          开发工具
                        </Link>
                        <Link to="/about" className="menu__list">
                          <i className="fa-fw fas fa-address-card"></i>
                          关于本站
                        </Link>
                      </div>
                    )
                  }>
                  <div className="menu__list">我的</div>
                </Popover >
              </div>
              <div className="nav__list">
                <div onClick={goPost} title="随机前往一篇博文" className="nav__right">
                <i className="fa-solid fa-train-subway"></i>
                </div>
                <div onClick={() => setIsModalOpen(true)} className="nav__right">
                <i className="fas fa-search"></i>
                </div>
                <div onClick={changeTheme} className="moon nav__right">
                  {/* <i class="fa-brands fa-github"></i> */}
                  <i className="fa-solid fa-moon"></i>
                </div>
                {isFixedTop && (
                  <div onClick={toTop} className="nav__right">
                    <i className="fa-solid fa-up-long"></i>
                  </div>
                )}
                <div onClick={() => { /* 打开抽屉菜单的逻辑 */ }} className="nav__right m__menu">
                <i className="fa-solid fa-bars"></i>
                </div>
              </div>
            </div>
          </Header>
          <Content>
            <Outlet />
          </Content>
          <Footer className="footer">
            <div className="footer__menu">
              <div className="footer__contact">
                <i className="iconfont icon-github" onClick={() => openNewPage('https://github.com/swechy')}></i>
                <i onClick={() => openNewPage('https://gitee.com/swechy')} title="gitee" className="iconfont icon-gitee"></i>
                <img
                  src={localurl + '/static/images/bilibili.jpg'}
                  alt="Bilibili"
                  onClick={() => openNewPage('https://space.bilibili.com/2861496')}
                  title="访问我的bilibili"
                />
                <i onClick={() => openNewPage('https://weibo.com/u/6035833154')} title="微博" className="iconfont icon-weibo"></i>
                <i onClick={() => openNewPage('mailto:swechy@qq.com')} title="mail" className="iconfont icon-email"></i>
              </div>
              <div className="footer__list">
                <ul>
                  <li>项目</li>
                  <li><a href="#">月月来趣</a></li>
                  <li><a href="#">涂鸦跳跃</a></li>
                </ul>
                <ul>
                  <li>开发</li>
                  <li><a href="/archives?t=前端开发">前端开发</a></li>
                  <li><a href="/archives?t=后端开发">后端开发</a></li>
                  <li><a href="/archives?t=数据库">数据库</a></li>
                </ul>
                <ul>
                  <li>生活</li>
                  <li><Link to="/equipment">我的装备</Link></li>
                  <li><Link to="/tools">开发工具</Link></li>
                  <li><Link to="https://space.bilibili.com/2861496">我的评测</Link></li>
                </ul>
                <ul>
                  <li>协议</li>
                  <li><Link to="/cookies">Cookies</Link></li>
                  <li><Link to="/privacy">隐私协议</Link></li>
                  <li><Link to="/copyright">版权协议</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer">
              <div className="footer__flex">
                <div>© 2020 - 2022 By<Link className="menu__list" to="/about">洋记严选</Link></div>
                {/*  UI By <a className="menu__list" href="https://blog.zhheo.com/" target="_blank" rel="noopener noreferrer">张洪Heo</a> */}
                <div>
                  <Link to="/about#tcomment" className="menu__list">留言</Link>
                  <Link to="/copyright" className="menu__list">协议</Link>
                  <Link to="/about" className="menu__list">关于</Link>
                </div>
              </div>
            </div>
          </Footer> 
        </Layout>
        <Modal title="搜索" footer={[]} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Input
            value={searhvalue}
            style={{width: '100%', margin: '1rem 0'}}
            onInput={handleSearch}
            placeholder="输入关键词查找"
          ></Input>
          <div>
            {searchList.map((item) => (<p className="search__list" key={item}><a href={'/post/' + item} dangerouslySetInnerHTML={{ __html: HighlightedText(item)}}></a></p>))}
          </div>
          {searchList.length !== 0 && <div className='search__list__time'>
            找到 {searchList.length} 条结果，用时 1 毫秒
          </div>}
        </Modal>
      </div>
    </ConfigProvider>
  );
};

export default App;