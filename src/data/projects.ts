export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  detail: string;
  background: string;
  tech: string[];
  image: string;
  liveUrl: string;
//   githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "outfit-archive",

    title: "Outfit Archive",
    description:
      "日々のコーディネートを記録し、あとから見返せるファッションアーカイブ。",
    detail:
     "コーディネートの写真・メモ・タグを保存し、過去のスタイルを検索しながら振り返れるアーカイブアプリです。",
    background:
      "SNSに投稿すると流れてしまう日々の服装を、自分の手元に蓄積できる場所として制作しました。",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    image: "/images/outfit-archive.jpg",
    liveUrl: "https://outfit-archive.vercel.app/public",
    // githubUrl: "https://github.com/tomoya-1124/outfit-archive",
  },
  {
    id: 2,
    slug: "poem-archive",
    title: "Poem Archive",
    description:
      "自作の詩や文章を、静かな世界観でまとめた作品アーカイブ。",
    detail:
    "自作の詩や短文を一覧・詳細ページで閲覧できる、ミニマルな作品アーカイブです。",
    background:
    "SNSのタイムラインとは別に、作品を静かに置いておける場所が欲しくて制作しました。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/poem-archive.jpg",
    liveUrl: "https://poem-archive-eight.vercel.app/public",
    // githubUrl: "https://github.com/tomoya-1124/poem-archive",
  },
  {
    id: 3,
    slug: "link-hub",
    title: "Link Hub",
    description:
      "SNSリンクをカードUIでまとめたリンクハブサイト。",
    detail:
    "SNSへのリンクをカードUIでまとめ、訪問者が目的のページへ移動しやすくしたリンクハブサイトです。",
    background:
    "複数のSNSアカウントのリンクを、ひとつのページに整理したいと思い制作しました。",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/images/link-hub.jpg",
    liveUrl: "https://my-links-inky.vercel.app/",
    // githubUrl: "https://github.com/example",
  },
];