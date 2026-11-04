"use strict";
// 業務実績のURLはリンク化しない。画像は掲載許可の確認後に差し替える。
const media = [
  {name:"マッチングアプリ大学",url:"https://next-level.biz/maripita/app/"},
  {name:"マリピタ",url:"https://next-level.biz/maripita/"},
  {name:"縁結び大学",url:"https://enmusubis.jp/"},
  {name:"地方移住",url:"https://ijyu.enmusubis.jp/"},
  {name:"スピカ",url:"https://marri-marri.jp/media/"},
  {name:"GENTRY",url:"https://marri-marri.jp/gentry/"},
  {name:"MoreJob",url:"https://morejob.co.jp/"},
  {name:"ミライのお仕事",url:"https://morejob.co.jp/mirai/"}
];
const applications = [
  {name:"Flender",kind:"VIRTUAL OFFICE SAAS / LANDING PAGE",summary:"仮想オフィスSaaSのWebアプリケーション開発と、サービス紹介LPの制作を担当。",detail:"Reactによるフロントエンド開発、チャット・Web会議・スケジュール・メモ・管理画面のUI実装、API連携、開発進行の調整。",tags:["React","JavaScript","CakePHP","Axios","Storybook"],url:"https://flender.jp/",urlNote:"サービス紹介LPも制作を担当"},
  {name:"Prooful",kind:"MATCHING APPLICATION",summary:"本人認証を厳格化した婚活向けマッチングアプリの開発。バックエンド開発のリードから全体の開発進行まで担当。",detail:"CakePHPでのAPI・DB設計、タスク管理、レビュー、テスト、開発調整を担当。Flutter/Dartはプロジェクト使用技術であり、主な直接実装領域ではありません。",tags:["CakePHP","PHP","API設計","DB設計","開発進行"],url:"https://prooful.jp/",urlNote:"LPはサービス紹介用。LP自体の制作は担当外"},
  {name:"アフィリエイトASP管理画面",kind:"ADMIN DASHBOARD",summary:"アフィリエイトASPの運営者向け管理画面のUI開発を担当。",detail:"HTML・CSS・JavaScriptとCakePHPを使用したチーム開発。",tags:["HTML","CSS","JavaScript","CakePHP"]},
  {name:"ヒートマップ・アクセス解析システム",kind:"INTERNAL ANALYTICS SYSTEM",summary:"社内向けアクセス解析システムのフロントエンドUI開発を担当。",detail:"管理画面のUIと一部ヒートマップ表示を実装。解析エンジン本体の開発は担当外。一般向けSaaSとしては未公開。",tags:["CakePHP","JavaScript","jQuery","HTML / CSS"]},
  {name:"インターン紹介システム管理画面",kind:"PROTOTYPE",summary:"インターン紹介システムの管理画面プロトタイプを開発。",detail:"Next.jsとReact Adminを用いた環境構築、ログイン、学生・企業のCRUD、マッチング一覧、メッセージ画面、API連携を担当。",tags:["Next.js","React Admin","SWR","API連携"]}
];
const monitorSvg='<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="8" width="36" height="26" rx="2"/><path d="M18 40h12M24 34v6M6 15h36"/></svg>';
function node(tag,cls,text){const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;}
function renderMedia(){const root=document.getElementById("media-grid");if(!root)return;media.forEach(item=>{const card=node("article","media-card");const visual=node("div","media-visual");visual.innerHTML=monitorSvg;visual.append(node("span","", "IMAGE COMING SOON"));const content=node("div","media-content");content.append(node("h4","",item.name),node("p","","WEB SITE / WORDPRESS"),node("div","plain-url",item.url));card.append(visual,content);root.append(card);});}
function renderApps(){const root=document.getElementById("app-list");if(!root)return;applications.forEach((item,index)=>{const card=node("article","app-card");card.append(node("div","app-number",String(index+1).padStart(2,"0")));const main=node("div","app-main");main.append(node("p","project-kicker",item.kind),node("h4","",item.name),node("p","",item.summary),node("p","detail",item.detail));const tags=node("div","tags");item.tags.forEach(t=>tags.append(node("span","tag",t)));main.append(tags);card.append(main);const side=node("div","app-side");side.append(node("p","side-label",item.url?"PUBLIC SERVICE PAGE":"PROJECT INFORMATION"));if(item.url){side.append(node("div","plain-url",item.url),node("p","side-note",item.urlNote));}else{side.append(node("p","side-note","非公開プロジェクトのため画面・URLは掲載していません。"));}card.append(side);root.append(card);});}
renderMedia();renderApps();