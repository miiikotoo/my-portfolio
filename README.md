# Mikoto Shishido Portfolio

転職活動で採用担当者に提出する、Mikoto Shishido のエンジニアポートフォリオです。
Webサイト・メディア制作、アプリケーション・システム開発、個人制作の実績を紹介します。

公開サイトは [www.mikoto0506.site](https://www.mikoto0506.site/) です。

## ディレクトリ構成

```text
.
├── src/                 # サーバーの公開ルート（公開するファイルのみ配置）
│   └── .assetsignore     # Cloudflareへのアップロードから除外するファイル
├── wrangler.jsonc       # Cloudflare Workers のデプロイ設定
├── .gitignore           # Gitの管理対象から除外するファイル
├── AGENTS.md            # 開発時の作業指示
├── PORTFOLIO_SPEC.md    # サイトの要件定義・掲載内容
└── README.md            # プロジェクトの概要・運用方法
```

HTML、CSS、JavaScript、公開用画像などは `src/` 配下に配置します。
実装時に必要なサブディレクトリを追加します。要件定義や開発用ファイルは公開ルートの外で管理します。

## 開発について

作業前に `PORTFOLIO_SPEC.md` と `AGENTS.md` を確認してください。
日本語主体のレスポンシブな静的サイトとして制作し、実績情報は追加・修正しやすいデータ形式で管理する方針です。
現時点でビルドツールや依存パッケージは導入していません。

次のコマンドでローカル確認できます（Python 3が必要です）。

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory src
```

ブラウザで http://localhost:8000 を開きます。終了するには `Ctrl+C` を押してください。

## Cloudflare Workers への自動デプロイ

`wrangler.jsonc` で既存の Worker `my-portfolio` に `src/` を静的アセットとして配信し、独自ドメイン `www.mikoto0506.site` を割り当てます。

Cloudflare ダッシュボードの **Workers & Pages → my-portfolio → Settings → Builds** で、この GitHub リポジトリを接続し、次のように設定します。

| 項目 | 設定 |
| --- | --- |
| 本番ブランチ | `main` |
| ルートディレクトリ | リポジトリのルート（`/`） |
| ビルドコマンド | 空欄 |
| デプロイコマンド | `npx wrangler deploy` |

接続後は `main` に変更が反映されるたびに本番へデプロイされます。詳細は [Cloudflare Workers Builds の公式ドキュメント](https://developers.cloudflare.com/workers/ci-cd/builds/) を参照してください。

## 掲載・公開時の注意

- 全ページに `<meta name="robots" content="noindex">` を設定します。`noindex` はアクセス制限ではありません。
- 業務サイトのURLはプレーンテキストで表示し、クリック可能なリンクにしません。
- 担当範囲や公開状況を正確に記載し、未確認の事実や成果数値を補いません。
- 業務実績の掲載許諾、画像の転載権利、機密情報の有無を確認します。
- タイピングRPGは既存ソースを確認してから統合します。

詳細は `PORTFOLIO_SPEC.md` を参照してください。
