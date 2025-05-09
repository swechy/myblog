function Privacy(params) {
  return (
    <div className="privacy__page">
    <h1>隐私政策</h1>
    <p>本站非常重视用户的隐私和个人信息保护。你在使用网站时，可能会收集和使用你的相关信息。通过《隐私政策》向你说明在你访问本网站时，如何收集、使用、保存、共享和转让这些信息。</p>
    <h1>一、在访问时如何收集和使用你的个人信息</h1>
    <p>在访问时，收集访问信息的服务会收集不限于以下信息：</p>
    <p><span className="privacy__yellow">网络身份标识信息</span>（浏览器UA、IP地址）</p>
    <p><span className="privacy__yellow">设备信息</span></p>
    <p><span className="privacy__yellow">浏览过程</span>（操作方式、浏览方式与时长、性能与网络加载情况）。</p>
    <p>在访问时，本人仅会处于以下目的，使用你的个人信息：</p>
    <p className="privacy__list">🟡 用于网站的优化与文章分类，用户优化文章</p>
    <p className="privacy__list">🟡 恶意访问识别，用于维护网站</p>
    <p className="privacy__list">🟡 恶意攻击排查，用于维护网站</p>
    <p className="privacy__list">🟡 网站点击情况监测，用于优化网站页面</p>
    <p className="privacy__list">🟡 网站加载情况监测，用于优化网站性能</p>
    <p className="privacy__list">🟡 用于网站搜索结果优化</p>
    <p className="privacy__list">🟡 浏览数据的展示</p>
    <h1>如何使用 Cookies 和本地 LocalStorage 存储</h1>
    <p>
      本站为实现无账号评论、深色模式切换，不蒜子的uv统计等功能，会在你的浏览器中进行本地存储，你可以随时清除浏览器中保存的所有 Cookies 以及 LocalStorage。
    </p>
    <h1>如何共享、转让你的个人信息</h1>
    <p>
      本人不会与任何公司、组织和个人共享你的隐私信息
    </p>
    <p>
      本人不会将你的个人信息转让给任何公司、组织和个人
    </p>
    <p>
      第三方服务的共享、转让情况详见对应服务的隐私协议
    </p>
    <h1>附属协议</h1>
    <p>当监测到存在恶意访问、恶意请求、恶意攻击、恶意评论的行为时，为了防止增大受害范围，可能会临时将你的ip地址及访问信息短期内添加到黑名单，短期内禁止访问。</p>
    <p>此黑名单可能被公开，并共享给其他站点（主体并非本人）使用，包括但不限于：IP地址、设备信息、地理位置。</p>
  </div>
  )
}
export default Privacy;