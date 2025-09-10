// import Giscus from '@giscus/react';

// export default function MyGiscus() {
//   return (
//     <Giscus
//       id="comments"
//       repo="swechy/swechy.github.io"
//       repoId="R_kgDOMby-ug"
//       category="General"
//       categoryId="DIC_kwDOMby-us4Clfdg"
//       mapping="pathname"
//       term="欢迎大家访问阿洋的博客!"
//       strict="0"
//       reactionsEnabled="1"
//       emitMetadata="0"
//       inputPosition="top"
//       theme="dark"
//       lang="zh-CN"
//       loading="lazy"
//     />
//   );
// }
import React, { useEffect } from "react";

export default function MyGiscus() {
  useEffect(() => {
    // 通过 CDN 引入 twikoo js 文件
    const cdnScript = document.createElement("script");
    cdnScript.src = "../static/js/twikoo.min.js"; // 'https://cdn.staticfile.org/twikoo/1.6.44/twikoo.all.min.js'
    cdnScript.async = true;

    const loadSecondScript = () => {
      // 执行 twikoo.init() 函数
      const initScript = document.createElement("script");
      initScript.innerHTML = `
            twikoo.init({
              envId: "http://192.168.1.11:8080/",
              el: '#twikoo-comment'
            });
          `;
      initScript.id = "twikoo-init-id"; // 添加唯一的 ID
      document.body.appendChild(initScript);
    };

    // 在 twikoo js 文件加载完成后，再加载执行 twikoo.init() 函数的 js 文件
    cdnScript.addEventListener("load", loadSecondScript);
    document.body.appendChild(cdnScript);

    return () => {
      if (loadSecondScript) {
        cdnScript.removeEventListener("load", loadSecondScript);
      }
      if (cdnScript) {
        document.body.removeChild(cdnScript);
      }
      const secondScript = document.querySelector("#twikoo-init-id");
      if (secondScript) {
        document.body.removeChild(secondScript);
      }
    };
  }, []);

  return <div id="twikoo-comment"></div>;
}
