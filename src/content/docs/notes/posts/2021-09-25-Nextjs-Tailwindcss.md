---
title: 2021-09-25-Nextjs-Tailwindcss
editUrl: false
description: Nextjs Tailwind css Github Vercel Netlify Typescript Eslint
---

## Nextjs,Tailwind CSS,Vercel,Github の構成図

記事の管理をマークダウンで記述して管理したかったのと記事と App を分離したかったのでこのような構成になりました。

App の変更があった場合はそちらだけで更新が可能です。
記事のみを投稿するときは Vercel の Deploy Hook と Github の Web Hooks を利用しています。

ユーザーは Vercel がホストするサーバーを閲覧しにいくことになります。
Github では記事と App のソースの管理を行います。

この構成では Github のパーソナルアクセストークンを利用しています。

\###　追記

構成図にある通りビルド&デプロイサーバーを Netlify から Vercel に変更しました。
カスタムドメインも変更しています。

Hugo のサイトも Vercel のサーバーへ移行しました。
