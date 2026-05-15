
export default function handler(req: any, res: any) {
  const users = Array.from({ length: 10 }, () => ({
    like: [
      {
        created: "2026-01-18T13:42:42.739Z",
        id: "696ce352f2692dd81e9643b7",
        type: "posts",
        slug: "comment-problem-with-pjax",
        title: "Typecho 主题开启 Pjax 后评论出现的问题解决方案",
      },
      {
        created: "2026-01-18T10:18:36.592Z",
        id: "696cb37cf2692dd81e960229",
        type: "posts",
        slug: "how-to-use-ai-for-assisted-creation",
        title: "我是如何使用 AI 辅助创作的",
      },
      {
        created: "2026-01-17T14:10:08.545Z",
        id: "696b9840f2692dd81e9530e8",
        type: "posts",
        slug: "exploring-context-engineering",
        title: "初探 Context Engineering",
      },
      {
        created: "2026-01-16T06:37:55.156Z",
        id: "6969dcc3f2692dd81e937a73",
        type: "posts",
        slug: "after-leaving-folo-backup",
        title: "写在离开 Folo 之后",
      },
      {
        created: "2026-01-15T15:00:53.476Z",
        id: "69690125f2692dd81e92ae2b",
        type: "posts",
        slug: "lobehub-performance-dx-optimization",
        title: "记 LobeHub 的性能和 DX 优化",
      },
    ],
    comment: [
      {
        created: "2026-01-16T08:59:05.867Z",
        author: "Chuck",
        text: "十一哥哥好棒~有兴趣分享一下 React 应用的性能分析话题吗",
        avatar: "https://avatars.githubusercontent.com/u/15699954?v=4",
        title: "记 LobeHub 的性能和 DX 优化",
        slug: "lobehub-performance-dx-optimization",
        id: "696665f0c947e956bdb6518c",
        type: "posts",
      },
      {
        created: "2026-01-15T09:16:18.581Z",
        author: "Venus",
        text: "好文留念",
        avatar: "https://avatars.githubusercontent.com/u/30389296?v=4",
        title: "记 LobeHub 的性能和 DX 优化",
        slug: "lobehub-performance-dx-optimization",
        id: "696665f0c947e956bdb6518c",
        type: "posts",
      },
      {
        created: "2026-01-15T04:05:37.836Z",
        author: "lollapalooza",
        text: "大佬很强, 学习到了",
        avatar: "https://avatars.githubusercontent.com/u/17880398?v=4",
        title: "记 LobeHub 的性能和 DX 优化",
        slug: "lobehub-performance-dx-optimization",
        id: "696665f0c947e956bdb6518c",
        type: "posts",
      },
    ],
    recent: [
      {
        id: "6963d3b5ec2046b938102291",
        content:
          "看了这部电影只能说我一个打工人感触还是挺深的吧。\n只是影片中很多也是反映了当代职场以及社会的一些矛盾吧，某些公司喜欢找那些急需用钱家庭困难的员工，因为他们更容易被使唤也不敢辞职，男二也是这样，他兢兢业业每天加班，业绩提升的越快 KPI 涨得也越快，最后加班猝死了。但是即便是这样公司，会想办法处理伪造他的死亡说是酒精中毒，但其实只是过度劳累，最后只配得人道补偿¥50,000。我也经历过裁员，我也知道公司总是站在自己有利的一面，而我们和他们斗争太难了，我们的力量太小了，而公司很轻易的就能抹掉你曾经努力奋斗所付出的一切。\n最后有句话其实挺升华的，不过是上班，希望我们都能找回自己的生活。\n\nhttps://www.themoviedb.org/movie/1555232",
        up: 2,
        down: 0,
        created: "2026-01-11T16:45:41.469Z",
      },
      {
        id: "694ffe5c18388d4085d9b674",
        content:
          "关于 AI 创作和手作\n在 25.11 月发布的文章都会公开：在编写文章时是否使用了 AI 的辅助。\n\n可能很多人会反对使用 AI 进行创作，编写博客等等。那么当你看到文章顶部的 AI 声明之后你有权利选择直接关闭。\n\n我个人并不反对使用 AI 辅助写作，当编写技术文章时，我可以借助 AI 帮我快速根据相关实现绘制流程图，以便读者更加清晰的理解，而在前 AI 时代，则往往需要花费大量的时间，或者因为这个理由而放弃绘图。当编写生活记录时，我往往借助 AI 帮我取一个标题，我承认我不是一个大作家，写不出更好的文笔或者叙事结构，我想记录故事，而 AI 帮我整理故事。",
        up: 4,
        down: 0,
        created: "2025-12-27T15:42:20.950Z",
      },
      {
        id: "6933e42f7745918c21609749",
        content: "希望你能记住我，记住我曾这样存在过。 ---- 村上春树",
        up: 10,
        down: 0,
        created: "2025-12-06T08:07:11.350Z",
      },
    ],
    post: [
      {
        id: "696665f0c947e956bdb6518c",
        created: "2026-01-13T15:34:08.500Z",
        title: "记 LobeHub 的性能和 DX 优化",
        modified: "2026-01-13T16:36:41.857Z",
        slug: "lobehub-performance-dx-optimization",
        category_id: "5eb2c62a613a5ab0642f1f7e",
      },
      {
        id: "6951229c18388d4085db174e",
        created: "2025-12-28T12:29:16.526Z",
        title: "我是如何使用 AI 辅助创作的",
        modified: null,
        slug: "how-to-use-ai-for-assisted-creation",
        category_id: "5eb2c62a613a5ab0642f1f7e",
      },
      {
        id: "6931a3a67745918c215dd216",
        created: "2025-12-04T15:07:18.369Z",
        title: "Better Auth 的多租户用户鉴权的构想",
        modified: "2025-12-27T15:52:10.984Z",
        slug: "better-auth-multi-tenant-auth-concept",
        category_id: "5eb2c62a613a5ab0642f1f7e",
      },
    ],
    note: [
      {
        id: "694ffd5a18388d4085d9b298",
        created: "2025-12-27T15:38:02.649Z",
        title: "2025 · 仍在路上，半径之外",
        modified: null,
        nid: 205,
      },
      {
        id: "693e4bd17745918c216b6010",
        created: "2025-12-14T05:32:01.140Z",
        title: "在安稳中寻求生存",
        modified: null,
        nid: 204,
      },
      {
        id: "691a0b6577f73af8a8278bec",
        created: "2025-11-16T17:35:33.524Z",
        title: "在焦虑与创造之间寻找出口",
        modified: null,
        nid: 200,
      },
    ],
  }));
  res.status(200).json(users);
}
