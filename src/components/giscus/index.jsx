import Giscus from '@giscus/react';

export default function MyGiscus() {
  return (
    <Giscus
      id="comments"
      repo="swechy/swechy.github.io"
      repoId="R_kgDOMby-ug"
      category="General"
      categoryId="DIC_kwDOMby-us4Clfdg"
      mapping="pathname"
      term="欢迎大家访问阿洋的博客!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="zh-CN"
      loading="lazy"
    />
  );
}